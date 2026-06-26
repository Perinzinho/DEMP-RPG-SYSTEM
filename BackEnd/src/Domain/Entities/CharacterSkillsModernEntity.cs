using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterSkillsModernEntity
{
    public Guid Id { get; private set; }
    public Guid CharacterStatsId { get; private set; }
    public Guid CharacterId { get; private set; }

    public Dictionary<SkillEnum, AttributeSkillVO>
        Skill { get; private set; } //Muitos parametros iguais então mais fácil serem guardados num dicionário

    public CharacterSkillsModernEntity(Guid id, Guid characterStatsId, Guid characterId,
        Dictionary<SkillEnum, AttributeSkillVO> skill)
    {
        Skill = skill;
        CharacterStatsId = characterStatsId;
        CharacterId = characterId;
        Id = id;
    }


    public void Update(Dictionary<SkillEnum, AttributeSkillVO>? skills)
    {
        if (skills == null) return;

        foreach (var skill in skills)
        {
            if (Skill.ContainsKey(skill.Key))
                Skill[skill.Key] = skill.Value;

        }
    }
}