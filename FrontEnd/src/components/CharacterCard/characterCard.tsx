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
      className="flex min-h-[100px] w-full cursor-pointer items-center gap-4 rounded-md border border-[#5A6056] bg-[rgba(90,96,86,0.05)] p-4 hover:border-[#1a6fb5]"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) onClick()
      }}
      role="button"
      tabIndex={0}
    >
      <div className="flex h-[clamp(56px,5.16vw,99px)] w-[clamp(56px,5.16vw,99px)] shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#5A6056]">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="font-title text-[clamp(20px,2vw,38px)] text-foreground">?</span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(12px,1.04vw,20px)] text-foreground">
          {name}
        </p>
        <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(10px,0.85vw,16px)] italic text-[#c4c8c0]">
          {age} anos
        </p>
        <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(10px,0.85vw,16px)] italic text-[#c4c8c0]">
          {occupationLabel}
        </p>
        {roomName && (
          <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(10px,0.85vw,16px)] italic text-[#c4c8c0]">
            Mesa: {roomName}
          </p>
        )}
      </div>

      <div className="flex shrink-0 items-center justify-center p-2">
        <FaEye className="h-[clamp(20px,1.82vw,35px)] w-[clamp(20px,1.82vw,35px)] text-[#5A6056]" />
      </div>
    </div>
  )
}

export default CharacterCard
