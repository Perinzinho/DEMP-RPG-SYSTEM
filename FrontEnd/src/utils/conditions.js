export const ConditionFlags = {
    TemporaryInsanity: 1,
    IndefiniteSanity: 2,
    MajorWound: 4,
    Unconscious: 8,
    Dying: 16
};

export function hasCondition(condition, flag) {
    return (condition & flag) !== 0;
}

export function toggleCondition(condition, flag, value) {
    return value ? (condition | flag) : (condition & ~flag);
}