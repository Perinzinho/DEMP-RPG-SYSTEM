import { useReducer, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { getCharactersByRoomId } from '../../services/characterService'
import { useAuth } from '../../contexts/AuthContext'
import type { Character } from '../../types'
import { Button } from '@/components/ui/button'
import { UserRoundPlus } from 'lucide-react'

function PlayerRoomPage() {
  const { roomId } = useParams()
  const { userId } = useAuth()
  const navigate = useNavigate()

  const [character, setCharacter] = useReducer(
    (_: Character | null, next: Character | null) => next,
    null
  )
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
    <div className="app-shell flex min-h-screen flex-col">
      <Header />
      <main className="flex-1" id="main-content">
        <div className="mx-auto box-border flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          {loading || character ? (
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1a6fb5] border-t-transparent" />
              <p className="font-title text-center italic text-[#6E97A4]">Carregando...</p>
            </div>
          ) : (
            <div className="surface-panel archive-panel flex w-full max-w-[520px] flex-col items-center gap-6 px-6 py-14 text-center sm:px-12">
              <div className="empty-icon">
                <UserRoundPlus size={27} aria-hidden="true" />
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
                className="h-11 rounded-lg px-6 text-sm"
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
