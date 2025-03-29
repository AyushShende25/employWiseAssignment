import { infiniteQueryOptions } from '@tanstack/react-query';

import { api } from '@/api/axiosInstance';

export const userApi = {
  fetchUserList: async (pageParam:number) => {
    const res = await api.get(`/api/users?page=${pageParam}`);
    return res.data;
  },
};

export const fetchUsersQueryOptions = ()=>infiniteQueryOptions({
  queryKey: ['users'],
  queryFn: ({ pageParam }) => userApi.fetchUserList(pageParam),
  initialPageParam: 1,
  getNextPageParam: (lastPage, _allPages, lastPageParam) => {
    if (lastPageParam >= lastPage.total_pages) {
      return undefined;
    }
    return lastPageParam + 1;
  },
  retry: false,
  staleTime: Infinity,
})