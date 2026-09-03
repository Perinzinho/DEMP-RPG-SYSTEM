export interface RollResult {
  value: number
  label: string
  tier: 'critical' | 'extreme' | 'hard' | 'success' | 'fumble' | 'fail'
}

export function rollD100(targetValue: number): RollResult {
  const value = Math.floor(Math.random() * 100) + 1

  const half = Math.floor(targetValue / 2)
  const fifth = Math.floor(targetValue / 5)

  let label = 'Falha'
  let tier: RollResult['tier'] = 'fail'

  if (value === 1) {
    label = 'Crítico'
    tier = 'critical'
  } else if (value <= fifth) {
    label = 'Sucesso Extremo'
    tier = 'extreme'
  } else if (value <= half) {
    label = 'Sucesso Bom'
    tier = 'hard'
  } else if (value <= targetValue) {
    label = 'Sucesso Regular'
    tier = 'success'
  } else if (targetValue < 50 && value >= 96) {
    label = 'Desastre'
    tier = 'fumble'
  } else if (targetValue >= 50 && value === 100) {
    label = 'Desastre'
    tier = 'fumble'
  }

  return { value, label, tier }
}
