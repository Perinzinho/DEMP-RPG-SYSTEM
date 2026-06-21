import { apiFetch } from './api';

export function getCharacterStatsByCharacterId(characterId) {
  return apiFetch(`/character-stats/character/${characterId}`, { method: 'GET' });
}

export function updateCharacterStats(id, dto) {
  return apiFetch(`/character-stats/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });
}