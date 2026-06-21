import {apiFetch} from './api';

export function getCharacterStatsByCharacterId(characterId) {
  return apiFetch(`/characterStats/character/${characterId}`, { method: 'GET' });
}