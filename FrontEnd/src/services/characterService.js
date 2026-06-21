import { apiFetch } from './api';

export function getCharactersByUserId(userId) {
  return apiFetch(`/characters/user/${userId}`, { method: 'GET' });
}

export function getCharacterById(id) {
  return apiFetch(`/characters/${id}`, { method: 'GET' });
}

export function getCharactersByRoomId(roomId) {
  return apiFetch(`/characters/room/${roomId}`, { method: 'GET' });
}

export function updateCharacter(id, dto) {
  return apiFetch(`/characters/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });
}

export function createCharacter(dto) {
  return apiFetch('/characters', {
    method: 'POST',
    body: JSON.stringify(dto),
  });
}