/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { userApi } from '@/api/usersApi';
import { UpdateUserInput, User } from '@/types';

function useUpdate({ userId }: { userId: number }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (updatedUser: UpdateUserInput) =>
      userApi.updateUser(userId, updatedUser),
    onMutate: async (updatedUser) => {
      await queryClient.cancelQueries({ queryKey: ['users'] });

      const previousUsers = queryClient.getQueryData(['users']);

      queryClient.setQueryData(['users'], (oldData: any) => ({
        ...oldData,
        pages: oldData.pages.map((page: any) => ({
          ...page,
          data: page.data.map((u: User) =>
            u.id === userId ? { ...u, ...updatedUser } : u
          ),
        })),
      }));

      return { previousUsers };
    },
    onError: (error, _updatedUser, context) => {
      queryClient.setQueryData(['users'], context?.previousUsers);
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success('User updated successfully');
    },
  });
  return { mutate, isPending };
}
export default useUpdate;
