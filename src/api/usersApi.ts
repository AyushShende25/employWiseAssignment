import { infiniteQueryOptions } from '@tanstack/react-query';

import { api } from '@/api/axiosInstance';
import { UpdateUserInput } from '@/types';

export const userApi = {
  fetchUserList: async (pageParam: number) => {
    const res = await api.get(`/api/users?page=${pageParam}`);
    return res.data;
  },
 
  updateUser: async (userId: number, data: UpdateUserInput) => {
    const res = await api.put(`/api/users/${userId}`, data);
    return res.data;
  },

  deleteUser: async (userId: number) => {
    const res = await api.delete(`/api/users/${userId}`);
    return res.status;
  },
};

export const fetchUsersQueryOptions = () =>
  infiniteQueryOptions({
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
  });
