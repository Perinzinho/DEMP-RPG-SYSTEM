export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  USER_HOME: '/user/home',
  CREATE_ROOM: '/user/create/room',
  MASTER_ROOM: (roomId: string | number) => `/master/room/${roomId}`,
  CHARACTER_SHEET: (characterId: string | number) => `/character/${characterId}`,
  PLAYER_ROOM: (roomId: string | number) => `/room/${roomId}`,
  CREATE_CHARACTER: (roomId: string | number) => `/room/${roomId}/create-character`,
} as const
