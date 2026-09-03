import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/DempLogo.png'
import { useAuth } from '../../contexts/AuthContext'
import { FaSignOutAlt } from 'react-icons/fa'

function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const userName = user?.username ?? user?.userName ?? 'Carregando...'
  const userEmail =
    typeof user?.email === 'string' ? user.email : user?.email?.value ?? ''

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div
          className="flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3 transition-opacity duration-300 hover:opacity-80"
          onClick={() => navigate('/user/home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate('/user/home')
          }}
        >
          <img src={logo} alt="DEMP" className="h-[44px] w-[44px] shrink-0 sm:h-[60px] sm:w-[60px]" />
          <div className="hidden flex-col min-w-0 sm:flex">
            <h1 className="font-title m-0 text-[22px] leading-none text-foreground lg:text-[30px]">
              DEMP
            </h1>
            <p className="font-title m-0 mt-1 text-[10px] text-foreground lg:text-[13px]">
              Departamento de Extermínio de Manifestações paranormais
            </p>
          </div>
          <h1 className="font-title m-0 text-[20px] leading-none text-foreground sm:hidden">
            DEMP
          </h1>
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-[52px] min-w-0 items-center gap-2 rounded border border-[#063343] bg-[rgba(6,51,67,0.15)] px-2 transition-all duration-300 hover:border-[#1a6fb5] hover:shadow-[0_2px_12px_rgba(26,111,181,0.15)] sm:h-[60px] sm:gap-3 sm:px-4">
            <div className="font-title flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded border border-[#063343] bg-[rgba(6,51,67,0.3)] text-[18px] text-[#063343] sm:h-[44px] sm:w-[44px] sm:text-[22px]">
              ?
            </div>
            <div className="hidden min-w-0 flex-col sm:flex">
              <p className="font-title m-0 max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap text-[16px] text-foreground">
                {userName}
              </p>
              <p className="font-title m-0 max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-foreground italic">
                {userEmail}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            title="Sair da conta"
            className="flex h-[44px] w-[44px] shrink-0 cursor-pointer items-center justify-center rounded border border-[#063343] bg-transparent text-[#6E97A4] transition-all duration-300 hover:border-[#a35a5a] hover:bg-[rgba(163,90,90,0.1)] hover:text-[#e57373] sm:h-[48px] sm:w-[48px]"
          >
            <FaSignOutAlt className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
      <div className="h-[2px] w-full bg-secondary" />
    </header>
  )
}

export default Header
