import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { Box, Text } from '@radix-ui/themes';

import React from 'react';
import SettingItem from './SettingItem';
import { settingList } from '@/constants/setting';
import { useTranslation } from 'react-i18next';
import { useGetMe } from '@/hooks';
import { Skeleton } from '@/components/ui/skeleton';
import { useNavigate } from 'react-router-dom';
import { DialogLanguage, DialogTheme } from '@/components/Dialog';
import AvatarUser from '@/components/AvatarUser';
import { Separator } from '@/components/ui/separator';

const SettingPage: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetMe();
  const navigate = useNavigate();
  return (
    <Box>
      <Box className="overflow-y-auto overflow-x-hidden h-screen p-6">
        <Box className="flex items-center gap-4">
          <Icons.chevronLeft
            className={cn(
              'cursor-pointer w-10 h-10 p-2 box-border rounded-full',
              'hover:bg-gray-500 transition-all duration-150 linear'
            )}
            onClick={() => navigate(-1)}
          />
          <Text className="font-bold text-2xl">{t('setting.title')}</Text>
        </Box>
        {/* Avatar */}
        <Box className="mt-4  flex items-center justify-between p-4 pr-0 box-border w-full ">
          <Box className="flex gap-6 w-full">
            {isLoading ? (
              <div className="flex items-center space-x-4  w-full">
                <Skeleton className="h-12 w-12 rounded-full bg-foreground" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full bg-foreground " />
                  <Skeleton className="h-4 w-3/4 bg-foreground" />
                </div>
              </div>
            ) : (
              <>
                <AvatarUser
                  url={data?.avatar}
                  name={data?.username?.[0]}
                  classNameAvatar="!w-[56px] !h-[56px] "
                />

                <h2
                  className={`self-center text-xl font-semibold whitespace-nowrap dark:text-white`}
                >
                  <h3 className="text-lg  font-bold whitespace-nowrap dark:text-white line-clamp-1">
                    {data?.username}
                  </h3>
                  <h4 className="text-xs font-bold text-gray-800 dark:text-gray-400 line-clamp-1">
                    {data?.email}
                  </h4>
                </h2>
              </>
            )}
          </Box>
        </Box>
        <Separator />
        {/* List options */}
        <Box className="mt-4 flex flex-col ">
          {settingList(t)?.map((settingItem) => (
            <SettingItem
              key={settingItem.id}
              title={settingItem.title}
              Icon={settingItem.Icon}
              id={settingItem.id}
            />
          ))}
        </Box>
      </Box>
      <DialogTheme />
      <DialogLanguage />
    </Box>
  );
};

export default SettingPage;
