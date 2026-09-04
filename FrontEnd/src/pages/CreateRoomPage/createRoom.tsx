import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
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
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-[520px] text-center">
            <h1 className="font-title text-[clamp(28px,3vw,48px)] text-foreground">
              Crie sua mesa
            </h1>
            <p className="font-title mt-2 text-[clamp(12px,0.95vw,16px)] italic text-[#6E97A4]">
              Monte um novo mistério para seus jogadores investigarem
            </p>
          </div>

          <form className="mx-auto flex w-full max-w-[520px] flex-col gap-8 rounded-2xl border border-[#2F5663]/60 bg-[rgba(6,51,67,0.15)] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] sm:p-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="font-title text-left text-[clamp(14px,1.2vw,22px)] text-foreground">
                Nome da mesa
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
                className="h-[clamp(42px,5.5vh,60px)] w-full rounded-lg border border-[#2F5663]/60 bg-muted px-4 font-title italic text-[clamp(14px,1.1vw,18px)] text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:bg-[rgba(8,66,81,0.8)] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.3)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="font-title text-left text-[clamp(14px,1.2vw,22px)] text-foreground">
                Descrição
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={loading}
                required
                className="min-h-[140px] w-full resize-y rounded-lg border border-[#2F5663]/60 bg-muted px-4 py-3 font-title italic leading-relaxed text-[clamp(14px,1.1vw,18px)] text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:bg-[rgba(8,66,81,0.8)] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.3)]"
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
              className="font-title mx-auto mt-4 w-full max-w-[260px] rounded-md border border-[#1a6fb5] bg-primary/10 px-10 py-3 text-[clamp(14px,1.1vw,20px)] italic text-foreground transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_4px_16px_rgba(26,111,181,0.25)]"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
                  Criando...
                </span>
              ) : (
                'Criar mesa'
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
