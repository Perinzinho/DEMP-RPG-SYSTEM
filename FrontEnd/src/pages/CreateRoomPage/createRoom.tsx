import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Dices } from 'lucide-react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { createRoom } from '../../services/roomService'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function CreateRoomPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { userId } = useAuth()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const room = await createRoom(userId as string, name, description)
      navigate(`/master/room/${room.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar mesa')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1" id="main-content">
        <div className="mx-auto box-border w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-[520px]">
            <Link
              to="/user/home"
              className="mb-8 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={14} aria-hidden="true" /> Voltar ao departamento
            </Link>
            <p className="eyebrow mb-3">
              <Dices size={14} aria-hidden="true" /> Novo arquivo de investigação
            </p>
            <h1 className="font-title text-[clamp(28px,3vw,48px)] text-foreground">
              Crie sua mesa
            </h1>
            <p className="font-title mt-2 text-[clamp(12px,0.95vw,16px)] italic text-[#6E97A4]">
              Monte um novo mistério para seus jogadores investigarem
            </p>
          </div>

          <form
            className="surface-panel mx-auto flex w-full max-w-[520px] flex-col gap-7 p-6 sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-left text-xs text-foreground">
                Nome da mesa
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Como essa história será lembrada?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
                className="h-12 rounded-lg border-border bg-background/60 px-4 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="text-left text-xs text-foreground">
                Descrição
              </Label>
              <Textarea
                id="description"
                placeholder="Apresente o cenário e o mistério que aguarda os investigadores..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={loading}
                required
                className="min-h-[160px] resize-y rounded-lg border-border bg-background/60 px-4 py-3 text-sm leading-relaxed"
              />
            </div>

            {error && (
              <p className="m-0 text-center text-sm text-destructive animate-in fade-in duration-300">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full justify-between rounded-lg px-5 text-sm"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
                  Criando...
                </span>
              ) : (
                <>
                  Criar mesa <ArrowRight size={16} aria-hidden="true" />
                </>
              )}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CreateRoomPage
