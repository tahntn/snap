import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '@/schema';
import { fieldAuth, signupBody } from '@/types';
import { Icons } from '@/components/ui/icons';
import FormAuth from './components/FormAuth';

const SignupPage = () => {
  const { mutate: signup } = useAuth('register');
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const form = useForm({
    resolver: yupResolver(signupSchema(t)),
    defaultValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
    },
  });
  const onSubmit = (data: signupBody & { confirmPassword: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ..._data } = data;
    signup(_data);
  };
  const handleClickPassword = () => setShowPassword((prev) => !prev);
  const handleClickConfirmPassword = () => setShowConfirmPassword((prev) => !prev);
  const fieldLogin: fieldAuth[] = [
    {
      label: t('signup.form.email'),
      name: 'email',
      form: form,
      startAndornment: <Icons.mail />,
      placeholder: t('signup.form.placeholderEmail'),
    },
    {
      label: t('signup.form.username'),
      name: 'username',
      form: form,
      startAndornment: <Icons.user />,
      placeholder: t('signup.form.placeholderUsername'),
    },
    {
      label: t('signup.form.password'),
      name: 'password',
      form: form,
      startAndornment: <Icons.lockKeyhole />,
      endAndornment: (
        <div onClick={handleClickPassword}>{showPassword ? <Icons.eyeOff /> : <Icons.eye />}</div>
      ),
      placeholder: t('signup.form.placeholderPassword'),
      type: showPassword ? 'text' : 'password',
    },
    {
      label: t('signup.form.confirmPassword'),
      name: 'confirmPassword',
      form: form,
      startAndornment: <Icons.lockKeyhole />,
      endAndornment: (
        <div onClick={handleClickConfirmPassword}>
          {showConfirmPassword ? <Icons.eyeOff /> : <Icons.eye />}
        </div>
      ),
      placeholder: t('signup.form.placeholderConfirmPassword'),
      type: showConfirmPassword ? 'text' : 'password',
    },
  ];
  return <FormAuth form={form} fieldAuth={fieldLogin} type="signup" onSubmit={onSubmit} />;
};

export default SignupPage;
