import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface AuthContextType {
  token: string | null;
  logout: () => void;
  setToken: (token: string | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
