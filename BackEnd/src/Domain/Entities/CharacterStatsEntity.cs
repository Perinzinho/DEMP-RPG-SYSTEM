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
    public DamageBonusEnum DamageBonus { get; private set; }
    public bool TemporaryInsanity { get; private set; }
    public bool IndefiniteSanity { get; private set; }
    public bool MajorWound{ get; private set; }
    public bool Unconscious { get; private set; }
    public bool Dying { get; private set; }

    public CharacterStatsEntity(Guid id, Guid characterId, MaxAttributesEnum maxAttributes, int strength, int dexterity, int intelligence, int size, int power, int appearance, int education, int hitPoints, int currentHp, int luck, int sanity, int currentSanity, int move, int build, int dodge, DamageBonusEnum damageBonus)
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
        int? move, int? build, int? dodge, DamageBonusEnum? damageBonus, bool? temporaryInsanity, bool? indefiniteSanity,
        bool? majorWound, bool? unconscious, bool? dying)
    {
        if (maxAttributes.HasValue) MaxAttributes = maxAttributes.Value;
        if (strength.HasValue) Strength = strength.Value;
        if (dexterity.HasValue) Dexterity = dexterity.Value;
        if (intelligence.HasValue) Intelligence = intelligence.Value;
        if (size.HasValue) Size = size.Value;
        if (power.HasValue) Power = power.Value;
        if (appearance.HasValue) Appearance = appearance.Value;
        if (education.HasValue) Education = education.Value;
        if (hitPoints.HasValue) HitPoints = hitPoints.Value;
        if (currentHp.HasValue) CurrentHp = currentHp.Value;
        if (luck.HasValue) Luck = luck.Value;
        if (sanity.HasValue) Sanity = sanity.Value;
        if (currentSanity.HasValue) CurrentSanity = currentSanity.Value;
        if (move.HasValue) Move = move.Value;
        if (build.HasValue) Build = build.Value;
        if (dodge.HasValue) Dodge = dodge.Value;
        if (damageBonus.HasValue) DamageBonus = damageBonus.Value;
        if (temporaryInsanity.HasValue) TemporaryInsanity = temporaryInsanity.Value;
        if (indefiniteSanity.HasValue) IndefiniteSanity = indefiniteSanity.Value;
        if (majorWound.HasValue) MajorWound = majorWound.Value;
        if (unconscious.HasValue) Unconscious = unconscious.Value;
        if (dying.HasValue) Dying = dying.Value;
    }
    
}