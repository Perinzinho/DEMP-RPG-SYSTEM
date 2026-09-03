import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import StepIndicator from '../../components/StepIndicator/stepIndicator'
import CharacterInfoStep, { type CharacterInfoData } from '../../components/CharacterInfoStep/characterInfoStep'
import CharacterAttributesStep from '../../components/CharacterAttributeStep/characterAttributeStep'
import CharacterSkillsStep from '../../components/CharacterSkillStep/characterSkillStep'
import { createCharacter } from '../../services/characterService'
import { createCharacterStats } from '../../services/characterStatsService'
import { useAuth } from '../../contexts/AuthContext'
import { Skills, toSkillsEnum } from '../../utils/skills'
import { Button } from '@/components/ui/button'

const INITIAL_SKILLS: Record<string, number> = Object.fromEntries(
  Object.keys(Skills).map((key) => [key, 0])
)

const INITIAL_INFO: CharacterInfoData = {
  name: '',
  gender: '',
  occupation: 14,
  residence: '',
  age: 25,
}

const INITIAL_STATS: Record<string, number> = {
  strength: 50,
  constitution: 50,
  size: 50,
  dexterity: 50,
  appearance: 50,
  intelligence: 50,
  power: 50,
  education: 50,
  hitPoints: 10,
  sanity: 50,
  magicPoints: 10,
}

function CreateCharacterPage() {
  const { roomId } = useParams()
  const { userId } = useAuth()
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState(1)
  const [info, setInfo] = useState<CharacterInfoData>(INITIAL_INFO)
  const [stats, setStats] = useState<Record<string, number>>(INITIAL_STATS)
  const [skills, setSkills] = useState<Record<string, number>>(INITIAL_SKILLS)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  function handleInfoChange(field: string, value: string | number) {
    setInfo((prev) => ({ ...prev, [field]: value }))
  }

  function handleStatsChange(field: string, value: number) {
    setStats((prev) => ({ ...prev, [field]: value }))
  }

  function handleSkillsChange(field: string, value: number) {
    setSkills((prev) => ({ ...prev, [field]: value }))
  }

  async function handleCreate() {
    setError('')
    setSaving(true)

    try {
      const character = await createCharacter({
        userId: userId as string,
        roomId,
        name: info.name,
        gender: info.gender,
        occupation: info.occupation,
        residence: info.residence,
        age: info.age,
        annotations: '',
        itemIds: [],
      })

      await createCharacterStats(character.id, {
        maxAttributes: 2,
        strength: stats.strength,
        constitution: stats.constitution,
        size: stats.size,
        dexterity: stats.dexterity,
        appearance: stats.appearance,
        intelligence: stats.intelligence,
        power: stats.power,
        education: stats.education,
        hitPoints: stats.hitPoints,
        currentHp: stats.hitPoints,
        sanity: stats.sanity,
        currentSanity: stats.sanity,
        luck: 50,
        move: 8,
        build: 0,
        damageBonus: 3,
        skills: toSkillsEnum(skills),
      })

      navigate(`/character/${character.id}`)
    } catch {
      setError('Erro ao criar personagem.')
    } finally {
      setSaving(false)
    }
  }

  function handleNext() {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1)
      return
    }
    handleCreate()
  }

  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-[760px] px-4 py-12 sm:px-6">
          <h1 className="font-title mb-2 text-center text-[clamp(24px,2.5vw,32px)] italic">
            Criar Investigador
          </h1>

          <StepIndicator currentStep={currentStep} />

          <div className="rounded-2xl border border-[#2F5663]/60 bg-[rgba(6,51,67,0.12)] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {currentStep === 1 && <CharacterInfoStep data={info} onChange={handleInfoChange} />}
            {currentStep === 2 && <CharacterAttributesStep stats={stats} onChange={handleStatsChange} />}
            {currentStep === 3 && <CharacterSkillsStep skills={skills} onChange={handleSkillsChange} />}
          </div>

          {error && (
            <p className="mt-4 text-center text-[13px] text-destructive animate-in fade-in duration-300">
              {error}
            </p>
          )}

          <div className="mx-auto mt-8 flex max-w-[480px] items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
              disabled={saving}
              className="font-title rounded border-[#5A6056] bg-transparent px-6 py-2 text-sm italic text-[#6E97A4] transition-all duration-300 hover:border-[#1a6fb5] hover:text-[#9dc4d1]"
            >
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              disabled={saving}
              className="font-title rounded border-[#1a6fb5] bg-transparent px-6 py-2 text-sm italic text-foreground transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_4px_12px_rgba(26,111,181,0.15)]"
            >
              {saving ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
                  Criando...
                </span>
              ) : currentStep === 3 ? (
                'Criar Personagem'
              ) : (
                'Próximo'
              )}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CreateCharacterPage
