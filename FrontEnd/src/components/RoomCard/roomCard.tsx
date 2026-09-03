interface RoomCardProps {
  name: string
  masterName?: string
  playerCount: number
  onClick?: () => void
}

function RoomCard({ name, masterName, playerCount, onClick }: RoomCardProps) {
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
          <span className="font-title text-[clamp(26px,2.6vw,46px)] text-[#1a6fb5]">?</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-title m-0 truncate text-[clamp(16px,1.4vw,22px)] text-foreground">
            {name}
          </p>
          {masterName && (
            <p className="font-title m-0 mt-1 truncate text-[clamp(12px,1vw,16px)] italic text-[#9dc4d1]">
              Mestre: {masterName}
            </p>
          )}
        </div>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-[clamp(18px,1.5vw,26px)] w-[clamp(18px,1.5vw,26px)] shrink-0 text-[#5A6056] transition-colors duration-300 group-hover:text-[#1a6fb5]"
        >
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-[#2F5663]/50 pt-3 text-[clamp(11px,0.9vw,14px)] italic text-[#6E97A4]">
        <span>{playerCount} {playerCount === 1 ? 'jogador' : 'jogadores'}</span>
      </div>
    </div>
  )
}

export default RoomCard
