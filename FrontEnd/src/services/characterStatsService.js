import { apiFetch } from './api';

export function getCharacterStatsByCharacterId(characterId) {
  return apiFetch(`/characterStats/character/${characterId}`, { method: 'GET' });
}

export function updateCharacterStats(id, dto) {
  return apiFetch(`/characterStats/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });
}