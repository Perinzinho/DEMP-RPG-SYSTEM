export const ConditionFlags = {
  TemporaryInsanity: 1,
  IndefiniteSanity: 2,
  MajorWound: 4,
  Unconscious: 8,
  Dying: 16,
} as const

export type ConditionFlag =
  (typeof ConditionFlags)[keyof typeof ConditionFlags]

export function hasCondition(condition: number, flag: ConditionFlag): boolean {
  return (condition & flag) !== 0
}

export function toggleCondition(
  condition: number,
  flag: ConditionFlag,
  value: boolean
): number {
  return value ? condition | flag : condition & ~flag
}
