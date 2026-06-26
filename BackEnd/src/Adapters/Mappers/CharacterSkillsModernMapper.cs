using DEMP_RPG_API.Application.DTOs.Request.CharacterSkillsModern;
using DEMP_RPG_API.Application.DTOs.Response.CharacterSkillsModern;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Adapters.Mappers;

public class CharacterSkillsModernMapper
{
    public static CharacterSkillsModernEntity ToEntity(Guid characterStatsId, Guid characterId,CreateCharacterSkillsModernRequestDTO dto)
    {
        return new CharacterSkillsModernEntity(
            Guid.NewGuid(),
            characterStatsId,
            characterId,
            dto.Skills.ToDictionary(k => k.Key, v => new AttributeSkillVO(v.Value))
            );
    }

    public static GetCharacterSkillsModernResponseDTO ToResponse(CharacterSkillsModernEntity characterSkillsModern)
    {
        return new GetCharacterSkillsModernResponseDTO(
            characterSkillsModern.Id,
            characterSkillsModern.CharacterId,
            characterSkillsModern.CharacterStatsId,
            characterSkillsModern.Skill.ToDictionary(k => k.Key, v => v.Value.Value)
            );
    }
}