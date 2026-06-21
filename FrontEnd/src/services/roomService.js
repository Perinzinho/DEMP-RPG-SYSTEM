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

export function createRoom(masterId, name, description) {
  const sheetEnum = 1; // Até implementar alteração de ficha entre moderno e 1920, as fichas sempre serão do tipo moderno (1)
  return apiFetch('/rooms', {
    method: 'POST',
    body: JSON.stringify({ masterId, name, description, sheetEnum }),
  });
}

export function getRoomsByUserId() {
  return apiFetch('/rooms/user', { method: 'GET' });
}