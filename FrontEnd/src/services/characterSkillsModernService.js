import { apiFetch } from './api';

export function getCharacterSkillsByCharacterId(characterId) {
  return apiFetch(`/character-skills-modern/character/${characterId}`, { method: 'GET' });
}

export function updateCharacterSkills(id, dto) {
  return apiFetch(`/character-skills-modern/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  });
}