using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Response.CharacterStats;

public record GetCharacterStatsResponseDTO(
    Guid Id,
    Guid CharacterId,
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