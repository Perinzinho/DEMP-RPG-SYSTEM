import { useCallback, useReducer, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import MasterCharacterCard from '../../components/MasterCharacterCard/masterCharacterCard'
import { getCharactersByRoomId } from '../../services/characterService'
import { getCharacterStatsByCharacterId } from '../../services/characterStatsService'
import { getRoomById } from '../../services/roomService'
import type { Character, Room } from '../../types'
import { FaCheck } from 'react-icons/fa'

interface CharacterWithDerived extends Character {
  currentHp: number
  maxHp: number
  currentSanity: number
  maxSanity: number
}

const MASTER_SECTIONS = [
  { id: 'infos', label: 'Infos' },
  { id: 'mapa', label: 'Mapa' },
  { id: 'initiative', label: 'Iniciativa' },
] as const

function MasterRoomPage() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useReducer((_: string, value: string) => value, 'infos')
  const [room, setRoom] = useState<Room | null>(null)
  const [characters, setCharacters] = useState<CharacterWithDerived[]>([])
  const [loadingRoom, setLoadingRoom] = useState(true)
  const [loadingCharacters, setLoadingCharacters] = useState(true)
  const [copied, setCopied] = useState(false)

  const loadCharactersWithStats = useCallback(async (id: string) => {
    try {
      const baseCharacters = await getCharactersByRoomId(id)

      const charactersWithStats = await Promise.all(
        baseCharacters.map(async (character) => {
          try {
            const stats = await getCharacterStatsByCharacterId(character.id)
            return {
              ...character,
              currentHp: stats.currentHp,
              maxHp: stats.hitPoints,
              currentSanity: stats.currentSanity,
              maxSanity: stats.sanity,
            }
          } catch {
            return { ...character, currentHp: 0, maxHp: 0, currentSanity: 0, maxSanity: 0 }
          }
        })
      )

      setCharacters(charactersWithStats)
    } catch {
      setCharacters([])
    } finally {
      setLoadingCharacters(false)
    }
  }, [])

  useEffect(() => {
    if (!roomId) return
    const id = roomId

    getRoomById(id)
      .then(setRoom)
      .catch(() => setRoom(null))
      .finally(() => setLoadingRoom(false))

    loadCharactersWithStats(id)
  }, [roomId, loadCharactersWithStats])

  async function handleCopyRoomCode() {
    if (!room?.roomCode) return
    try {
      await navigator.clipboard.writeText(room.roomCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const tabClass = (active: boolean) =>
    `font-title bg-transparent border-none text-[clamp(16px,1.45vw,28px)] pb-1 cursor-pointer border-b-2 transition-all duration-300 ${
      active
        ? 'border-[#1a6fb5] text-foreground'
        : 'border-transparent text-[#6E97A4] hover:text-[#9dc4d1]'
    }`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div className="flex gap-6 overflow-x-auto sm:gap-10">
              {MASTER_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  className={tabClass(activeTab === section.id)}
                  onClick={() => setActiveTab(section.id)}
                  type="button"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'infos' && (
            <section className="animate-in fade-in duration-300">
              <div className="mb-8 border-b border-[#1a6fb5] pb-6">
                <h1 className="font-title m-0 text-[clamp(24px,2.4vw,36px)] text-foreground">
                  {loadingRoom ? 'Carregando mesa...' : room?.name || 'Mesa'}
                </h1>
                <p className="font-title m-0 mt-2 text-[clamp(12px,0.9vw,15px)] italic text-[#6E97A4]">
                  Dados da sessão
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="rounded-lg border border-[#2F5663] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)] md:p-8">
                  <div className="mb-6 flex items-center justify-between border-b border-[rgba(47,86,99,0.3)] pb-4">
                    <h2 className="font-title m-0 text-[clamp(20px,1.8vw,28px)] text-foreground">
                      Jogadores
                    </h2>
                    {!loadingCharacters && (
                      <span className="font-title text-sm italic text-[#6E97A4]">
                        {characters.length}{' '}
                        {characters.length === 1 ? 'personagem' : 'personagens'}
                      </span>
                    )}
                  </div>

                  {loadingCharacters ? (
                    <div className="flex flex-col items-center gap-2 py-8">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#1a6fb5] border-t-transparent" />
                      <p className="font-title text-center text-sm italic text-[#6E97A4]">
                        Carregando personagens...
                      </p>
                    </div>
                  ) : characters.length === 0 ? (
                    <p className="font-title py-8 text-center text-sm italic text-[#6E97A4]">
                      Nenhum personagem nesta mesa ainda.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                      {characters.map((character) => (
                        <MasterCharacterCard
                          key={character.id}
                          characterName={character.name}
                          playerName={character.playerName}
                          currentHp={character.currentHp}
                          maxHp={character.maxHp}
                          currentSanity={character.currentSanity}
                          maxSanity={character.maxSanity}
                          onClick={() => navigate(`/character/${character.id}`)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="h-fit rounded-lg border border-[#1a6fb5] p-6 shadow-[0_2px_8px_rgba(26,111,181,0.1)]">
                  <h2 className="font-title m-0 mb-4 text-[clamp(18px,1.4vw,24px)] text-foreground">
                    Código da sala
                  </h2>

                  {loadingRoom ? (
                    <div className="flex flex-col items-center gap-2 py-4">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#1a6fb5] border-t-transparent" />
                      <p className="font-title text-sm italic text-[#6E97A4]">Carregando...</p>
                    </div>
                  ) : room?.roomCode ? (
                    <div className="flex flex-col">
                      <button
                        type="button"
                        onClick={handleCopyRoomCode}
                        className={`flex cursor-pointer flex-col items-center rounded-lg border px-6 py-6 transition-all duration-300 ${
                          copied
                            ? 'border-[#6fa37a] bg-[rgba(111,163,122,0.1)]'
                            : 'border-[#1a6fb5] bg-primary/10 hover:bg-primary/20'
                        }`}
                        title="Clique para copiar o código"
                      >
                        <span className="font-title tracking-[0.35em] text-[clamp(24px,2.2vw,34px)] text-foreground">
                          {room.roomCode}
                        </span>
                        <span className="mt-3 flex items-center gap-1.5 text-[clamp(10px,0.7vw,12px)] italic text-[#6ea8d8]">
                          {copied ? (
                            <>
                              <FaCheck className="text-[#6fa37a]" />
                              Código copiado!
                            </>
                          ) : (
                            'Clique para copiar'
                          )}
                        </span>
                      </button>
                      <p className="font-title mt-4 text-center text-[clamp(11px,0.8vw,14px)] italic text-[#6E97A4]">
                        Compartilhe com seus jogadores para que eles entrem na mesa.
                      </p>
                    </div>
                  ) : (
                    <p className="font-title text-sm italic text-[#6E97A4]">
                      Código indisponível.
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          {activeTab === 'mapa' && (
            <section className="animate-in fade-in duration-300">
              <p className="font-title py-24 text-center text-[clamp(16px,1.3vw,24px)] italic text-[#6E97A4]">
                Em desenvolvimento
              </p>
            </section>
          )}

          {activeTab === 'initiative' && (
            <section className="animate-in fade-in duration-300">
              <p className="font-title py-24 text-center text-[clamp(16px,1.3vw,24px)] italic text-[#6E97A4]">
                Em desenvolvimento
              </p>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MasterRoomPage
