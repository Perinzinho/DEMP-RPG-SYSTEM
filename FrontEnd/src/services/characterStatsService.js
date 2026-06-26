import { apiFetch } from './api';

export function getCharacterStatsByCharacterId(characterId) {
  return apiFetch(`/CharacterStats/character/${characterId}`, { method: 'GET' });
}

export function updateCharacterStats(id, dto) {
  return apiFetch(`/CharacterStats/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });
}

export function createCharacterStats(characterId, dto) {
  console.log("characterId para stats:", characterId);
  console.log("character completo:", dto);
  return apiFetch(`/CharacterStats/${characterId}`, {
    method: 'POST',
    body: JSON.stringify(dto),
  });
}