import { FaHeart, FaEye } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'

interface MasterCharacterCardProps {
  characterName: string
  playerName?: string
  currentHp?: number
  maxHp?: number
  currentSanity?: number
  maxSanity?: number
  avatarUrl?: string
  onClick?: () => void
}

function MasterCharacterCard({
  characterName,
  playerName,
  currentHp,
  maxHp,
  currentSanity,
  maxSanity,
  avatarUrl,
  onClick,
}: MasterCharacterCardProps) {
  return (
    <div
      className="flex min-h-[104px] w-full cursor-pointer items-center gap-4 rounded-md border border-[#5A6056] bg-[rgba(90,96,86,0.05)] p-4 transition-colors hover:border-[#1a6fb5] hover:bg-[rgba(26,111,181,0.06)]"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) onClick()
      }}
      role="button"
      tabIndex={0}
    >
      <div className="flex h-[clamp(56px,5.16vw,99px)] w-[clamp(56px,5.16vw,99px)] shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#5A6056]">
        {avatarUrl ? (
          <img src={avatarUrl} alt={characterName} className="h-full w-full object-cover" />
        ) : (
          <span className="font-title text-[clamp(20px,2vw,38px)] text-[#c4c8c0]">?</span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(13px,1.1vw,22px)] text-foreground">
          {characterName}
        </p>

        <div className="flex items-center gap-1.5 text-[clamp(11px,0.9vw,16px)]">
          <FaHeart className="h-[clamp(12px,1vw,16px)] w-[clamp(12px,1vw,16px)] shrink-0 text-[#b05b5b]" />
          <span className="font-sans italic text-[#c4c8c0]">
            <span className="text-[#c97b7b]">{currentHp}</span>/{maxHp}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[clamp(11px,0.9vw,16px)]">
          <GiBrain className="h-[clamp(12px,1vw,16px)] w-[clamp(12px,1vw,16px)] shrink-0 text-[#7c9aa3]" />
          <span className="font-sans italic text-[#c4c8c0]">
            <span className="text-[#6ea8d8]">{currentSanity}</span>/{maxSanity}
          </span>
        </div>

        {playerName && (
          <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(10px,0.8vw,14px)] italic text-[#6E97A4]">
            {playerName}
          </p>
        )}
      </div>

      <div className="flex shrink-0 items-center justify-center p-2">
        <FaEye className="h-[clamp(20px,1.6vw,30px)] w-[clamp(20px,1.6vw,30px)] text-[#5A6056] transition-colors hover:text-[#1a6fb5]" />
      </div>
    </div>
  )
}

export default MasterCharacterCard
