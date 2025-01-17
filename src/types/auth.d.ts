export interface fieldAuth {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
  startAndornment?: JSX.Element;
  endAndornment?: JSX.Element;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

export interface loginBody {
  email: string;
  password: string;
}

export interface signupBody {
  email: string;
  password: string;
  username: string;
}
