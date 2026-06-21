import { apiFetch } from './api';

export function getCharacterSkillsByCharacterId(characterId) {
  return apiFetch(`/characterSkillsModern/character/${characterId}`, { method: 'GET' });
}

export function updateCharacterSkills(id, dto) {
  return apiFetch(`/characterSkillsModern/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });
}