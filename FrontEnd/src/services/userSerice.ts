import { apiFetch } from './api'
import type { User } from '@/types'

export function getUserById(id: string): Promise<User> {
  return apiFetch<User>(`/users/${id}`, { method: 'GET' })
}
