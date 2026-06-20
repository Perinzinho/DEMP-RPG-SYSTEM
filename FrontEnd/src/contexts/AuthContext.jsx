import { createContext, useContext, useState } from 'react';
import { login as loginService } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  async function login(email, password) {
    const data = await loginService(email, password);
    localStorage.setItem('token', data.token);
    setToken(data.token);
    return data;
  }

  function logout() {
    localStorage.removeItem('token');
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}