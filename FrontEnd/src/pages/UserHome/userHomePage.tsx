import { useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import CharacterCard from '../../components/CharacterCard/characterCard'
import RoomCard from '../../components/RoomCard/roomCard'
import JoinRoomModal from '../../components/JoinRoomModal/joinRoomModal'
import { joinRoom, getRoomsByUserId } from '../../services/roomService'
import { getCharactersByUserId } from '../../services/characterService'
import { useAuth } from '../../contexts/AuthContext'
import type { Character, Room } from '../../types'
import { Button } from '@/components/ui/button'

function UserHomePage() {
  const [activeTab, setActiveTab] = useReducer((_: string, value: string) => value, 'characters')
  const [roomSubTab, setRoomSubTab] = useReducer((_: string, value: string) => value, 'mastering')
  const [showJoinModal, setShowJoinModal] = useReducer((_: boolean, value: boolean) => value, false)
  const [characters, setCharacters] = useReducer((_: Character[], next: Character[]) => next, [])
  const [loadingCharacters, setLoadingCharacters] = useReducer((_: boolean, next: boolean) => next, true)
  const [rooms, setRooms] = useReducer((_: Room[], next: Room[]) => next, [])
  const [loadingRooms, setLoadingRooms] = useReducer((_: boolean, next: boolean) => next, true)
  const navigate = useNavigate()
  const { userId } = useAuth()

  useEffect(() => {
    if (!userId) return

    getCharactersByUserId(userId)
      .then(setCharacters)
      .catch(() => setCharacters([]))
      .finally(() => setLoadingCharacters(false))

    getRoomsByUserId()
      .then(setRooms)
      .catch(() => setRooms([]))
      .finally(() => setLoadingRooms(false))
  }, [userId])

  async function handleJoinRoom(roomCode: string) {
    const room = await joinRoom(roomCode)
    setShowJoinModal(false)
    navigate(`/room/${room.id}`)
  }

  const masteringRooms = rooms.filter((room) => room.masterId === userId)
  const playingRooms = rooms.filter((room) => room.masterId !== userId)
  const visibleRooms = roomSubTab === 'mastering' ? masteringRooms : playingRooms

  const tabClass = (active: boolean) =>
    `font-title whitespace-nowrap bg-transparent border-none text-[clamp(16px,1.45vw,28px)] pb-1 cursor-pointer border-b-2 transition-all duration-300 ${
      active
        ? 'border-[#1a6fb5] text-foreground'
        : 'border-transparent text-[#6E97A4] hover:text-[#9dc4d1]'
    }`

  const subTabClass = (active: boolean) =>
    `font-title italic whitespace-nowrap rounded-md px-4 py-1 text-[clamp(11px,0.85vw,15px)] cursor-pointer border transition-all duration-300 ${
      active
        ? 'border-[#1a6fb5] bg-primary/15 text-foreground'
        : 'border-[#2F5663] text-[#6E97A4] hover:border-[#1a6fb5] hover:text-[#9dc4d1]'
    }`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-6 sm:gap-10">
              <button
                className={tabClass(activeTab === 'characters')}
                onClick={() => setActiveTab('characters')}
                type="button"
              >
                Investigadores
              </button>
              <button
                className={tabClass(activeTab === 'rooms')}
                onClick={() => setActiveTab('rooms')}
                type="button"
              >
                Mesas
              </button>
            </div>

            {activeTab === 'rooms' && (
              <Button
                variant="outline"
                className="font-title rounded-md border-[#1a6fb5] bg-transparent text-sm italic text-[#6ea8d8] transition-all duration-300 hover:bg-primary/10 hover:text-[#9dc4d1]"
                onClick={() => setShowJoinModal(true)}
              >
                Entrar em mesa
              </Button>
            )}
          </div>

          {activeTab === 'characters' && (
            <>
              {loadingCharacters ? (
                <div className="mb-8 flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1a6fb5] border-t-transparent" />
                  <p className="font-title text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                    Carregando investigadores...
                  </p>
                </div>
              ) : characters.length === 0 ? (
                <div className="mb-8 flex flex-col items-center gap-3 rounded-lg border border-dashed border-[#2F5663] px-4 py-16">
                  <p className="font-title m-0 text-[clamp(32px,3vw,48px)] text-[#2F5663]">?</p>
                  <p className="font-title text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                    Você ainda não tem nenhum investigador.
                  </p>
                  <p className="max-w-[420px] text-center text-[12px] italic text-[#6E97A4]">
                    Crie um investigador a partir de uma mesa que você participa.
                  </p>
                </div>
              ) : (
                <div className="mb-8 grid auto-rows-auto grid-flow-row gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,280px), 392px))' }}>
                  {characters.map((character) => (
                    <CharacterCard
                      key={character.id}
                      name={character.name}
                      age={character.age}
                      occupation={character.occupation}
                      roomName={character.roomName}
                      onClick={() => navigate(`/character/${character.id}`)}
                    />
                  ))}
                </div>
              )}

              <Button
                className="font-title mx-auto block rounded-md border border-[#2F5663] bg-muted px-8 py-3 text-[clamp(13px,1vw,18px)] italic text-foreground transition-all duration-300 hover:opacity-85 hover:shadow-[0_4px_12px_rgba(26,111,181,0.15)]"
                onClick={() => console.log('Criar investigador')}
              >
                Criar investigador
              </Button>
              <p className="font-title mt-2 text-center text-[clamp(10px,0.75vw,13px)] italic text-[#6E97A4]">
                Disponível em breve — entre em uma mesa primeiro
              </p>
            </>
          )}

          {activeTab === 'rooms' && (
            <>
              <div className="mb-6 flex gap-3 overflow-x-auto sm:gap-6">
                <button
                  className={subTabClass(roomSubTab === 'mastering')}
                  onClick={() => setRoomSubTab('mastering')}
                  type="button"
                >
                  Mestrando
                </button>
                <button
                  className={subTabClass(roomSubTab === 'playing')}
                  onClick={() => setRoomSubTab('playing')}
                  type="button"
                >
                  Participando
                </button>
              </div>

              {loadingRooms ? (
                <div className="mb-8 flex flex-col items-center gap-3">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1a6fb5] border-t-transparent" />
                  <p className="font-title text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                    Carregando mesas...
                  </p>
                </div>
              ) : visibleRooms.length === 0 ? (
                <div className="mb-8 flex flex-col items-center gap-3 rounded-lg border border-dashed border-[#2F5663] px-4 py-16">
                  <p className="font-title m-0 text-[clamp(32px,3vw,48px)] text-[#2F5663]">?</p>
                  <p className="font-title text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                    {roomSubTab === 'mastering'
                      ? 'Você ainda não mestra nenhuma mesa.'
                      : 'Você ainda não participa de nenhuma mesa como jogador.'}
                  </p>
                </div>
              ) : (
                <div className="mb-8 grid auto-rows-auto grid-flow-row gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,280px), 392px))' }}>
                  {visibleRooms.map((room) => (
                    <RoomCard
                      key={room.id}
                      name={room.name}
                      masterName={room.masterName}
                      playerCount={room.userIds?.length ?? room.playerCount ?? 0}
                      onClick={() => {
                        const isMaster = room.masterId === userId
                        navigate(isMaster ? `/master/room/${room.id}` : `/room/${room.id}`)
                      }}
                    />
                  ))}
                </div>
              )}

              <Button
                className="font-title mx-auto block rounded-md border border-[#2F5663] bg-muted px-8 py-3 text-[clamp(13px,1vw,18px)] italic text-foreground transition-all duration-300 hover:opacity-85 hover:shadow-[0_4px_12px_rgba(26,111,181,0.15)]"
                onClick={() => navigate('/user/create/room')}
              >
                Criar mesa
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />

      {showJoinModal && (
        <JoinRoomModal onClose={() => setShowJoinModal(false)} onJoin={handleJoinRoom} />
      )}
    </div>
  )
}

export default UserHomePage
