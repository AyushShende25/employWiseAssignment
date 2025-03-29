import { Rabbit } from 'lucide-react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-10 gap-6">
      <Rabbit size={80} />
      <h1 className="text-3xl font-bold text-center">
        The Resource you're looking for does not exist
      </h1>
      <Button>
        <Link to="/">Go Home</Link>
      </Button>
    </main>
  );
}
export default NotFound;
