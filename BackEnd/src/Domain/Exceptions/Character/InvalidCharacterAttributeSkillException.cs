namespace DEMP_RPG_API.Domain.Exceptions.Character;

public class InvalidCharacterAttributeSkillException:Exception
{
    public InvalidCharacterAttributeSkillException():base("Character attribute or skill must be greater than 0 and lower than 110"){}
}