using DEMP_RPG_API.Domain.Exceptions.Character;

namespace DEMP_RPG_API.Domain.ValueObjects.Character;

public class AttributeSkillVO
{
    private AttributeSkillVO() { }
    public int Value { get; set; }

    public AttributeSkillVO(int value)
    {
        if (value < 0)
            throw new InvalidCharacterAttributeSkillException();
        
        if(value > 110)
            throw new InvalidCharacterAttributeSkillException();
        
        Value = value;
    }
}