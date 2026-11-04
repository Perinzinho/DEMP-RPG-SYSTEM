import StatRow from '../StatRow/StatRow'
import { sortedSkillFields } from '../../utils/skillFields'
import { Crosshair } from 'lucide-react'

interface SkillsPanelProps {
  skills?: Record<string, number> | { skills?: Record<string, number> } | null
  onChange: (field: string, value: number) => void
}

function toSkillValues(skills: SkillsPanelProps['skills']): Record<string, number> {
  if (!skills) return {}
  const nested = (skills as { skills?: Record<string, number> }).skills
  if (nested && typeof nested === 'object') return nested
  return skills as Record<string, number>
}

function SkillsPanel({ skills, onChange }: SkillsPanelProps) {
  const skillValues = toSkillValues(skills)

  return (
    <div className="surface-panel skills-panel mb-8 mt-4 w-full p-5 sm:p-6">
      <h2 className="panel-heading">
        <Crosshair size={21} aria-hidden="true" /> Perícias
      </h2>
      <div className="grid w-full grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
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
