import StatRow from '../StatRow/StatRow'
import { sortedSkillFields } from '../../utils/skillFields'

interface SkillsPanelProps {
  skills?: Record<string, number> | { skills?: Record<string, number> } | null
  onChange: (field: string, value: number) => void
}

function toSkillValues(
  skills: SkillsPanelProps['skills']
): Record<string, number> {
  if (!skills) return {}
  const nested = (skills as { skills?: Record<string, number> }).skills
  if (nested && typeof nested === 'object') return nested
  return skills as Record<string, number>
}

function SkillsPanel({ skills, onChange }: SkillsPanelProps) {
  const skillValues = toSkillValues(skills)

  return (
    <div className="mb-8 mt-4">
      <p className="font-title mb-3 text-[15px] text-[#9DC4D1]">Perícias</p>
      <div
        className="gap-x-8"
        style={{ display: 'grid', gridTemplateRows: 'repeat(18, auto)', gridAutoFlow: 'column' }}
      >
        {sortedSkillFields.map((field) => (
          <StatRow
            key={field.key}
            label={field.label}
            value={skillValues[field.key] ?? 0}
            onChange={(v) => onChange(field.key, v)}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsPanel
