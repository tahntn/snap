import { getAxios } from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';

interface IProps {
  limit?: number;
}

export const useFriends = ({ limit = 5 }: IProps = {}) => {
  return useInfiniteQuery(
    ['friends'],
    async ({ pageParam = 1 }) => {
      const res = await getAxios('/friend/list-v2', {
        page: pageParam,
        limit,
      });
      return res;
    },
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getNextPageParam: (res: any) => {
        if (res.data.length > 0 && res.data.length === res.pagination.limit) {
          return res.pagination.page + 1;
        }
        return undefined;
      },
    }
  );
};
