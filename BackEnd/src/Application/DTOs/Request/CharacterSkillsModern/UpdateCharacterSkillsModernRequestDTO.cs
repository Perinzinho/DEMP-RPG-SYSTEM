using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Application.DTOs.Request.CharacterSkillsModern;

public record UpdateCharacterSkillsModernRequestDTO(
    SkillEnum Skill,
    int Value
    );