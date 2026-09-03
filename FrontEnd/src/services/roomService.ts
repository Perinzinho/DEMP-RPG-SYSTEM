import { apiFetch } from './api'
import type { Room } from '@/types'

export function joinRoom(roomCode: string): Promise<Room> {
  return apiFetch<Room>('/rooms/join', {
    method: 'POST',
    body: JSON.stringify({ roomCode }),
  })
}

export function getAllRooms(): Promise<Room[]> {
  return apiFetch<Room[]>('/rooms', { method: 'GET' })
}

export function getRoomById(id: string): Promise<Room> {
  return apiFetch<Room>(`/rooms/${id}`, { method: 'GET' })
}

export function createRoom(
  masterId: string,
  name: string,
  description: string
): Promise<Room> {
  const sheetEnum = 1
  return apiFetch<Room>('/rooms', {
    method: 'POST',
    body: JSON.stringify({ masterId, name, description, sheetEnum }),
  })
}

export function getRoomsByUserId(): Promise<Room[]> {
  return apiFetch<Room[]>('/rooms/user', { method: 'GET' })
}
