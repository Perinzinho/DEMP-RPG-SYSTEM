import { useReducer, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { getCharactersByRoomId } from '../../services/characterService'
import { useAuth } from '../../contexts/AuthContext'
import type { Character } from '../../types'
import { Button } from '@/components/ui/button'

function PlayerRoomPage() {
  const { roomId } = useParams()
  const { userId } = useAuth()
  const navigate = useNavigate()

  const [character, setCharacter] = useReducer((_: Character | null, next: Character | null) => next, null)
  const [loading, setLoading] = useReducer((_: boolean, next: boolean) => next, true)

  useEffect(() => {
    if (!roomId || !userId) return

    getCharactersByRoomId(roomId)
      .then((characters) => {
        const own = characters.find((c) => c.userId === userId)
        setCharacter(own ?? null)

        if (own) {
          navigate(`/character/${own.id}`, { replace: true })
        }
      })
      .catch(() => setCharacter(null))
      .finally(() => setLoading(false))
  }, [roomId, userId, navigate])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          {loading || character ? (
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1a6fb5] border-t-transparent" />
              <p className="font-title text-center italic text-[#6E97A4]">Carregando...</p>
            </div>
          ) : (
            <div className="flex w-full max-w-[520px] flex-col items-center gap-6 rounded-2xl border border-dashed border-[#2F5663] px-6 py-14 text-center sm:px-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#2F5663] bg-muted/30">
                <p className="font-title m-0 text-[clamp(32px,3vw,48px)] text-[#2F5663]">?</p>
              </div>
              <div>
                <p className="font-title m-0 text-[clamp(15px,1.3vw,20px)] italic text-foreground">
                  Parece que você ainda não tem nenhum investigador nessa mesa...
                </p>
                <p className="font-title mt-2 text-[13px] italic text-[#6E97A4]">
                  Crie seu personagem para começar a jogar
                </p>
              </div>
              <Button
                className="font-title rounded-md border border-[#2F5663] bg-secondary px-8 py-3 text-[clamp(14px,1.1vw,18px)] italic text-foreground transition-all duration-300 hover:opacity-85 hover:shadow-[0_4px_12px_rgba(26,111,181,0.15)]"
                onClick={() => navigate(`/room/${roomId}/create-character`)}
              >
                Criar Investigador
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PlayerRoomPage
