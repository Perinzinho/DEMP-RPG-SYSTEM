import { useReducer, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

function RegisterForm() {
  const [username, setUsername] = useReducer((_: string, value: string) => value, '')
  const [email, setEmail] = useReducer((_: string, value: string) => value, '')
  const [password, setPassword] = useReducer((_: string, value: string) => value, '')
  const [loading, setLoading] = useReducer((_: boolean, value: boolean) => value, false)
  const [error, setError] = useReducer((_: string, value: string) => value, '')
  const { register } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await register(username, email, password)
      navigate('/login')
    } catch {
      setError('Erro ao registrar usuário')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full min-w-[320px] max-w-[516px] items-center rounded-[30px] border-none bg-secondary/95 px-8 py-10 shadow-none">
      <CardContent className="flex w-full flex-col items-center gap-6 px-0">
        <h1 className="font-title text-center text-4xl text-foreground">
          Criar conta
        </h1>

        <form className="flex w-full flex-col items-center gap-5" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="username" className="font-title text-xl text-foreground">
              Nome de usuário
            </Label>
            <Input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              className="h-12 rounded-lg border-none bg-muted px-4 text-base text-foreground"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="email" className="font-title text-xl text-foreground">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="h-12 rounded-lg border-none bg-muted px-4 text-base text-foreground"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="password" className="font-title text-xl text-foreground">
              Senha
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="h-12 rounded-lg border-none bg-muted px-4 text-base text-foreground"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full max-w-[196px] rounded-lg bg-muted font-title text-lg text-foreground hover:opacity-85"
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </Button>

          <div className="mt-4 text-center">
            <p className="text-sm text-foreground">
              Já tem uma conta?{' '}
              <Link to="/login" className="font-medium text-[#6ea8d8] underline">
                Entrar
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default RegisterForm
