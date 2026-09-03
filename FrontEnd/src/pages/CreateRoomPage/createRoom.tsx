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
    } catch {
      setError('Erro ao criar mesa')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-[60vw] px-0 py-12">
          <h1 className="font-title my-12 text-center text-[clamp(28px,3vw,48px)] text-foreground">
            Crie sua mesa
          </h1>

          <form className="mx-auto flex w-full max-w-[480px] flex-col gap-8" onSubmit={handleSubmit}>
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
                className="h-[clamp(42px,5.5vh,60px)] rounded-lg border-none bg-muted px-4 font-title italic text-[clamp(14px,1.1vw,18px)] text-foreground"
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
                className="h-[clamp(140px,18vh,220px)] resize-y rounded-lg border-none bg-muted px-4 py-3 font-title italic leading-relaxed text-[clamp(14px,1.1vw,18px)] text-foreground"
              />
            </div>

            {error && <p className="m-0 text-center text-sm text-destructive">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="font-title mx-auto mt-4 rounded-md border border-[#2F5663] bg-muted px-10 py-3 text-[clamp(14px,1.1vw,20px)] italic text-foreground hover:opacity-85"
            >
              {loading ? 'Criando...' : 'Criar mesa'}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CreateRoomPage
