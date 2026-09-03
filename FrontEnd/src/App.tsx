import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/login/loginPage'
import RegisterPage from './pages/Register/RegisterPage'
import UserHomePage from './pages/UserHome/userHomePage'
import CreateRoomPage from './pages/CreateRoomPage/createRoom'
import MasterRoomPage from './pages/MasterRoomPage/masterRoomPage'
import CharacterSheetPage from './pages/CharacterSheetPage/characterSheetPage'
import PlayerRoomPage from './pages/PlayerRoomPage/playerRoomPage'
import CreateCharacterPage from './pages/CreateCharacterPage/createCharacterPage'

function App() {
  return (
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
  )
}

export default App
