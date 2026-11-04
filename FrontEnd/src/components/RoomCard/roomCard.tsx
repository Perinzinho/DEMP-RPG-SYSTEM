import { ArrowUpRight, Dices, UsersRound } from 'lucide-react'

interface RoomCardProps {
  name: string
  masterName?: string
  playerCount: number
  onClick?: () => void
}

export default function RoomCard({ name, masterName, playerCount, onClick }: RoomCardProps) {
  return (
    <button
      type="button"
      className="record-card"
      onClick={onClick}
      aria-label={`Abrir mesa ${name}`}
    >
      <div className="record-card-top">
        <span className="record-avatar">
          <Dices size={25} aria-hidden="true" />
        </span>
        <span className="record-badge">Mesa de investigação</span>
      </div>
      <h3>{name}</h3>
      <p>{masterName ? `Mestre: ${masterName}` : 'Um novo mistério espera'}</p>
      <div className="record-card-bottom">
        <UsersRound size={13} aria-hidden="true" />
        <span>
          {playerCount} {playerCount === 1 ? 'jogador' : 'jogadores'}
        </span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </div>
    </button>
  )
}
