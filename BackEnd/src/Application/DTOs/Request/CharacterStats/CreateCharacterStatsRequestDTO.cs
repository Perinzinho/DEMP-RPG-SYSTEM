using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Application.DTOs.Request.CharacterStats;

public record CreateCharacterStatsRequestDTO(
    MaxAttributesEnum MaxAttributes,
    
    int Strength,//VO
    int Dexterity,//VO
    int Size,//VO
    int Intelligence,//VO
    int Power,//VO
    int Appearance,//VO
    int Education,//VO
    int Constitution,
    
    int HitPoints,
    int CurrentHp,
    int Luck,
    int Sanity,
    int CurrentSanity,
    int Move,
    int Build,
    
    DamageBonusEnum DamageBonus
    );