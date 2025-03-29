import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Login from '@/pages/Login';
import Home from '@/pages/Home';
import { Toaster } from '@/components/ui/sonner';
import AuthProvider from '@/components/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import PublicRoute from '@/components/PublicRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}
export default App;
