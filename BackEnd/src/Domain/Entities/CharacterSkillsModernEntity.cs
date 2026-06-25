using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterSkillsModernEntity
{
    public Guid Id { get; private set; }
    public Dictionary<SkillEnum, AttributeSkillVO>  Skill { get; private set; }//Muitos parametros iguais então mais fácil serem guardados num dicionário

    public CharacterSkillsModernEntity(Dictionary<SkillEnum, AttributeSkillVO> skill, Guid id)
    {
        Skill = skill;
        Id = id;
    }
}