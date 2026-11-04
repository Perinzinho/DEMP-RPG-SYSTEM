import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, Dices, FolderSearch, Info, Plus, UsersRound } from 'lucide-react'
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
import logo from '@/assets/images/DempLogo.png'

export default function UserHomePage() {
  const [activeTab, setActiveTab] = useState<'characters' | 'rooms'>('characters')
  const [roomSubTab, setRoomSubTab] = useState<'mastering' | 'playing'>('mastering')
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [characters, setCharacters] = useState<Character[]>([])
  const [rooms, setRooms] = useState<Room[]>([])
  const [loadingCharacters, setLoadingCharacters] = useState(true)
  const [loadingRooms, setLoadingRooms] = useState(true)
  const [characterError, setCharacterError] = useState('')
  const [roomError, setRoomError] = useState('')
  const navigate = useNavigate()
  const { userId, user } = useAuth()

  const loadData = useCallback(() => {
    if (!userId) return
    getCharactersByUserId(userId)
      .then(setCharacters)
      .catch(() => setCharacterError('Não foi possível carregar os investigadores.'))
      .finally(() => setLoadingCharacters(false))
    getRoomsByUserId()
      .then(setRooms)
      .catch(() => setRoomError('Não foi possível carregar as mesas.'))
      .finally(() => setLoadingRooms(false))
  }, [userId])

  useEffect(() => {
    loadData()
  }, [loadData])

  function handleRetry() {
    setLoadingCharacters(true)
    setLoadingRooms(true)
    setCharacterError('')
    setRoomError('')
    loadData()
  }

  async function handleJoinRoom(roomCode: string) {
    const room = await joinRoom(roomCode)
    setShowJoinModal(false)
    navigate(`/room/${room.id}`)
  }

  const masteringRooms = rooms.filter((room) => room.masterId === userId)
  const playingRooms = rooms.filter((room) => room.masterId !== userId)
  const visibleRooms = roomSubTab === 'mastering' ? masteringRooms : playingRooms
  const loading = activeTab === 'characters' ? loadingCharacters : loadingRooms
  const error = activeTab === 'characters' ? characterError : roomError
  const userName = user?.username ?? user?.userName

  function showPlayingRooms() {
    setActiveTab('rooms')
    setRoomSubTab('playing')
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="dashboard flex-1" id="main-content">
        <section className="dashboard-hero" aria-labelledby="dashboard-title">
          <div>
            <span className="eyebrow">
              <span className="status-dot" /> Departamento de investigações
            </span>
            <h1 id="dashboard-title">Seu próximo mistério começa aqui.</h1>
            <p>
              {userName ? `Bem-vindo, ${userName}.` : 'Bem-vindo ao departamento.'} Seus
              investigadores e suas histórias, em um só lugar.
            </p>
          </div>
          <img className="hero-emblem" src={logo} alt="" />
        </section>
        <div className="overview-grid" aria-label="Resumo dos seus arquivos">
          <div className="overview-item">
            <div className="overview-icon">
              <FolderSearch size={20} aria-hidden="true" />
            </div>
            <div>
              <strong>
                {loadingCharacters || characterError
                  ? '—'
                  : characters.length.toString().padStart(2, '0')}
              </strong>
              <span>Investigadores</span>
            </div>
          </div>
          <div className="overview-item">
            <div className="overview-icon">
              <Dices size={20} aria-hidden="true" />
            </div>
            <div>
              <strong>
                {loadingRooms || roomError ? '—' : playingRooms.length.toString().padStart(2, '0')}
              </strong>
              <span>Mesas participando</span>
            </div>
          </div>
          <div className="overview-item">
            <div className="overview-icon">
              <BookOpen size={20} aria-hidden="true" />
            </div>
            <div>
              <strong>
                {loadingRooms || roomError
                  ? '—'
                  : masteringRooms.length.toString().padStart(2, '0')}
              </strong>
              <span>Mesas mestrando</span>
            </div>
          </div>
        </div>
        <div className="dashboard-toolbar">
          <div className="dashboard-tabs" aria-label="Seus arquivos">
            <button
              className="dashboard-tab"
              type="button"
              aria-pressed={activeTab === 'characters'}
              onClick={() => setActiveTab('characters')}
            >
              <FolderSearch size={16} aria-hidden="true" /> Investigadores{' '}
              <span className="tab-count">
                {loadingCharacters || characterError ? '—' : characters.length}
              </span>
            </button>
            <button
              className="dashboard-tab"
              type="button"
              aria-pressed={activeTab === 'rooms'}
              onClick={() => setActiveTab('rooms')}
            >
              <Dices size={16} aria-hidden="true" /> Mesas{' '}
              <span className="tab-count">{loadingRooms || roomError ? '—' : rooms.length}</span>
            </button>
          </div>
          <Button variant="outline" onClick={() => setShowJoinModal(true)}>
            <Plus size={15} aria-hidden="true" /> Entrar em mesa
          </Button>
        </div>
        <section aria-label={activeTab === 'characters' ? 'Investigadores' : 'Mesas'}>
          <div className="section-toolbar">
            <p className="section-description">
              {activeTab === 'characters'
                ? 'Os rostos por trás das suas histórias.'
                : 'Toda grande história começa ao redor de uma mesa.'}
            </p>
            {activeTab === 'rooms' && (
              <div className="filter-group" aria-label="Filtrar mesas">
                <button
                  type="button"
                  className="filter-button"
                  aria-pressed={roomSubTab === 'mastering'}
                  onClick={() => setRoomSubTab('mastering')}
                >
                  Mestrando
                </button>
                <button
                  type="button"
                  className="filter-button"
                  aria-pressed={roomSubTab === 'playing'}
                  onClick={() => setRoomSubTab('playing')}
                >
                  Participando
                </button>
              </div>
            )}
          </div>
          {loading ? (
            <div className="empty-state" role="status">
              <span className="loading-spinner mb-4 text-primary" />
              <p>Carregando {activeTab === 'characters' ? 'investigadores' : 'mesas'}...</p>
            </div>
          ) : error ? (
            <div className="empty-state" role="alert">
              <p>{error}</p>
              <Button variant="outline" onClick={handleRetry}>
                Tentar novamente
              </Button>
            </div>
          ) : activeTab === 'characters' ? (
            characters.length > 0 ? (
              <div className="record-grid">
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
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <FolderSearch size={27} aria-hidden="true" />
                </div>
                <h2>Uma nova identidade espera por você.</h2>
                <p>
                  Seus investigadores aparecerão aqui. Entre em uma mesa para criar seu primeiro
                  personagem e começar a investigar.
                </p>
                <Button onClick={showPlayingRooms}>
                  Explorar minhas mesas <ArrowRight size={15} aria-hidden="true" />
                </Button>
              </div>
            )
          ) : visibleRooms.length > 0 ? (
            <div className="record-grid">
              {visibleRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  name={room.name}
                  masterName={room.masterName}
                  playerCount={room.userIds?.length ?? room.playerCount ?? 0}
                  onClick={() =>
                    navigate(
                      room.masterId === userId ? `/master/room/${room.id}` : `/room/${room.id}`
                    )
                  }
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <UsersRound size={27} aria-hidden="true" />
              </div>
              <h2>
                {roomSubTab === 'mastering'
                  ? 'O próximo mistério pode ser seu.'
                  : 'Encontre sua próxima história.'}
              </h2>
              <p>
                {roomSubTab === 'mastering'
                  ? 'Crie uma mesa, convide seus jogadores e conduza uma investigação pelo desconhecido.'
                  : 'Peça o código da mesa ao seu mestre e junte-se aos outros investigadores.'}
              </p>
              <Button
                onClick={() =>
                  roomSubTab === 'mastering'
                    ? navigate('/user/create/room')
                    : setShowJoinModal(true)
                }
              >
                <Plus size={15} aria-hidden="true" />
                {roomSubTab === 'mastering' ? 'Criar minha primeira mesa' : 'Entrar em uma mesa'}
              </Button>
            </div>
          )}
          <div className="section-toolbar mt-5">
            <p className="dashboard-note">
              <Info size={14} aria-hidden="true" />
              {activeTab === 'characters'
                ? 'Para criar um investigador, abra uma mesa em que você participa.'
                : 'Compartilhe o código da sua mesa para convidar os jogadores.'}
            </p>
            {activeTab === 'rooms' && visibleRooms.length > 0 && (
              <Button onClick={() => navigate('/user/create/room')}>
                <Plus size={15} aria-hidden="true" /> Criar mesa
              </Button>
            )}
          </div>
        </section>
      </main>
      <Footer />
      {showJoinModal && (
        <JoinRoomModal onClose={() => setShowJoinModal(false)} onJoin={handleJoinRoom} />
      )}
    </div>
  )
}
