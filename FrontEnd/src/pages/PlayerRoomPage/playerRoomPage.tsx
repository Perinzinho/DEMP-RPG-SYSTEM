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
        <div
          className="mx-auto flex min-h-[50vh] w-full max-w-[90vw] box-border items-center justify-center py-8"
        >
          {loading || character ? (
            <p className="font-title text-center italic text-[#6E97A4]">Carregando...</p>
          ) : (
            <div className="flex flex-col items-center gap-5 text-center">
              <p className="font-title m-0 text-[clamp(15px,1.3vw,20px)] italic text-[#6E97A4]">
                Parece que você ainda não tem nenhum investigador nessa mesa...
              </p>
              <Button
                className="font-title rounded-md border border-[#2F5663] bg-secondary px-8 py-3 text-[clamp(14px,1.1vw,18px)] italic text-foreground hover:opacity-85"
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
