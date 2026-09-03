import { sortedSkillFields } from '../../utils/skillFields'
import { Input } from '@/components/ui/input'

interface CharacterSkillsStepProps {
  skills: Record<string, number>
  onChange: (field: string, value: number) => void
}

function CharacterSkillsStep({ skills, onChange }: CharacterSkillsStepProps) {
  return (
    <div>
      <p className="mb-6 text-center text-[13px] text-[#6E97A4]">
        Distribua pontos de perícia entre as opções abaixo
      </p>

      <div
        className="max-h-[420px] gap-x-8 overflow-y-auto pr-2"
        style={{ display: 'grid', gridTemplateRows: 'repeat(18, auto)', gridAutoFlow: 'column' }}
      >
        {sortedSkillFields.map((field) => (
          <div
            key={field.key}
            className="flex items-center justify-between border-b border-[rgba(47,86,99,0.3)] py-1.5 text-[13px]"
          >
            <span className="text-[#c4c8c0]">{field.label}</span>
            <Input
              aria-label={field.label}
              type="number"
              value={skills[field.key] ?? 0}
              onChange={(e) => onChange(field.key, Number(e.target.value))}
              className="w-10 border-none bg-transparent text-right text-[13px] text-foreground"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterSkillsStep
