namespace DEMP_RPG_API.Domain.ValueObjects.Character;

public class BaseAttributeVo : ValueObject
{
    public AttributeSkillVO Strength { get; private set; }
    public AttributeSkillVO Dexterity { get; private set; }
    public AttributeSkillVO Intelligence { get; private set; }
    public AttributeSkillVO Size { get; private set; }
    public AttributeSkillVO Power { get; private set; }
    public AttributeSkillVO Appearance{get;private set;}
    public AttributeSkillVO Education { get; private set; }
    public AttributeSkillVO Constitution{get;private set;}
    

    public BaseAttributeVo(AttributeSkillVO strength, AttributeSkillVO dexterity
        , AttributeSkillVO intelligence, AttributeSkillVO size,
        AttributeSkillVO power, AttributeSkillVO appearance, AttributeSkillVO education, AttributeSkillVO constitution)
    {
        Strength = strength;
        Dexterity = dexterity;
        Intelligence = intelligence;
        Size = size;
        Power = power;
        Appearance = appearance;
        Education = education;
        Constitution = constitution;
    }

    protected override IEnumerable<object> GetEqualityComponents()
    {
        //Yield serve para um return de cada elemento 1 de cada vez
        yield return Strength;
        yield return Dexterity;
        yield return Intelligence;
        yield return Size;
        yield return Power;
        yield return Appearance;
        yield return Education;
        yield return Constitution;
    }
}