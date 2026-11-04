import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound, UserRoundPlus } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RegisterForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await register(username, email, password)
      navigate('/login')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao registrar usuário')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="auth-form" aria-labelledby="register-title">
      <div className="auth-form-icon">
        <UserRoundPlus size={22} aria-hidden="true" />
      </div>
      <p className="eyebrow">Novos arquivos. Novas histórias.</p>
      <h2 id="register-title">Junte-se ao DEMP.</h2>
      <p className="auth-description">O próximo capítulo começa com você.</p>
      <form onSubmit={handleSubmit} className="auth-fields" aria-busy={loading}>
        <div className="form-field">
          <Label htmlFor="username">Nome de usuário</Label>
          <div className="input-with-icon">
            <UserRound size={17} aria-hidden="true" />
            <Input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Como devemos chamar você?"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
              className="auth-input h-[49px] rounded-[7px] bg-card pl-[43px] pr-4 text-[13px]"
            />
          </div>
        </div>
        <div className="form-field">
          <Label htmlFor="email">Email</Label>
          <div className="input-with-icon">
            <Mail size={17} aria-hidden="true" />
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              className="auth-input h-[49px] rounded-[7px] bg-card pl-[43px] pr-4 text-[13px]"
            />
          </div>
        </div>
        <div className="form-field">
          <Label htmlFor="password">Senha</Label>
          <div className="input-with-icon">
            <LockKeyhole size={17} aria-hidden="true" />
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              autoComplete="new-password"
              placeholder="Crie sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              className="auth-input h-[49px] rounded-[7px] bg-card pl-[43px] pr-[45px] text-[13px]"
            />
            <button
              className="password-toggle"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              aria-pressed={showPassword}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <Button
          type="submit"
          disabled={loading}
          className="auth-submit h-[49px] justify-between rounded-[7px] px-[18px] text-[13px] has-[>svg]:px-[18px]"
        >
          {loading ? (
            <>
              <span className="loading-spinner" /> Criando conta...
            </>
          ) : (
            <>
              Criar minha conta <ArrowRight size={17} aria-hidden="true" />
            </>
          )}
        </Button>
      </form>
      <div className="auth-divider">
        <span>Já faz parte do departamento?</span>
      </div>
      <p className="auth-switch">
        <Link to="/login">
          Entrar na minha conta <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </p>
    </section>
  )
}
