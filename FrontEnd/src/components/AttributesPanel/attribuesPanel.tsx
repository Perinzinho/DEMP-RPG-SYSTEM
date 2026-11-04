import StatRow from '../StatRow/StatRow'
import { Fingerprint } from 'lucide-react'

const ATTRIBUTE_FIELDS = [
  { key: 'strength', label: 'For' },
  { key: 'constitution', label: 'Con' },
  { key: 'size', label: 'Tam' },
  { key: 'dexterity', label: 'Des' },
  { key: 'appearance', label: 'Apa' },
  { key: 'intelligence', label: 'Int' },
  { key: 'power', label: 'Pod' },
  { key: 'education', label: 'Edu' },
]

interface AttributesPanelProps {
  stats: Record<string, number>
  onChange: (field: string, value: number) => void
}

function AttributesPanel({ stats, onChange }: AttributesPanelProps) {
  return (
    <div className="surface-panel attributes-panel p-5 sm:p-6">
      <h2 className="panel-heading">
        <Fingerprint size={21} aria-hidden="true" /> Atributos
      </h2>
      {ATTRIBUTE_FIELDS.map((field) => (
        <StatRow
          key={field.key}
          label={field.label}
          value={stats[field.key] ?? 0}
          onChange={(v) => onChange(field.key, v)}
        />
      ))}
      <StatRow label="Esquiva" value={stats.dodge ?? 0} onChange={(v) => onChange('dodge', v)} />
    </div>
  )
}

export default AttributesPanel
