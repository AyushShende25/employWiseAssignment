import { Loader, Trash2 } from 'lucide-react';

import { type User } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EditDialog from '@/components/EditDialog';
import useDelete from '@/hooks/useDelete';

function UserCard({ user }: { user: User }) {
  const { mutate: deleteMutation, isPending } = useDelete();

  const handleDelete = (userId: number) => {
    deleteMutation(userId);
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <Card className="w-[250px] h-[270px]">
      <CardHeader className="">
        <img
          className="rounded-full mx-auto w-28 h-28 object-cover"
          src={user?.avatar}
          alt="profile pic"
        />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-center">
          {user?.first_name} {user?.last_name}
        </p>
      </CardContent>
      <CardFooter className="gap-3 justify-end">
        <Button
          onClick={() => handleDelete(user?.id)}
          className="cursor-pointer"
          size="icon"
        >
          <Trash2 />
        </Button>
        <EditDialog user={user} />
      </CardFooter>
    </Card>
  );
}
export default UserCard;
