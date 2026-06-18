using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Adapters.Mappers;

public class CharacterStatsMapper
{
    public static GetCharacterStatsResponseDTO ToGetResponse(CharacterStatsEntity characterStats)
    {
        return new GetCharacterStatsResponseDTO(characterStats.Id,
            characterStats.CharacterId,
            characterStats.MaxAttributes,
            characterStats.Strength,
            characterStats.Dexterity,
            characterStats.Intelligence,
            characterStats.Size,
            characterStats.Power,
            characterStats.Appearance,
            characterStats.Education,
            characterStats.HitPoints,
            characterStats.CurrentHp,
            characterStats.Luck,
            characterStats.Sanity,
            characterStats.CurrentSanity,
            characterStats.Move,
            characterStats.Build,
            characterStats.Dodge,
            characterStats.DamageBonus,
            characterStats.TemporaryInsanity,
            characterStats.IndefiniteSanity,
            characterStats.MajorWound,
            characterStats.Unconscious,
            characterStats.Dying
            );
    }
}