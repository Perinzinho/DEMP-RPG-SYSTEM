import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/Auth/loginPage'
import RegisterPage from './pages/Auth/registerPage'
import UserHomePage from './pages/User/userHomePage'
import { AuthProvider } from './contexts/userAuth'


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/home" element={<UserHomePage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
    
}

export default App
