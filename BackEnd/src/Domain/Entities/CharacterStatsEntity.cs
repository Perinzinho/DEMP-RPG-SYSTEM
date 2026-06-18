using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterStatsEntity
{
    public Guid Id { get; private set; }
    public Guid CharacterId { get; private set; }
    public MaxAttributesEnum  MaxAttributes { get; private set; }
    public int Strength { get; private set; }
    public int Dexterity { get; private set; }
    public int Intelligence { get; private set; }
    public int Size { get; private set; }
    public int Power { get; private set; }
    public int Appearance { get;private set; }
    public int Education { get; private set; }
    public int HitPoints { get; private set; }
    public int CurrentHp { get; private set; }
    public int Luck { get; private set; }
    public int Sanity { get; private set; }
    public int CurrentSanity { get; private set; }
    public int Move { get; private set; }
    public int Build { get; private set; }
    public int Dodge { get; private set; }
    public string DamageBonus { get; private set; }
    public bool TemporaryInsanity { get; private set; }
    public bool IndefiniteSanity { get; private set; }
    public bool MajorWound{ get; private set; }
    public bool Unconscious { get; private set; }
    public bool Dying { get; private set; }

    public CharacterStatsEntity(Guid id, Guid characterId, MaxAttributesEnum maxAttributes, int strength, int dexterity, int intelligence, int size, int power, int appearance, int education, int hitPoints, int currentHp, int luck, int sanity, int currentSanity, int move, int build, int dodge, string damageBonus)
    {
        Id = id;
        CharacterId = characterId;
        MaxAttributes = maxAttributes;
        Strength = strength;
        Dexterity = dexterity;
        Intelligence = intelligence;
        Size = size;
        Power = power;
        Appearance = appearance;
        Education = education;
        HitPoints = hitPoints;
        CurrentHp = currentHp;
        Luck = luck;
        Sanity = sanity;
        CurrentSanity = currentSanity;
        Move = move;
        Build = build;
        Dodge = dodge;
        DamageBonus = damageBonus;
        TemporaryInsanity = false;
        IndefiniteSanity = false;
        MajorWound = false;
        Unconscious = false;
        Dying = false;
    }

    public void Update(MaxAttributesEnum? maxAttributes, int? strength, int? dexterity, int? intelligence, int? size,
        int? power, int? appearance, int? education, int? hitPoints, int? currentHp, int? luck, int? sanity, int? currentSanity,
        int? move, int? build, int? dodge, string? damageBonus, bool? temporaryInsanity, bool? indefiniteSanity,
        bool? majorWound, bool? unconscious, bool? dying)
    {
        if(MaxAttributes!=maxAttributes)MaxAttributes=maxAttributes.Value;
        if(Strength!=strength)Strength=strength.Value;
        if(Dexterity!=dexterity)Dexterity=dexterity.Value;
        if(Intelligence!=intelligence) Intelligence=intelligence.Value;
        if(Size!=size) Size=size.Value;
        if(Power!=power) Power=power.Value;
        if (Appearance != appearance) Appearance = appearance.Value;
        if(Education!=education) Education=education.Value;
        if(HitPoints!=hitPoints)HitPoints=hitPoints.Value;
        if(CurrentHp!=currentHp) CurrentHp=currentHp.Value;
        if(Luck!=luck) Luck=luck.Value;
        if(Sanity!=sanity) Sanity=sanity.Value;
        if(CurrentSanity!=currentSanity) CurrentSanity=currentSanity.Value;
        if(Move!=move) Move=move.Value;
        if(Build!=build) Build=build.Value;
        if(Dodge!=dodge) Dodge=dodge.Value;
        if(DamageBonus!=damageBonus) DamageBonus=damageBonus;
        if(TemporaryInsanity!=temporaryInsanity)TemporaryInsanity=temporaryInsanity.Value;
        if(IndefiniteSanity!=indefiniteSanity) IndefiniteSanity=indefiniteSanity.Value;
        if(MajorWound!=majorWound)MajorWound=majorWound.Value;
        if(Unconscious!=unconscious) Unconscious=unconscious.Value;
        if(Dying!=dying) Dying=dying.Value;
    }
    
}