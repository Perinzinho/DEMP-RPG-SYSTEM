import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/user/home')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Email ou senha inválidos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="auth-form" aria-labelledby="login-title">
      <div className="auth-form-icon">
        <LockKeyhole size={22} aria-hidden="true" />
      </div>
      <p className="eyebrow">Acesse o departamento</p>
      <h2 id="login-title">Bem-vindo de volta.</h2>
      <p className="auth-description">Seus mistérios ainda têm muito a revelar.</p>
      <form onSubmit={handleSubmit} className="auth-fields" aria-busy={loading}>
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
              autoComplete="current-password"
              placeholder="Sua senha"
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
              <span className="loading-spinner" /> Entrando...
            </>
          ) : (
            <>
              Entrar no departamento <ArrowRight size={17} aria-hidden="true" />
            </>
          )}
        </Button>
      </form>
      <div className="auth-divider">
        <span>Novo por aqui?</span>
      </div>
      <p className="auth-switch">
        Sua primeira investigação começa aqui.{' '}
        <Link to="/register">
          Criar uma conta <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </p>
    </section>
  )
}
