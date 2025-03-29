import { Navigate, Outlet } from 'react-router';

import useAuth from '@/hooks/useAuth';

function PublicRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}
export default PublicRoute;
