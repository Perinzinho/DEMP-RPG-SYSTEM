using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

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
            characterStats.HitPoints.Max,
            characterStats.HitPoints.Current,
            characterStats.Luck,
            characterStats.Sanity.Max,
            characterStats.Sanity.Current,
            characterStats.Move,
            characterStats.Build,
            characterStats.DamageBonus,
            characterStats.Condition
            );
    }

    public static CharacterStatsEntity ToEntity(Guid characterId, CreateCharacterStatsRequestDTO dto)
    {
        return new CharacterStatsEntity(
            Guid.NewGuid(), 
            characterId,
            dto.MaxAttributes,
            new BaseAttributeVo(new AttributeSkillVO(dto.Strength),
                new AttributeSkillVO(dto.Dexterity),
                new AttributeSkillVO(dto.Intelligence),
                new AttributeSkillVO(dto.Size),
                new AttributeSkillVO(dto.Power),
                new AttributeSkillVO(dto.Appearance),
                new AttributeSkillVO(dto.Education),
                new AttributeSkillVO(dto.Constitution)),
            new PoolStatVo(dto.HitPoints, dto.CurrentHp),
            dto.Luck,
            new PoolStatVo(dto.Sanity, dto.CurrentSanity),
            dto.Move,
            dto.Build,
            dto.DamageBonus,
            CharacterConditionEnum.None
            );
    }
}