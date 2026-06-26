using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Request.CharacterStats;

public record UpdateCharacterStatsRequestDTO(
    MaxAttributesEnum  MaxAttributes,
    int Strength,
    int Dexterity,
    int Intelligence,
    int Size,
    int Power,
    int Appearance,
    int Education,
    int Constitution,
    int HitPoints,
    int CurrentHp,
    int Luck,
    int Sanity,
    int CurrentSanity,
    int Move,
    int Build,
    DamageBonusEnum DamageBonus,
    CharacterConditionEnum Condition
);