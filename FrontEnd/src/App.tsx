import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/login/loginPage'
import RegisterPage from './pages/Register/RegisterPage'
const UserHomePage = lazy(() => import('./pages/UserHome/userHomePage'))
const CreateRoomPage = lazy(() => import('./pages/CreateRoomPage/createRoom'))
const MasterRoomPage = lazy(() => import('./pages/MasterRoomPage/masterRoomPage'))
const CharacterSheetPage = lazy(() => import('./pages/CharacterSheetPage/characterSheetPage'))
const PlayerRoomPage = lazy(() => import('./pages/PlayerRoomPage/playerRoomPage'))
const CreateCharacterPage = lazy(() => import('./pages/CreateCharacterPage/createCharacterPage'))

function App() {
  return (
    <Suspense
      fallback={
        <div
          className="flex min-h-dvh items-center justify-center gap-3 text-sm text-muted-foreground"
          role="status"
        >
          <span className="loading-spinner" /> Carregando departamento...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/home" element={<UserHomePage />} />
        <Route path="/user/create/room" element={<CreateRoomPage />} />
        <Route path="/master/room/:roomId" element={<MasterRoomPage />} />
        <Route path="/character/:characterId" element={<CharacterSheetPage />} />
        <Route path="/room/:roomId" element={<PlayerRoomPage />} />
        <Route path="/room/:roomId/create-character" element={<CreateCharacterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
