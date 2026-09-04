import { sortedSkillFields, type SkillField } from '../../utils/skillFields'
import { Input } from '@/components/ui/input'

interface CharacterSkillsStepProps {
  skills: Record<string, number>
  onChange: (field: string, value: number) => void
}

interface SkillGroup {
  label: string
  skills: SkillField[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Armas de Fogo',
    skills: [
      { key: 'FightingBow', label: 'Arco' },
      { key: 'Flamethrower', label: 'Lança-chamas' },
      { key: 'MachineGun', label: 'Metralhadora' },
      { key: 'HandGun', label: 'Pistola' },
      { key: 'RifleShotgun', label: 'Rifle/Espingarda' },
      { key: 'HeavyWeapons', label: 'Armas Pesadas' },
      { key: 'SubmachineGun', label: 'Submetralhadora' },
    ],
  },
  {
    label: 'Luta',
    skills: [
      { key: 'FightingBrawl', label: 'Briga' },
      { key: 'FightingWhip', label: 'Chicote' },
      { key: 'FightingSword', label: 'Espada' },
      { key: 'FightingGarrote', label: 'Garrote' },
      { key: 'FightingSpear', label: 'Lança' },
      { key: 'FightingAxe', label: 'Machado' },
      { key: 'FightingFlail', label: 'Mangual' },
      { key: 'FightingChainsaw', label: 'Motosserra' },
      { key: 'Throw', label: 'Arremessar' },
    ],
  },
  {
    label: 'Ciência',
    skills: [
      { key: 'Astronomy', label: 'Astronomia' },
      { key: 'Biology', label: 'Biologia' },
      { key: 'Botany', label: 'Botânica' },
      { key: 'Cryptography', label: 'Criptografia' },
      { key: 'Engineering', label: 'Engenharia' },
      { key: 'Pharmacy', label: 'Farmácia' },
      { key: 'Physics', label: 'Física' },
      { key: 'Forensics', label: 'Forense' },
      { key: 'Geology', label: 'Geologia' },
      { key: 'Mathematics', label: 'Matemática' },
      { key: 'Meteorology', label: 'Meteorologia' },
      { key: 'Chemistry', label: 'Química' },
      { key: 'Zoology', label: 'Zoologia' },
    ],
  },
  {
    label: 'Social',
    skills: [
      { key: 'Charm', label: 'Charme' },
      { key: 'FastTalk', label: 'Lábia' },
      { key: 'Intimidate', label: 'Intimidação' },
      { key: 'Persuade', label: 'Persuasão' },
      { key: 'Psychoanalysis', label: 'Psicanálise' },
      { key: 'Psychology', label: 'Psicologia' },
    ],
  },
  {
    label: 'Mental',
    skills: [
      { key: 'Accounting', label: 'Contabilidade' },
      { key: 'Law', label: 'Direito' },
      { key: 'History', label: 'História' },
      { key: 'LanguageOtherValue', label: 'Língua (Outra)' },
      { key: 'LanguageOwn', label: 'Língua Nativa' },
      { key: 'CthulhuMythos', label: 'Mitos de Cthulhu' },
      { key: 'Occult', label: 'Ocultismo' },
      { key: 'LibraryUse', label: 'Uso de Biblioteca' },
      { key: 'ComputerUse', label: 'Uso de Computador' },
    ],
  },
  {
    label: 'Físico',
    skills: [
      { key: 'Climb', label: 'Escalar' },
      { key: 'Jump', label: 'Saltar' },
      { key: 'Swim', label: 'Natação' },
      { key: 'Stealth', label: 'Furtividade' },
      { key: 'Dodge', label: 'Esquivar' },
      { key: 'SleightOfHand', label: 'Prestidigitação' },
      { key: 'Survival', label: 'Sobrevivência' },
      { key: 'FirstAid', label: 'Primeiros Socorros' },
      { key: 'Medicine', label: 'Medicina' },
    ],
  },
  {
    label: 'Percepção',
    skills: [
      { key: 'SpotHidden', label: 'Encontrar' },
      { key: 'Listen', label: 'Escutar' },
      { key: 'Track', label: 'Rastrear' },
    ],
  },
  {
    label: 'Técnico',
    skills: [
      { key: 'Archaelogy', label: 'Arqueologia' },
      { key: 'Anthropology', label: 'Antropologia' },
      { key: 'ArtCraft', label: 'Arte e Ofício' },
      { key: 'Appraise', label: 'Avaliação' },
      { key: 'Ride', label: 'Cavalgar' },
      { key: 'LockSmith', label: 'Chaveiro' },
      { key: 'EletricRepair', label: 'Conserto Elétrico' },
      { key: 'MechanicalRepair', label: 'Conserto Mecânico' },
      { key: 'CreditRating', label: 'Nível de Crédito' },
      { key: 'NaturalWorld', label: 'Mundo Natural' },
      { key: 'Navigate', label: 'Navegação' },
      { key: 'Disguise', label: 'Disfarce' },
      { key: 'DriveAuto', label: 'Dirigir' },
      { key: 'Eletronics', label: 'Eletrônica' },
      { key: 'OperateHeavyMachinery', label: 'Operar Máquinas Pesadas' },
      { key: 'PilotAirCraft', label: 'Pilotar (Aeronaves)' },
    ],
  },
]

function CharacterSkillsStep({ skills, onChange }: CharacterSkillsStepProps) {
  const skillMap = new Map(sortedSkillFields.map((f) => [f.key, f]))

  return (
    <div>
      <p className="mb-6 text-center text-[13px] text-[#6E97A4]">
        Distribua pontos de perícia entre as opções abaixo
      </p>

      <div className="max-h-[520px] w-full overflow-y-auto rounded-lg border border-[rgba(47,86,99,0.3)] p-4 pr-5">
        <div className="space-y-5">
          {SKILL_GROUPS.map((group) => {
            const resolvedSkills = group.skills
              .map((s) => skillMap.get(s.key) ?? s)
              .filter(Boolean)

            return (
              <div key={group.label}>
                <h3 className="mb-2 border-b border-[rgba(47,86,99,0.4)] pb-1 text-[13px] font-semibold tracking-wide text-[#6E97A4] uppercase">
                  {group.label}
                </h3>
                <div className="grid grid-cols-1 gap-x-6 gap-y-0.5 md:grid-cols-2 xl:grid-cols-3">
                  {resolvedSkills.map((field) => (
                    <div
                      key={field.key}
                      className="flex items-center justify-between rounded px-2 py-1.5 text-[14px] transition-colors duration-200 hover:bg-[rgba(26,111,181,0.05)]"
                    >
                      <span className="text-[#d0d4cc]">{field.label}</span>
                      <Input
                        aria-label={field.label}
                        type="number"
                        value={skills[field.key] ?? 0}
                        onChange={(e) =>
                          onChange(field.key, Number(e.target.value))
                        }
                        className="h-8 w-12 rounded bg-[rgba(8,66,81,0.4)] px-1 py-0 text-right text-[14px] text-foreground"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CharacterSkillsStep
