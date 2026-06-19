namespace DEMP_RPG_API.Domain.Exceptions.Character;

public class CharacterSkillsNotFoundException:Exception
{
    public CharacterSkillsNotFoundException():base(message:"CharacterSkill not Found"){}
}