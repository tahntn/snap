import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useUploadFile } from '@/hooks';
import { cn } from '@/lib/utils';
import { Text } from '@radix-ui/themes';
import { useConversationStore } from '@/store';
import { useTranslation } from 'react-i18next';

const ButtonMore = () => {
  const { t } = useTranslation();
  const { getRootProps, getInputProps } = useUploadFile();
  const { handleOpenGif } = useConversationStore((state) => state);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className={cn('rounded-2xl  bg-custom_5  text-black h-[40px] w-[40px] p-3')}>
          <Icons.moreHorizontal className="w-full h-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-30" align="end">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
          <li className="pb-3">
            <PopoverClose asChild>
              <div
                {...getRootProps({ className: 'dropzone' })}
                className="flex gap-3 items-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <div>
                  <Icons.image className="h-5 w-5" />
                </div>
                <Text>{t('message.more.gallery')}</Text>
              </div>
            </PopoverClose>
          </li>
          <li className="py-3">
            <PopoverClose asChild onClick={() => handleOpenGif('gif')}>
              <div className="flex gap-3 items-center cursor-pointer">
                <div>
                  <Icons.gif className="h-5 w-5 dark:bg-white dark:rounded-sm" />
                </div>
                <Text>{t('message.more.gif')}</Text>
              </div>
            </PopoverClose>
          </li>
          <li className="pt-3">
            <PopoverClose asChild onClick={() => handleOpenGif('sticker')}>
              <div className="flex gap-3 items-center cursor-pointer">
                <div>
                  <Icons.sticker className="h-5 w-5" />
                </div>
                <Text>{t('message.more.sticker')}</Text>
              </div>
            </PopoverClose>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ButtonMore;
