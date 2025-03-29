import { useInfiniteQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import UserCard from '@/components/UserCard';
import Loader from '@/components/Loader';
import Error from '@/components/Error';
import { fetchUsersQueryOptions } from '@/api/usersApi';
import { type User } from '@/types';

function Home() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error,
  } = useInfiniteQuery(fetchUsersQueryOptions());

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main className="py-10 px-10">
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-6 md:gap-8 justify-self-center">
        {data?.pages.map((page) => {
          return page.data.map((item: User) => (
            <UserCard key={item.id} user={item} />
          ));
        })}
      </div>
      <div className="w-fit mx-auto my-6">
        <Button
          className="cursor-pointer"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </Button>
      </div>
    </main>
  );
}
export default Home;
