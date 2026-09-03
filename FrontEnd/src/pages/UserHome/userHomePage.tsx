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
    `font-title bg-transparent border-none text-[clamp(16px,1.45vw,28px)] text-[#6E97A4] pb-1 cursor-pointer border-b-2 ${
      active ? 'border-[#1a6fb5] text-foreground' : 'border-transparent'
    }`

  const subTabClass = (active: boolean) =>
    `font-title italic rounded-md px-4 py-1 text-[clamp(11px,0.85vw,15px)] cursor-pointer border ${
      active
        ? 'border-[#1a6fb5] bg-primary/15 text-foreground'
        : 'border-[#2F5663] text-[#6E97A4]'
    }`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-[60vw] px-0 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex gap-10">
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
                className="font-title rounded-md border-[#1a6fb5] bg-transparent text-sm italic text-[#6ea8d8] hover:bg-primary/10"
                onClick={() => setShowJoinModal(true)}
              >
                Entrar em mesa
              </Button>
            )}
          </div>

          {activeTab === 'characters' && (
            <>
              {loadingCharacters ? (
                <p className="font-title mb-8 text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                  Carregando investigadores...
                </p>
              ) : characters.length === 0 ? (
                <p className="font-title mb-8 text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                  Você ainda não tem nenhum investigador.
                </p>
              ) : (
                <div className="mb-8 grid auto-rows-auto grid-flow-row gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 392px))' }}>
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
                className="font-title mx-auto block rounded-md border border-[#2F5663] bg-muted px-8 py-3 text-[clamp(13px,1vw,18px)] italic text-foreground hover:opacity-85"
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
              <div className="mb-6 flex gap-6">
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
                <p className="font-title mb-8 text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                  Carregando mesas...
                </p>
              ) : visibleRooms.length === 0 ? (
                <p className="font-title mb-8 text-center text-[clamp(13px,1vw,18px)] italic text-[#6E97A4]">
                  {roomSubTab === 'mastering'
                    ? 'Você ainda não mestra nenhuma mesa.'
                    : 'Você ainda não participa de nenhuma mesa como jogador.'}
                </p>
              ) : (
                <div className="mb-8 grid auto-rows-auto grid-flow-row gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 392px))' }}>
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
                className="font-title mx-auto block rounded-md border border-[#2F5663] bg-muted px-8 py-3 text-[clamp(13px,1vw,18px)] italic text-foreground hover:opacity-85"
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
