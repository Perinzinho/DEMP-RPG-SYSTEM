interface RoomCardProps {
  name: string
  masterName?: string
  playerCount: number
  onClick?: () => void
}

function RoomCard({ name, masterName, playerCount, onClick }: RoomCardProps) {
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
        <span className="font-title text-[clamp(20px,2vw,38px)] text-foreground">?</span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(12px,1.04vw,20px)] text-foreground">
          {name}
        </p>
        {masterName && (
          <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(10px,0.85vw,16px)] italic text-[#c4c8c0]">
            Mestre: {masterName}
          </p>
        )}
        <p className="font-title m-0 overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(10px,0.85vw,16px)] italic text-[#c4c8c0]">
          {playerCount} jogadores
        </p>
      </div>

      <div className="flex shrink-0 items-center justify-center p-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-[clamp(20px,1.82vw,35px)] w-[clamp(20px,1.82vw,35px)] text-[#5A6056]"
        >
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </div>
  )
}

export default RoomCard
