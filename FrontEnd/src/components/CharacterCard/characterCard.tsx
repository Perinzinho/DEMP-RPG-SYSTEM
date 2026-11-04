import { ArrowUpRight, FolderOpen } from 'lucide-react'
import { OCCUPATIONS } from '../../utils/occupations'

interface CharacterCardProps {
  name: string
  age: number
  occupation: number | string
  roomName?: string
  avatarUrl?: string
  onClick?: () => void
}

export default function CharacterCard({
  name,
  age,
  occupation,
  roomName,
  avatarUrl,
  onClick,
}: CharacterCardProps) {
  const occupationLabel =
    OCCUPATIONS.find((o) => o.value === occupation)?.label ?? String(occupation ?? '')
  return (
    <button
      type="button"
      className="record-card investigator-record"
      onClick={onClick}
      aria-label={`Abrir ficha de ${name}`}
    >
      <div className="record-card-top">
        <span className="record-avatar">
          {avatarUrl ? <img src={avatarUrl} alt="" /> : name.charAt(0).toLocaleUpperCase('pt-BR')}
        </span>
        <span className="record-badge">Dossiê de investigador</span>
      </div>
      <h3>{name}</h3>
      <p>
        {occupationLabel} · {age} anos
      </p>
      <div className="record-card-bottom">
        <FolderOpen size={13} aria-hidden="true" />
        <span>{roomName || 'Arquivo do departamento'}</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </div>
    </button>
  )
}
