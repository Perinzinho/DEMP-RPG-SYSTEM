import { useCallback, useReducer, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import MasterCharacterCard from '../../components/MasterCharacterCard/masterCharacterCard'
import { getCharactersByRoomId } from '../../services/characterService'
import { getCharacterStatsByCharacterId } from '../../services/characterStatsService'
import { getRoomById } from '../../services/roomService'
import type { Character, Room } from '../../types'

interface CharacterWithDerived extends Character {
  currentHp: number
  maxHp: number
  currentSanity: number
  maxSanity: number
}

// ---------------------------------------------------------------------------
// Seções do painel do mestre.
//
// PARA ADICIONAR UMA NOVA SEÇÃO NO FUTURO:
//   1. Adicione um novo item em MASTER_SECTIONS (id único + rótulo exibido).
//   2. Adicione o caso correspondente ('novoId' => ...) no bloco de
//      renderização das seções (após o caso 'infos').
//   3. Se a seção depender de dados novos, carregue-os no useEffect abaixo.
// ---------------------------------------------------------------------------
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
    `font-title bg-transparent border-none text-[clamp(16px,1.45vw,28px)] text-[#6E97A4] pb-1 cursor-pointer border-b-2 ${
      active ? 'border-[#1a6fb5] text-foreground' : 'border-transparent'
    }`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-[70vw] px-0 py-8">
          {/* Navegação entre seções do painel */}
          <div className="mb-8 flex items-end justify-between">
            <div className="flex gap-10">
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

          {/* Renderização das seções */}
          {activeTab === 'infos' && (
            <section>
              {/* Cabeçalho da mesa */}
              <div className="mb-8 border-b border-[#1a6fb5] pb-6">
                <h1 className="font-title m-0 text-[clamp(24px,2.4vw,36px)] text-foreground">
                  {loadingRoom ? 'Carregando mesa...' : room?.name || 'Mesa'}
                </h1>
                <p className="font-title m-0 mt-2 text-[clamp(12px,0.9vw,15px)] italic text-[#6E97A4]">
                  Dados da sessão
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                {/* Jogadores */}
                <div className="rounded-lg border border-[#2F5663] p-6 md:p-8">
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
                    <p className="font-title py-8 text-center text-sm italic text-[#6E97A4]">
                      Carregando personagens...
                    </p>
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

                {/* Código da sala (somente na aba Infos) */}
                <div className="h-fit rounded-lg border border-[#1a6fb5] p-6">
                  <h2 className="font-title m-0 mb-4 text-[clamp(18px,1.4vw,24px)] text-foreground">
                    Código da sala
                  </h2>

                  {loadingRoom ? (
                    <p className="font-title text-sm italic text-[#6E97A4]">Carregando...</p>
                  ) : room?.roomCode ? (
                    <div className="flex flex-col">
                      <button
                        type="button"
                        onClick={handleCopyRoomCode}
                        className="flex cursor-pointer flex-col items-center rounded-lg border border-[#1a6fb5] bg-primary/10 px-6 py-6 transition-colors hover:bg-primary/20"
                        title="Clique para copiar o código"
                      >
                        <span className="font-title tracking-[0.35em] text-[clamp(24px,2.2vw,34px)] text-foreground">
                          {room.roomCode}
                        </span>
                        <span className="mt-3 text-[clamp(10px,0.7vw,12px)] text-[#6ea8d8] italic">
                          {copied ? 'Código copiado!' : 'Clique para copiar'}
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
            <section>
              <p className="font-title py-24 text-center text-[clamp(16px,1.3vw,24px)] italic text-[#6E97A4]">
                Em desenvolvimento
              </p>
            </section>
          )}

          {activeTab === 'initiative' && (
            <section>
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
