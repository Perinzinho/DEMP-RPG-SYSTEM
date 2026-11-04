import { OCCUPATIONS } from '../../utils/occupations'
import { Input } from '@/components/ui/input'

interface CharacterSheetHeaderProps {
  name: string
  onNameChange: (value: string) => void
  occupation: string
  age: number
}

function CharacterSheetHeader({ name, onNameChange, occupation, age }: CharacterSheetHeaderProps) {
  const occupationLabel =
    OCCUPATIONS.find((o) => o.value === Number(occupation))?.label ?? occupation

  return (
    <div className="sheet-identity mb-8 flex items-center gap-5">
      <div className="record-avatar h-16 w-16 shrink-0 sm:h-20 sm:w-20">
        {name.charAt(0).toLocaleUpperCase('pt-BR')}
      </div>
      <div className="min-w-0 w-full">
        <p className="eyebrow mb-2">Dossiê do investigador</p>
        <Input
          aria-label="Nome do personagem"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="font-title h-auto w-full border-none bg-transparent p-0 text-[clamp(22px,2.2vw,32px)] md:text-[clamp(22px,2.2vw,32px)] text-foreground transition-colors duration-200 hover:bg-primary/5 focus:bg-primary/5 focus:shadow-none"
        />
        <p className="mt-1 text-[13px] text-[#6E97A4]">
          {occupationLabel} &middot; {age} anos
        </p>
      </div>
    </div>
  )
}

export default CharacterSheetHeader
