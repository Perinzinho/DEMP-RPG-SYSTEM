import { FaEye } from 'react-icons/fa'
import { OCCUPATIONS } from '../../utils/occupations'

interface CharacterCardProps {
  name: string
  age: number
  occupation: number | string
  roomName?: string
  avatarUrl?: string
  onClick?: () => void
}

function CharacterCard({ name, age, occupation, roomName, avatarUrl, onClick }: CharacterCardProps) {
  const occupationLabel =
    OCCUPATIONS.find((o) => o.value === occupation)?.label ?? String(occupation ?? '')

  return (
    <div
      className="group flex w-full cursor-pointer flex-col rounded-xl border border-[#2F5663] bg-gradient-to-b from-[rgba(8,66,81,0.35)] to-[rgba(2,10,14,0.6)] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1a6fb5] hover:shadow-[0_8px_28px_rgba(26,111,181,0.25)]"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) onClick()
      }}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-[clamp(64px,5.9vw,96px)] w-[clamp(64px,5.9vw,96px)] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#1a6fb5]/40 bg-[rgba(26,111,181,0.12)] shadow-inner">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <span className="font-title text-[clamp(26px,2.6vw,46px)] text-[#1a6fb5]">?</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-title m-0 truncate text-[clamp(16px,1.4vw,22px)] text-foreground">
            {name}
          </p>
          <p className="font-title m-0 mt-1 truncate text-[clamp(12px,1vw,16px)] italic text-[#9dc4d1]">
            {occupationLabel}
          </p>
        </div>

        <FaEye className="h-[clamp(18px,1.5vw,26px)] w-[clamp(18px,1.5vw,26px)] shrink-0 text-[#5A6056] transition-colors duration-300 group-hover:text-[#1a6fb5]" />
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-[#2F5663]/50 pt-3 text-[clamp(11px,0.9vw,14px)] italic text-[#6E97A4]">
        <span>{age} anos</span>
        {roomName && (
          <>
            <span className="text-[#2F5663]">•</span>
            <span className="truncate">Mesa: {roomName}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default CharacterCard
