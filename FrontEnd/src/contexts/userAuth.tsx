import { createContext, useContext, useState, useEffect } from 'react';
import { login as loginService, register as registerService } from '../services/authService';
import { getUserById } from '../services/userService';
import type { userResponse } from '../types/userResponse';
import type { AuthContextType } from '../types/authResponse';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
  const [user, setUser] = useState<userResponse | null>(null);


  useEffect(() => {
    if (userId && token) {
      getUserById(userId).then(setUser).catch(() => setUser(null));
    }
  }, [userId, token]);

  async function login(email: string, password: string) {
    const data = await loginService(email, password);
    sessionStorage.setItem('token', data.token);
    sessionStorage.setItem('userId', data.userId);
    setToken(data.token);
    setUserId(data.userId);
    return data;
  }

  async function register(username: string, email: string, password: string) {
    return await registerService(username, email, password);
  }

  function logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('role');
    setToken(null);
    setUserId(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ token, userId, user, login, register, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro do AuthProvider');
  return context;
}