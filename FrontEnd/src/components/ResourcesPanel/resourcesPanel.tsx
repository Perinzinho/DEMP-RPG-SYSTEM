import { ConditionFlags, hasCondition, toggleCondition, type ConditionFlag } from '../../utils/conditions'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface ResourcesPanelProps {
  stats: Record<string, number>
  onChange: (field: string, value: number) => void
}

const CONDITION_CHECKS: { flag: ConditionFlag; label: string }[] = [
  { flag: ConditionFlags.TemporaryInsanity, label: 'Sanidade Temporária' },
  { flag: ConditionFlags.IndefiniteSanity, label: 'Sanidade Indefinida' },
  { flag: ConditionFlags.MajorWound, label: 'Ferimento Grave' },
  { flag: ConditionFlags.Unconscious, label: 'Inconsciente' },
  { flag: ConditionFlags.Dying, label: 'Morrendo' },
]

function ResourcesPanel({ stats, onChange }: ResourcesPanelProps) {
  return (
    <div>
      <p className="font-title mb-3 text-[15px] text-[#9DC4D1]">Recursos</p>

      <div className="flex items-center justify-between border-b border-[rgba(47,86,99,0.3)] py-1.5 text-[13px] text-[#c4c8c0]">
        <span>Vida</span>
        <span className="flex items-center gap-0.5">
          <Input
            aria-label="Vida atual"
            type="number"
            value={stats.currentHp}
            onChange={(e) => onChange('currentHp', Number(e.target.value))}
            className="w-8 border-none bg-transparent p-0 text-right text-[13px] text-foreground"
          />
          /
          <Input
            aria-label="Pontos de Vida"
            type="number"
            value={stats.hitPoints}
            onChange={(e) => onChange('hitPoints', Number(e.target.value))}
            className="w-8 border-none bg-transparent p-0 text-right text-[13px] text-foreground"
          />
        </span>
      </div>

      <div className="flex items-center justify-between border-b border-[rgba(47,86,99,0.3)] py-1.5 text-[13px] text-[#c4c8c0]">
        <span>Sanidade</span>
        <span className="flex items-center gap-0.5">
          <Input
            aria-label="Sanidade atual"
            type="number"
            value={stats.currentSanity}
            onChange={(e) => onChange('currentSanity', Number(e.target.value))}
            className="w-8 border-none bg-transparent p-0 text-right text-[13px] text-foreground"
          />
          /
          <Input
            aria-label="Pontos de Sanidade"
            type="number"
            value={stats.sanity}
            onChange={(e) => onChange('sanity', Number(e.target.value))}
            className="w-8 border-none bg-transparent p-0 text-right text-[13px] text-foreground"
          />
        </span>
      </div>

      <div className="flex items-center justify-between border-b border-[rgba(47,86,99,0.3)] py-1.5 text-[13px] text-[#c4c8c0]">
        <span>Sorte</span>
        <Input
          aria-label="Sorte"
          type="number"
          value={stats.luck}
          onChange={(e) => onChange('luck', Number(e.target.value))}
          className="w-10 border-none bg-transparent p-0 text-right text-[13px] text-foreground"
        />
      </div>

      <div className="flex items-center justify-between border-b border-[rgba(47,86,99,0.3)] py-1.5 text-[13px] text-[#c4c8c0]">
        <span>Movimento</span>
        <Input
          aria-label="Movimento"
          type="number"
          value={stats.move}
          onChange={(e) => onChange('move', Number(e.target.value))}
          className="w-10 border-none bg-transparent p-0 text-right text-[13px] text-foreground"
        />
      </div>

      <p className="font-title mb-3 mt-4 text-[15px] text-[#9DC4D1]">Status</p>

      {CONDITION_CHECKS.map(({ flag, label }) => (
        <Label key={flag} className="mb-1.5 flex cursor-pointer items-center gap-1.5 text-xs text-[#c4c8c0]">
          <Checkbox
            checked={hasCondition(stats.condition, flag)}
            onCheckedChange={(checked) =>
              onChange(
                'condition',
                toggleCondition(stats.condition, flag, checked === true)
              )
            }
          />
          {label}
        </Label>
      ))}
    </div>
  )
}

export default ResourcesPanel
