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
            characterStats.Strength.Value,
            characterStats.Dexterity.Value,
            characterStats.Intelligence.Value,
            characterStats.Size.Value,
            characterStats.Power.Value,
            characterStats.Appearance.Value,
            characterStats.Education.Value,
            characterStats.HitPoints,
            characterStats.CurrentHp,
            characterStats.Luck,
            characterStats.Sanity,
            characterStats.CurrentSanity,
            characterStats.Move,
            characterStats.Build,
            characterStats.Dodge.Value,
            characterStats.DamageBonus,
            characterStats.TemporaryInsanity,
            characterStats.IndefiniteSanity,
            characterStats.MajorWound,
            characterStats.Unconscious,
            characterStats.Dying
            );
    }
}