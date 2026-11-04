import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Fingerprint, ShieldCheck } from 'lucide-react'
import background from '@/assets/images/LoginBackground01.jpg'
import logo from '@/assets/images/DempLogo.png'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-layout">
      <aside className="auth-story" style={{ backgroundImage: `url(${background})` }}>
        <Link to="/login" className="brand auth-brand" aria-label="DEMP — início">
          <img src={logo} alt="" className="brand-symbol" />
          <span>
            <strong>DEMP</strong>
            <small>RPG SYSTEM</small>
          </span>
        </Link>
        <div className="auth-story-copy">
          <span className="eyebrow">
            <span className="status-dot" /> O desconhecido espera por você
          </span>
          <h1>
            Todo mistério
            <br /> deixa uma <em>marca.</em>
          </h1>
          <p>
            Reúna sua mesa. Dê vida ao seu investigador.
            <br className="hidden sm:block" /> Escreva o próximo capítulo do inexplicável.
          </p>
          <div className="auth-story-rule" />
          <span className="auth-caption">
            Departamento de Extermínio de
            <br />
            Manifestações Paranormais
          </span>
        </div>
        <div className="auth-story-footer">
          <Fingerprint size={18} aria-hidden="true" />
          <span>ARQUIVO RESTRITO · DEMP</span>
          <span>EST. 2026</span>
        </div>
      </aside>
      <main className="auth-main" id="main-content">
        <div className="auth-main-top">
          <span>
            <ShieldCheck size={15} aria-hidden="true" /> Portal do investigador
          </span>
          <a href="https://forms.gle/jjdWPYQYPupFcY8K6" target="_blank" rel="noopener noreferrer">
            Precisa de ajuda? <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <div className="auth-form-wrap">{children}</div>
        <p className="auth-legal">
          DEMP RPG SYSTEM <span>v2.3.0-beta · 2026</span>
        </p>
      </main>
    </div>
  )
}
