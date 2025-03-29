import { type User } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

function UserCard({ user }: { user: User }) {
  return (
    <Card className="w-[250px] h-[250px]">
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
    </Card>
  );
}
export default UserCard;
