import {
  createContext,
  useState,
  useMemo,
  use,
  useEffect,
  type ReactNode,
} from 'react'
import { login as loginService, register as registerService } from '../services/authService'
import { getUserById } from '../services/userSerice'
import type { User, AuthData } from '../types'

interface AuthContextValue {
  token: string | null
  userId: string | null
  role: string | null
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<AuthData>
  register: (username: string, email: string, password: string) => Promise<unknown>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

async function register(
  username: string,
  email: string,
  password: string
): Promise<unknown> {
  return await registerService(username, email, password)
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'))
  const [role, setRole] = useState<string | null>(localStorage.getItem('role'))
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (userId && token) {
      getUserById(userId)
        .then(setUser)
        .catch(() => setUser(null))
    }
  }, [userId, token])

  async function login(email: string, password: string): Promise<AuthData> {
    const data = await loginService(email, password)
    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.userId)
    localStorage.setItem('role', data.role)
    setToken(data.token)
    setUserId(data.userId)
    setRole(data.role)
    return data
  }

  function logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('role')
    setToken(null)
    setUserId(null)
    setRole(null)
    setUser(null)
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      userId,
      role,
      user,
      login,
      register,
      logout,
      isAuthenticated: !!token,
    }),
    [token, userId, role, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = use(AuthContext)
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }
  return ctx
}
