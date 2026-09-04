import { apiFetch } from './api'
import type { AuthData } from '@/types'

export function login(
  email: string,
  password: string
): Promise<AuthData> {
  return apiFetch<AuthData>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export function register(
  username: string,
  email: string,
  password: string
): Promise<unknown> {
  return apiFetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
  })
}
