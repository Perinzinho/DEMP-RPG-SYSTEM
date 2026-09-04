import { FaHeart } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { FaEye } from 'react-icons/fa'

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
  const hpPercent = maxHp ? Math.max(0, Math.min(100, ((currentHp ?? 0) / maxHp) * 100)) : 0
  const sanityPercent = maxSanity ? Math.max(0, Math.min(100, ((currentSanity ?? 0) / maxSanity) * 100)) : 0

  const hpBarColor =
    hpPercent > 60 ? 'bg-[#6fa37a]' : hpPercent > 30 ? 'bg-[#c9a84c]' : 'bg-[#a35a5a]'
  const sanityBarColor =
    sanityPercent > 60 ? 'bg-[#6ea8d8]' : sanityPercent > 30 ? 'bg-[#7c9aa3]' : 'bg-[#a35a5a]'

  return (
    <div
      className="flex min-h-[104px] w-full cursor-pointer items-center gap-4 rounded-md border border-[#5A6056] bg-[rgba(90,96,86,0.05)] p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-[#1a6fb5] hover:bg-[rgba(26,111,181,0.06)] hover:shadow-[0_4px_12px_rgba(26,111,181,0.1)]"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) onClick()
      }}
      role="button"
      tabIndex={0}
    >
      <div className="flex h-[clamp(56px,5.16vw,99px)] w-[clamp(56px,5.16vw,99px)] shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#5A6056] bg-[rgba(90,96,86,0.1)]">
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

        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-[clamp(11px,0.9vw,16px)]">
            <FaHeart className="h-[clamp(12px,1vw,16px)] w-[clamp(12px,1vw,16px)] shrink-0 text-[#b05b5b]" />
            <span className="font-sans italic text-[#c4c8c0]">
              <span className="text-[#c97b7b]">{currentHp}</span>/{maxHp}
            </span>
          </div>
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-[rgba(47,86,99,0.3)]">
            <div
              className={`h-full rounded-full transition-all duration-500 ${hpBarColor}`}
              style={{ width: `${hpPercent}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-[clamp(11px,0.9vw,16px)]">
            <GiBrain className="h-[clamp(12px,1vw,16px)] w-[clamp(12px,1vw,16px)] shrink-0 text-[#7c9aa3]" />
            <span className="font-sans italic text-[#c4c8c0]">
              <span className="text-[#6ea8d8]">{currentSanity}</span>/{maxSanity}
            </span>
          </div>
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-[rgba(47,86,99,0.3)]">
            <div
              className={`h-full rounded-full transition-all duration-500 ${sanityBarColor}`}
              style={{ width: `${sanityPercent}%` }}
            />
          </div>
        </div>

        {playerName && (
          <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(10px,0.8vw,14px)] italic text-[#6E97A4]">
            {playerName}
          </p>
        )}
      </div>

      <div className="flex shrink-0 items-center justify-center p-2">
        <FaEye className="h-[clamp(20px,1.6vw,30px)] w-[clamp(20px,1.6vw,30px)] text-[#5A6056] transition-colors duration-300 hover:text-[#1a6fb5]" />
      </div>
    </div>
  )
}

export default MasterCharacterCard
