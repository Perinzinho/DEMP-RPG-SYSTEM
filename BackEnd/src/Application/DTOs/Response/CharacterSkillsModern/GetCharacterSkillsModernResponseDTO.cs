using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Application.DTOs.Response.CharacterSkillsModern;

public record GetCharacterSkillsModernResponseDTO(
    Guid Id,
    Guid CharacterId,
    Guid CharacterStatsId,
    Dictionary<SkillEnum, AttributeSkillVO> Skills
        );
    
    