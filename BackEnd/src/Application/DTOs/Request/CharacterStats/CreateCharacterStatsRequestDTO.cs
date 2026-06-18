using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Request.CharacterStats;

public record CreateCharacterStatsRequestDTO(
    Guid CharacterId,
    MaxAttributesEnum MaxAttributes,
    int Strength,
    int Dexterity,
    int Intelligence,
    int Size,
    int Power,
    int Appearance,
    int Education,
    int HitPoints,
    int CurrentHp,
    int Luck,
    int Sanity,
    int CurrentSanity,
    int Move,
    int Build,
    int Dodge,
    DamageBonusEnum DamageBonus
    );