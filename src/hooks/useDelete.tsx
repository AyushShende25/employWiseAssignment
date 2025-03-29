/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { userApi } from '@/api/usersApi';
import { User } from '@/types';

function useDelete() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => userApi.deleteUser(id),
    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey: ['users'] });

      // Get the current state of the cached data
      const previousUsers = queryClient.getQueryData(['users']);

      // Optimistically remove the deleted user
      queryClient.setQueryData(['users'], (oldData: any) => ({
        ...oldData,
        pages: oldData.pages.map((page: any) => ({
          ...page,
          data: page.data.filter((user: User) => user.id !== userId),
        })),
      }));

      return { previousUsers };
    },
    onSuccess: () => {
      toast.success('user deleted successfully');
    },
    onError: (error, _variables, context) => {
      queryClient.setQueryData(['users'], context?.previousUsers);
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
}
export default useDelete;
