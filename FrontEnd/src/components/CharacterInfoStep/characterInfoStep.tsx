import { OCCUPATIONS } from '../../utils/occupations'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface CharacterInfoData {
  name: string
  gender: string
  occupation: number
  residence: string
  age: number
}

interface CharacterInfoStepProps {
  data: CharacterInfoData
  onChange: (field: string, value: string | number) => void
}

function CharacterInfoStep({ data, onChange }: CharacterInfoStepProps) {
  return (
    <div className="mx-auto flex w-full max-w-[420px] flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome" className="text-sm text-[#6E97A4]">
          Nome
        </Label>
        <Input
          aria-label="Nome"
          id="nome"
          type="text"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          className="rounded-md border border-[#2F5663] bg-transparent px-3 py-2 font-title italic text-sm text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.2)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="genero" className="text-sm text-[#6E97A4]">
          Gênero
        </Label>
        <Input
          aria-label="Gênero"
          id="genero"
          type="text"
          value={data.gender}
          onChange={(e) => onChange('gender', e.target.value)}
          className="rounded-md border border-[#2F5663] bg-transparent px-3 py-2 font-title italic text-sm text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.2)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="ocupacao" className="text-sm text-[#6E97A4]">
          Ocupação
        </Label>
        <Select
          value={String(data.occupation)}
          onValueChange={(value) => onChange('occupation', Number(value))}
        >
          <SelectTrigger
            id="ocupacao"
            className="w-full rounded-md border-border bg-muted text-sm text-foreground"
          >
            <SelectValue placeholder="Selecione a ocupação" />
          </SelectTrigger>
          <SelectContent className="max-h-80 bg-popover text-popover-foreground">
            {OCCUPATIONS.map((occ) => (
              <SelectItem key={occ.value} value={String(occ.value)}>
                {occ.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="residencia" className="text-sm text-[#6E97A4]">
          Residência
        </Label>
        <Input
          aria-label="Residência"
          id="residencia"
          type="text"
          value={data.residence}
          onChange={(e) => onChange('residence', e.target.value)}
          className="rounded-md border border-[#2F5663] bg-transparent px-3 py-2 font-title italic text-sm text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.2)]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="idade" className="text-sm text-[#6E97A4]">
          Idade
        </Label>
        <Input
          aria-label="Idade"
          id="idade"
          type="number"
          value={data.age}
          onChange={(e) => onChange('age', Number(e.target.value))}
          className="rounded-md border border-[#2F5663] bg-transparent px-3 py-2 font-title italic text-sm text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.2)]"
        />
      </div>
    </div>
  )
}

export default CharacterInfoStep
