import { useState } from 'react'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'
import { rollD100, type RollResult } from '../../utils/dice'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface StatRowProps {
  label: string
  value: number
  onChange?: (value: number) => void
  editable?: boolean
}

const TIER_COLORS: Record<string, string> = {
  critical: 'text-[#6fa37a]',
  extreme: 'text-[#6fa37a]',
  hard: 'text-[#6fa37a]',
  success: 'text-[#7c9aa3]',
  fumble: 'text-[#a35a5a]',
  fail: 'text-[#a37c5a]',
}

function StatRow({ label, value, onChange, editable = true }: StatRowProps) {
  const [rollResult, setRollResult] = useState<RollResult | null>(null)

  function handleRoll() {
    const result = rollD100(value)
    setRollResult(result)
    setTimeout(() => setRollResult(null), 2500)
  }

  const half = Math.floor(value / 2)
  const fifth = Math.floor(value / 5)

  return (
    <div className="relative flex items-center gap-2 border-b border-[rgba(47,86,99,0.3)] py-1.5 text-[13px] transition-colors duration-200 hover:bg-[rgba(26,111,181,0.03)]">
      <span className="flex-1 text-[#c4c8c0]">{label}</span>
      <span className="flex items-center gap-0.5 text-xs text-[#6E97A4]">
        {editable ? (
          <Input
            aria-label={label}
            type="number"
            value={value}
            onChange={(e) => onChange?.(Number(e.target.value))}
            className="w-8 border-none bg-transparent p-0 text-right text-[13px] text-foreground transition-colors duration-200 hover:bg-[rgba(26,111,181,0.05)]"
          />
        ) : (
          value
        )}
        /{half}/{fifth}
      </span>
      <button
        className="flex cursor-pointer items-center rounded border border-[#5A6056] p-1 text-sm text-[#6E97A4] transition-all duration-300 hover:border-[#1a6fb5] hover:bg-[rgba(26,111,181,0.1)] hover:text-[#1a6fb5]"
        onClick={handleRoll}
        aria-label={`Rolar d100 para ${label}`}
        title={rollResult ? `${rollResult.value} - ${rollResult.label}` : 'Rolar d100'}
        type="button"
      >
        <GiPerspectiveDiceSixFacesRandom />
      </button>
      {rollResult && (
        <span
          className={cn(
            'absolute -top-5 right-0 whitespace-nowrap rounded bg-black px-2 py-0.5 text-[11px] italic shadow-[0_2px_8px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200',
            TIER_COLORS[rollResult.tier] ?? ''
          )}
        >
          {rollResult.value} · {rollResult.label}
        </span>
      )}
    </div>
  )
}

export default StatRow
