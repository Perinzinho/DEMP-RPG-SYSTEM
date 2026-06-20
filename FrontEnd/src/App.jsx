import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/loginPage.jsx'
import RegisterPage from './pages/Register/RegisterPage.jsx'
import UserHomePage from './pages/UserHome/userHomePage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user/home" element={<UserHomePage />} />
    </Routes>
  )
}

export default App