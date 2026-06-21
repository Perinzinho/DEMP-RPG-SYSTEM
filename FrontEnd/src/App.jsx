import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/loginPage.jsx'
import RegisterPage from './pages/Register/RegisterPage.jsx'
import UserHomePage from './pages/UserHome/userHomePage.jsx'
import CreateRoomPage from './pages/CreateRoomPage/createRoom.jsx'
import MasterRoomPage from './pages/MasterRoomPage/masterRoomPage.jsx'
import CharacterSheetPage from './pages/CharacterSheetPage/characterSheetPage.jsx'
import PlayerRoomPage from './pages/PlayerRoomPage/playerRoomPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user/home" element={<UserHomePage />} />
      <Route path="/user/create/room" element={<CreateRoomPage />} />
      <Route path="/master/room/:roomId" element={<MasterRoomPage />} />
      <Route path="/character/:characterId" element={<CharacterSheetPage />} />
      <Route path="/room/:roomId" element={<PlayerRoomPage />} />
    </Routes>
  )
}

export default App