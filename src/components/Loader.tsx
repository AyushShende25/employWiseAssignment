import { Loader2Icon } from 'lucide-react';

function Loader() {
  return (
    <div className="flex justify-center items-center flex-col mx-auto mt-10">
      <Loader2Icon className="animate-spin" />
      <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
export default Loader;
