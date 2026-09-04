import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import CharacterSheetHeader from '../../components/CharacterSheetHeader/characterSheetHeader'
import AttributesPanel from '../../components/AttributesPanel/attribuesPanel'
import ResourcesPanel from '../../components/ResourcesPanel/resourcesPanel'
import AboutPanel from '../../components/AboutPanel/aboutPanel'
import SkillsPanel from '../../components/SkillsPanel/skillsPanel'
import { getCharacterById, updateCharacter } from '../../services/characterService'
import { getCharacterStatsByCharacterId, updateCharacterStats } from '../../services/characterStatsService'
import { OCCUPATIONS } from '../../utils/occupations'
import { Skills } from '../../utils/skills'
import type { Character, CharacterStats } from '../../types'
import { Button } from '@/components/ui/button'
import { FaCheck } from 'react-icons/fa'

function CharacterSheetPage() {
  const { characterId } = useParams()

  const [character, setCharacter] = useState<Character | null>(null)
  const [stats, setStats] = useState<CharacterStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!characterId) return
    const id = characterId

    async function loadAll() {
      try {
        const [characterData, statsData] = await Promise.all([
          getCharacterById(id),
          getCharacterStatsByCharacterId(id),
        ] as const)
        setCharacter(characterData)
        setStats(statsData)
      } catch {
        setError('Não foi possível carregar a ficha.')
      } finally {
        setLoading(false)
      }
    }

    loadAll()
  }, [characterId])

  function handleCharacterField(field: string, value: string | number) {
    setCharacter((prev) => ({ ...(prev as Character), [field]: value }))
  }

  function handleStatField(field: string, value: number) {
    setStats((prev) => ({ ...(prev as CharacterStats), [field]: value }))
  }

  function handleSkillField(field: string, value: number) {
    setStats((prev) => {
      const current = prev as CharacterStats
      return {
        ...current,
        skills: {
          ...(current.skills ?? {}),
          [field]: value,
        },
      }
    })
  }

  async function handleSave() {
    if (!character || !stats) return

    try {
      const skillValues: Record<string, number> = stats.skills ?? {}
      const skillsConverted: Record<string, number> = Object.fromEntries(
        Object.entries(skillValues).map(([key, value]) => [Skills[key], value])
      )

      await Promise.all([
        updateCharacter(character.id, {
          name: character.name,
          gender: character.gender,
          residence: character.residence,
          age: character.age,
          annotations: character.annotations,
        }),
        updateCharacterStats(stats.id, {
          strength: stats.strength,
          constitution: stats.constitution,
          size: stats.size,
          dexterity: stats.dexterity,
          appearance: stats.appearance,
          intelligence: stats.intelligence,
          power: stats.power,
          education: stats.education,
          hitPoints: stats.hitPoints,
          currentHp: stats.currentHp,
          luck: stats.luck,
          sanity: stats.sanity,
          currentSanity: stats.currentSanity,
          move: stats.move,
          build: stats.build,
          condition: stats.condition,
          skills: skillsConverted,
        }),
      ])

      const [characterData, statsData] = await Promise.all([
        getCharacterById(characterId as string),
        getCharacterStatsByCharacterId(characterId as string),
      ])
      setCharacter(characterData)
      setStats(statsData)

      setError('')
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch {
      setError('Erro ao salvar a ficha.')
    }
  }

  const occupationLabel =
    OCCUPATIONS.find((o) => o.value === character?.occupation)?.label ?? ''

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="flex flex-col items-center gap-3 py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1a6fb5] border-t-transparent" />
            <p className="font-title italic text-[#6E97A4]">Carregando ficha...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!character || !stats) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <p className="py-10 text-center italic text-[#6E97A4]">Ficha não encontrada.</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto box-border w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <CharacterSheetHeader
            name={character.name}
            onNameChange={(v) => handleCharacterField('name', v)}
            occupation={occupationLabel.toString()}
            age={character.age}
          />

          <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <AttributesPanel stats={stats as unknown as Record<string, number>} onChange={handleStatField} />
            <ResourcesPanel stats={stats as unknown as Record<string, number>} onChange={handleStatField} />
            <AboutPanel
              annotations={character.annotations}
              onChange={(v) => handleCharacterField('annotations', v)}
            />
          </div>

          <SkillsPanel skills={stats.skills ?? {}} onChange={handleSkillField} />

          {error && (
            <p className="mb-4 text-center text-[13px] text-destructive animate-in fade-in duration-300">
              {error}
            </p>
          )}

          <div className="text-center">
            <Button
              onClick={handleSave}
              className={`font-title rounded border px-8 py-2.5 text-[15px] italic transition-all duration-300 ${
                saved
                  ? 'border-[#6fa37a] bg-[rgba(111,163,122,0.1)] text-[#6fa37a]'
                  : 'border-[#1a6fb5] bg-transparent text-foreground hover:bg-primary/10 hover:shadow-[0_4px_12px_rgba(26,111,181,0.15)]'
              }`}
              type="submit"
            >
              {saved ? (
                <span className="flex items-center gap-2">
                  <FaCheck />
                  Salvo!
                </span>
              ) : (
                'Salvar Ficha'
              )}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CharacterSheetPage
