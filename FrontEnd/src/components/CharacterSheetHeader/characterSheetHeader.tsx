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
    <div className="mb-8 flex items-center gap-5 border-b border-[#1a6fb5] pb-5">
      <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded border border-[#5A6056] text-2xl text-foreground">
        ?
      </div>
      <div className="w-full">
        <Input
          aria-label="Nome do personagem"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="font-title w-full border-none bg-transparent p-0 text-[clamp(22px,2.2vw,32px)] italic text-foreground"
        />
        <p className="mt-1 text-[13px] text-[#6E97A4]">
          {occupationLabel} &middot; {age} anos
        </p>
      </div>
    </div>
  )
}

export default CharacterSheetHeader
