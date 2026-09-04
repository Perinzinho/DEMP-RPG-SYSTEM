import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <Card className="mx-auto w-full max-w-[440px] items-center rounded-3xl border border-[#2F5663]/60 bg-secondary/95 px-5 py-8 shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 sm:px-8 sm:py-10">
      <CardContent className="flex w-full flex-col items-center gap-6 px-0">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-title text-3xl text-foreground sm:text-4xl">
            Entrar na conta
          </h1>
          <p className="font-title text-sm italic text-[#94b8c6]">
            Bem-vindo de volta, investigador
          </p>
        </div>

        <form className="flex w-full flex-col items-center gap-5" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="email" className="font-title text-lg text-foreground sm:text-xl">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="h-12 w-full rounded-lg border border-[#2F5663]/60 bg-muted px-4 text-base text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:bg-[rgba(8,66,81,0.8)] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.3)]"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="password" className="font-title text-lg text-foreground sm:text-xl">
              Senha
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="h-12 w-full rounded-lg border border-[#2F5663]/60 bg-muted px-4 text-base text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:bg-[rgba(8,66,81,0.8)] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.3)]"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive animate-in fade-in duration-300">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full max-w-full rounded-lg bg-primary font-title text-lg text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_4px_16px_rgba(26,111,181,0.35)]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                Entrando...
              </span>
            ) : (
              'Entrar'
            )}
          </Button>

          <div className="mt-2 text-center">
            <p className="text-sm text-foreground">
              Não tem uma conta?{' '}
              <Link
                to="/register"
                className="font-medium text-[#6ea8d8] underline transition-colors duration-300 hover:text-[#9dc4d1]"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
