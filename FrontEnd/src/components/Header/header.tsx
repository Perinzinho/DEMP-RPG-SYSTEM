import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/DempLogo.png'
import { useAuth } from '../../contexts/AuthContext'

function Header() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const userName = user?.username ?? user?.userName ?? 'Carregando...'
  const userEmail =
    typeof user?.email === 'string' ? user.email : user?.email?.value ?? ''

  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-[60vw] items-center justify-between px-0 py-3">
        <div
          className="flex cursor-pointer items-center gap-3"
          onClick={() => navigate('/user/home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate('/user/home')
          }}
        >
          <img src={logo} alt="DEMP" className="h-[clamp(42px,4.6vw,84px)] w-[clamp(42px,4.6vw,84px)]" />
          <div className="flex flex-col">
            <h1 className="font-title m-0 text-[clamp(19px,2.3vw,38px)] leading-none text-foreground">
              DEMP
            </h1>
            <p className="font-title mt-1 text-[clamp(9px,0.75vw,14px)] text-foreground">
              Departamento de Extermínio de Manifestações paranormais
            </p>
          </div>
        </div>

        <div className="flex h-[clamp(48px,7vh,78px)] w-[clamp(190px,15.5vw,275px)] items-center gap-3 rounded border border-[#063343] px-4">
          <div className="font-title flex h-[clamp(34px,3.3vw,60px)] w-[clamp(34px,3.3vw,60px)] shrink-0 items-center justify-center rounded border border-[#063343] text-[clamp(16px,1.6vw,28px)] text-[#063343]">
            ?
          </div>
          <div className="flex min-w-0 flex-col">
            <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap px-2 text-[clamp(13px,1.3vw,22px)] text-foreground">
              {userName}
            </p>
            <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap px-2 text-[clamp(9px,0.85vw,14px)] text-foreground italic">
              {userEmail}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full min-h-[2px] bg-secondary" />
    </header>
  )
}

export default Header
