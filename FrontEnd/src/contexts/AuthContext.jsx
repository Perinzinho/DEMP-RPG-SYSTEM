import { createContext, use, useState, useEffect } from 'react';
import { login as loginService, register as registerService } from '../services/authService';
import { getUserById } from '../services/userSerice';


const AuthContext = createContext(null);

async function register(username, email, password) {
  return await registerService(username, email, password);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId && token) {
      getUserById(userId).then(setUser).catch(() => setUser(null));
    }
  }, [userId, token]);

async function login(email, password) {
    const data = await loginService(email, password);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('role', data.role);
    setToken(data.token);
    setUserId(data.userId);
    setRole(data.role);
    return data;
}
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    setToken(null);
    setUserId(null);
    setRole(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ token, userId, role, user, login, register, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return use(AuthContext);
}