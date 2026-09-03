import { PDFDocument } from 'pdf-lib'

export interface DholesCharacterData {
  info: {
    name: string
    gender?: string
    occupation?: string
    residence?: string
    age?: number
  }
  stats: Record<string, number>
  skills: Record<string, number>
}

const STAT_KEYS: Record<string, string> = {
  STR: 'strength',
  CON: 'constitution',
  SIZ: 'size',
  DEX: 'dexterity',
  APP: 'appearance',
  INT: 'intelligence',
  POW: 'power',
  EDU: 'education',
  StartingHP: 'hitPoints',
  CurrentHP: 'currentHp',
  StartingSanity: 'sanity',
  CurrentSanity: 'currentSanity',
  StartingMagic: 'magicPoints',
  MOV: 'move',
  Build: 'build',
}

const SKILL_PDF_TO_CODE: Record<string, string> = {
  Skill_Accounting: 'Accounting',
  Skill_Anthropology: 'Anthropology',
  Skill_Appraise: 'Appraise',
  Skill_Archaeology: 'Archaelogy',
  Skill_Charm: 'Charm',
  Skill_Climb: 'Climb',
  Skill_Cthulhu: 'CthulhuMythos',
  Skill_Dodge: 'Dodge',
  Skill_Drive: 'DriveAuto',
  Skill_FireArmsHandguns: 'HandGun',
  Skill_FireArmsRifles: 'RifleShotgun',
  Skill_FirstAid: 'FirstAid',
  Skill_History: 'History',
  Skill_Intimidate: 'Intimidate',
  Skill_Jump: 'Jump',
  Skill_OwnLanguage: 'LanguageOwn',
  Skill_Law: 'Law',
  Skill_LibraryUse: 'LibraryUse',
  Skill_Listen: 'Listen',
  Skill_Locksmith: 'LockSmith',
  Skill_MechRepair: 'MechanicalRepair',
  Skill_Medicine: 'Medicine',
  Skill_Navigate: 'Navigate',
  Skill_Persuade: 'Persuade',
  Skill_Ride: 'Ride',
  Skill_Sleight: 'SleightOfHand',
  Skill_SpotHidden: 'SpotHidden',
  Skill_Stealth: 'Stealth',
  Skill_Swim: 'Swim',
  Skill_Throw: 'Throw',
  Skill_Track: 'Track',
  Skill_Credit: 'CreditRating',
  Skill_FastTalk: 'FastTalk',
  Skill_Fighting: 'FightingBrawl',
  Skill_Disguise: 'Disguise',
  Skill_NaturalWorld: 'NaturalWorld',
  Skill_Occult: 'Occult',
  Skill_Psychology: 'Psychology',
  Skill_ElecRepair: 'EletricRepair',
  Skill_Psychoanalysis: 'Psychoanalysis',
}

const OCCUPATION_MAP: Record<string, number> = {
  assassin: 13,
  athlete: 14,
  author: 15,
  banker: 17,
  bartender: 18,
  boxer: 23,
  burglar: 24,
  clergy: 27,
  conman: 28,
  criminal: 31,
  cultleader: 32,
  dilettante: 35,
  doctor: 37,
  driver: 39,
  editor: 40,
  engineer: 42,
  entertainer: 43,
  explorer: 44,
  farmer: 45,
  fbiagent: 46,
  firefighter: 48,
  gangster: 53,
  gentleman: 55,
  hacker: 56,
  journalist: 59,
  judge: 60,
  laborer: 62,
  lawyer: 63,
  librarian: 64,
  mechanic: 67,
  militaryofficer: 68,
  miner: 69,
  missionary: 70,
  mountaineer: 71,
  musician: 73,
  nurse: 74,
  occultist: 75,
  parapsychologist: 77,
  pharmacist: 78,
  photographer: 79,
  pilot: 81,
  policeman: 82,
  privateinvestigator: 83,
  professor: 84,
  psychiatrist: 87,
  psychologist: 88,
  reporter: 89,
  researcher: 90,
  sailor: 91,
  salesman: 92,
  scientist: 93,
  secretary: 94,
  soldier: 97,
  spy: 98,
  student: 100,
  taxi: 102,
}

function toNumber(value: string | undefined | null): number | undefined {
  if (value == null) return undefined
  const cleaned = `${value}`.replace(/,/g, '.').trim()
  if (cleaned === '' || cleaned === '-') return undefined
  const num = Number(cleaned)
  return Number.isFinite(num) ? num : undefined
}

function mapOccupation(raw: string | undefined | null): number | undefined {
  if (!raw) return undefined
  const normalized = raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, '')
  return OCCUPATION_MAP[normalized]
}

export async function parseDholesPdf(file: File | ArrayBuffer): Promise<DholesCharacterData> {
  const bytes =
    file instanceof File ? await file.arrayBuffer() : file

  const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true })
  const form = pdf.getForm()

  const values: Record<string, string> = {}
  for (const field of form.getFields()) {
    const name = field.getName()
    try {
      const text = (field as { getText?: () => string | undefined }).getText?.()
      if (typeof text === 'string' && text.trim() !== '') {
        values[name] = text.trim()
      }
    } catch {
      // ignore non-text fields
    }
  }

  const info: DholesCharacterData['info'] = {
    name: values['Investigators_Name'] ?? '',
    gender: '',
    occupation: values['Occupation'],
    residence: values['Residence'] ?? '',
    age: toNumber(values['Age']),
  }

  const stats: Record<string, number> = {}
  for (const [pdfKey, codeKey] of Object.entries(STAT_KEYS)) {
    const num = toNumber(values[pdfKey])
    if (num !== undefined) stats[codeKey] = num
  }

  const luck = toNumber(values['CurrentLuck']) ?? toNumber(values['StartingLuck'])
  if (luck !== undefined) stats['luck'] = luck

  const skills: Record<string, number> = {}
  for (const [pdfKey, codeKey] of Object.entries(SKILL_PDF_TO_CODE)) {
    const num = toNumber(values[pdfKey])
    if (num !== undefined) skills[codeKey] = num
  }

  return {
    info,
    stats,
    skills,
  }
}

export function occupationToEnum(raw: string | undefined): number | undefined {
  return mapOccupation(raw)
}
