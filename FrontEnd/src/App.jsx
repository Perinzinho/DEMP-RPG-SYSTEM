import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/loginPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App