export interface User {
  id: string
  username?: string
  userName?: string
  email?: string | { value?: string }
  role?: number | string
}

export interface Character {
  id: string
  userId: string
  roomId?: string
  roomName?: string
  playerName?: string
  name: string
  gender?: string
  occupation: number | string
  residence?: string
  age: number
  annotations?: string
}

export interface CharacterStats {
  id: string
  characterId?: string
  strength: number
  constitution: number
  size: number
  dexterity: number
  appearance: number
  intelligence: number
  power: number
  education: number
  hitPoints: number
  currentHp: number
  sanity: number
  currentSanity: number
  luck: number
  move: number
  build: number
  magicPoints?: number
  condition: number
  maxAttributes?: number
  damageBonus?: number
  skills?: Record<string, number>
}

export interface CharacterSkills {
  id: string
  characterStatsId?: string
  skills: Record<string, number>
}

export interface CreateCharacterStatsDto {
  maxAttributes: number
  strength: number
  constitution: number
  size: number
  dexterity: number
  appearance: number
  intelligence: number
  power: number
  education: number
  hitPoints: number
  currentHp: number
  luck: number
  sanity: number
  currentSanity: number
  move: number
  build: number
  damageBonus?: number
  skills?: Record<string, number>
}

export interface Room {
  id: string
  roomCode?: string
  name: string
  description?: string
  masterId: string
  userIds?: string[]
  masterName?: string
  playerCount?: number
  sheetEnum?: string
}

export interface CreateRoomDto {
  masterId: string
  name: string
  description: string
  sheetEnum: number
}

export interface AuthData {
  token: string
  userId: string
  role: string
}
