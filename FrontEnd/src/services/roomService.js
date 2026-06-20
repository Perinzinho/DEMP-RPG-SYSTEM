import { apiFetch } from './api';

export function joinRoom(roomCode) {
  return apiFetch('/rooms/join', {
    method: 'POST',
    body: JSON.stringify({ roomCode }),
  });
}

export function getAllRooms() {
  return apiFetch('/rooms', { method: 'GET' });
}

export function getRoomById(id) {
  return apiFetch(`/rooms/${id}`, { method: 'GET' });
}