import { ServerCrash } from 'lucide-react';

function Error() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-10 gap-6">
      <ServerCrash size={80} />
      <h1 className="text-3xl font-bold text-center">
        Something went wrong, please try again later!
      </h1>
    </main>
  );
}
export default Error;
