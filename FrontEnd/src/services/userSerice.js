import { apiFetch } from './api';

export function getUserById(id) {
  return apiFetch(`/users/${id}`, { method: 'GET' });
}