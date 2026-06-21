using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterStatsEntity
{
    public Guid Id { get; private set; }
    public Guid CharacterId { get; private set; }
    public MaxAttributesEnum  MaxAttributes { get; private set; }
    public AttributeSkillVO Strength { get; private set; }
    public AttributeSkillVO Dexterity { get; private set; }
    public AttributeSkillVO Intelligence { get; private set; }
    public AttributeSkillVO Size { get; private set; }
    public AttributeSkillVO Power { get; private set; }
    public AttributeSkillVO Appearance { get;private set; }
    public AttributeSkillVO Education { get; private set; }
    public int HitPoints { get; private set; }
    public int CurrentHp { get; private set; }
    public int Luck { get; private set; }
    public int Sanity { get; private set; }
    public int CurrentSanity { get; private set; }
    public int Move { get; private set; }
    public int Build { get; private set; }
    public AttributeSkillVO Dodge { get; private set; }
    public DamageBonusEnum DamageBonus { get; private set; }
    public bool TemporaryInsanity { get; private set; }
    public bool IndefiniteSanity { get; private set; }
    public bool MajorWound{ get; private set; }
    public bool Unconscious { get; private set; }
    public bool Dying { get; private set; }

    public CharacterStatsEntity(Guid id, Guid characterId, MaxAttributesEnum maxAttributes, AttributeSkillVO strength, AttributeSkillVO dexterity, AttributeSkillVO intelligence, AttributeSkillVO size, AttributeSkillVO power, AttributeSkillVO appearance, AttributeSkillVO education, int hitPoints, int currentHp, int luck, int sanity, int currentSanity, int move, int build, AttributeSkillVO dodge, DamageBonusEnum damageBonus)
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

    public void Update(MaxAttributesEnum? maxAttributes, AttributeSkillVO? strength, AttributeSkillVO? dexterity, AttributeSkillVO? intelligence, AttributeSkillVO? size,
        AttributeSkillVO? power, AttributeSkillVO? appearance, AttributeSkillVO? education, int? hitPoints, int? currentHp, int? luck, int? sanity, int? currentSanity,
        int? move, int? build, AttributeSkillVO? dodge, DamageBonusEnum? damageBonus, bool? temporaryInsanity, bool? indefiniteSanity,
        bool? majorWound, bool? unconscious, bool? dying)
    {
        if (maxAttributes.HasValue) MaxAttributes = maxAttributes.Value;
        if (strength!=null) Strength = strength;
        if (dexterity!=null) Dexterity = dexterity;
        if (intelligence!=null) Intelligence = intelligence;
        if (size!=null) Size = size;
        if (power!=null) Power = power;
        if (appearance!=null) Appearance = appearance;
        if (education!=null) Education = education;
        if (hitPoints.HasValue) HitPoints = hitPoints.Value;
        if (currentHp.HasValue) CurrentHp = currentHp.Value;
        if (luck.HasValue) Luck = luck.Value;
        if (sanity.HasValue) Sanity = sanity.Value;
        if (currentSanity.HasValue) CurrentSanity = currentSanity.Value;
        if (move.HasValue) Move = move.Value;
        if (build.HasValue) Build = build.Value;
        if (dodge!=null) Dodge = dodge;
        if (damageBonus.HasValue) DamageBonus = damageBonus.Value;
        if (temporaryInsanity.HasValue) TemporaryInsanity = temporaryInsanity.Value;
        if (indefiniteSanity.HasValue) IndefiniteSanity = indefiniteSanity.Value;
        if (majorWound.HasValue) MajorWound = majorWound.Value;
        if (unconscious.HasValue) Unconscious = unconscious.Value;
        if (dying.HasValue) Dying = dying.Value;
    }
    
}