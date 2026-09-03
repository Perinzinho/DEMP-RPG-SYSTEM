import { apiFetch } from './api'
import type { Character } from '@/types'

export function getCharactersByUserId(userId: string): Promise<Character[]> {
  return apiFetch<Character[]>(`/characters/user/${userId}`, { method: 'GET' })
}

export function getCharacterById(id: string): Promise<Character> {
  return apiFetch<Character>(`/characters/${id}`, { method: 'GET' })
}

export function getCharactersByRoomId(roomId: string): Promise<Character[]> {
  return apiFetch<Character[]>(`/characters/room/${roomId}`, { method: 'GET' })
}

export function updateCharacter(
  id: string,
  dto: Partial<Character>
): Promise<Character> {
  return apiFetch<Character>(`/characters/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  })
}

export function createCharacter(
  dto: Partial<Character> & Record<string, unknown>
): Promise<Character> {
  return apiFetch<Character>('/characters', {
    method: 'POST',
    body: JSON.stringify(dto),
  })
}
