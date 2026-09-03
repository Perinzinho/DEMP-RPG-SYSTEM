import { apiFetch } from './api'
import type { CharacterStats, CreateCharacterStatsDto } from '@/types'

export function getCharacterStatsByCharacterId(
  characterId: string
): Promise<CharacterStats> {
  return apiFetch<CharacterStats>(
    `/CharacterStats/character/${characterId}`,
    { method: 'GET' }
  )
}

export function getCharacterStatsById(id: string): Promise<CharacterStats> {
  return apiFetch<CharacterStats>(`/CharacterStats/${id}`, { method: 'GET' })
}

export function updateCharacterStats(
  id: string,
  dto: Partial<CreateCharacterStatsDto> & {
    condition?: number
    skills?: Record<string, number>
  }
): Promise<null> {
  return apiFetch<null>(`/CharacterStats/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(dto),
  })
}

export function createCharacterStats(
  characterId: string,
  dto: CreateCharacterStatsDto
): Promise<CharacterStats> {
  return apiFetch<CharacterStats>(`/CharacterStats/${characterId}`, {
    method: 'POST',
    body: JSON.stringify(dto),
  })
}

export function updateCharacterStatsSkills(
  id: string,
  skills: Record<string, number>
): Promise<null> {
  return updateCharacterStats(id, { skills })
}
