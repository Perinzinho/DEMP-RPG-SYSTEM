import StatRow from '../StatRow/StatRow'

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
    <div className="rounded-lg border border-[#2F5663] p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <p className="font-title mb-3 text-[15px] text-[#9DC4D1]">Atributos</p>
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
