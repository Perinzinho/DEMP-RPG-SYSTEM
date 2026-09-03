import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ATTRIBUTE_FIELDS = [
  { key: 'strength', label: 'FOR' },
  { key: 'constitution', label: 'CON' },
  { key: 'size', label: 'TAM' },
  { key: 'dexterity', label: 'DES' },
  { key: 'appearance', label: 'APA' },
  { key: 'intelligence', label: 'INT' },
  { key: 'power', label: 'POD' },
  { key: 'education', label: 'EDU' },
]

export interface CreateCharacterStatsData {
  strength: number
  constitution: number
  size: number
  dexterity: number
  appearance: number
  intelligence: number
  power: number
  education: number
  hitPoints: number
  sanity: number
  magicPoints: number
}

interface CharacterAttributesStepProps {
  stats: Record<string, number>
  onChange: (field: string, value: number) => void
}

function CharacterAttributesStep({ stats, onChange }: CharacterAttributesStepProps) {
  return (
    <div>
      <p className="mb-6 text-center text-[13px] text-[#6E97A4]">
        Distribua os pontos entre os atributos
      </p>

      <div className="mx-auto mb-8 grid max-w-[480px] grid-cols-2 gap-x-12">
        {ATTRIBUTE_FIELDS.map((field) => (
          <div
            key={field.key}
            className="flex items-center justify-between border-b border-[rgba(47,86,99,0.4)] py-2"
          >
            <span className="text-sm text-[#c4c8c0]">{field.label}</span>
            <Input
              aria-label={field.label}
              type="number"
              value={stats[field.key]}
              onChange={(e) => onChange(field.key, Number(e.target.value))}
              className="w-[50px] rounded border-none bg-muted p-1 text-center text-sm text-foreground"
            />
          </div>
        ))}
      </div>

      <p className="mb-6 text-center text-[13px] text-[#6E97A4]">
        Recursos (defina manualmente por enquanto)
      </p>

      <div className="mx-auto grid max-w-[480px] grid-cols-3 gap-4">
        {[
          { key: 'hitPoints', label: 'Vida' },
          { key: 'sanity', label: 'Sanidade' },
          { key: 'magicPoints', label: 'Magia' },
        ].map((field) => (
          <div key={field.key} className="text-center">
            <Label htmlFor={field.label} className="mb-1 block text-xs text-[#6E97A4]">
              {field.label}
            </Label>
            <Input
              type="number"
              value={stats[field.key]}
              onChange={(e) => onChange(field.key, Number(e.target.value))}
              className="mx-auto w-[60px] rounded bg-muted p-1.5 text-center text-base text-foreground"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CharacterAttributesStep
