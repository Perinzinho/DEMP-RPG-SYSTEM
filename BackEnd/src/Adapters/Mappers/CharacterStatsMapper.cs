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
            characterStats.BaseAttributes.Strength.Value,
            characterStats.BaseAttributes.Dexterity.Value,
            characterStats.BaseAttributes.Intelligence.Value,
            characterStats.BaseAttributes.Size.Value,
            characterStats.BaseAttributes.Power.Value,
            characterStats.BaseAttributes.Appearance.Value,
            characterStats.BaseAttributes.Education.Value,
            characterStats.BaseAttributes.Constitution.Value,
            characterStats.HitPoints,
            characterStats.CurrentHp,
            characterStats.Luck,
            characterStats.Sanity,
            characterStats.CurrentSanity,
            characterStats.Move,
            characterStats.Build,
            characterStats.DamageBonus,
            characterStats.Condition
            );
    }
}