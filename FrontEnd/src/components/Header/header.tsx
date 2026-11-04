import { Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import logo from '../../assets/images/DempLogo.png'
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const userName = user?.username ?? user?.userName ?? 'Investigador'
  const userEmail = typeof user?.email === 'string' ? user.email : (user?.email?.value ?? '')

  return (
    <header className="app-header">
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>
      <div className="header-inner">
        <div className="header-brand">
          <Link to="/user/home" className="brand" aria-label="DEMP — painel inicial">
            <img src={logo} alt="" className="brand-symbol" />
            <span>
              <strong>DEMP</strong>
              <small>RPG SYSTEM</small>
            </span>
          </Link>
          <p className="header-description">
            Departamento de Extermínio de
            <br />
            Manifestações Paranormais
          </p>
        </div>
        <div className="header-account">
          <span className="user-avatar" aria-hidden="true">
            {userName.charAt(0).toLocaleUpperCase('pt-BR')}
          </span>
          <div className="user-details">
            <p>{userName}</p>
            <small>{userEmail || 'Portal do investigador'}</small>
          </div>
          <button
            type="button"
            className="logout-button"
            title="Sair da conta"
            aria-label="Sair da conta"
            onClick={() => {
              logout()
              navigate('/login')
            }}
          >
            <LogOut size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
