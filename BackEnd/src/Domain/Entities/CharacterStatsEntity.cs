using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterStatsEntity
{
    public Guid Id { get; private set; }
    public Guid CharacterId { get; private set; }
    public MaxAttributesEnum  MaxAttributes { get; private set; }
    public BaseAttributeVo BaseAttributes { get; private set; }
    public PoolStatVo HitPoints { get; private set; }
    public int Luck { get; private set; }
    public PoolStatVo Sanity { get; private set; }
    public int Move { get; private set; }
    public int Build { get; private set; }
    public DamageBonusEnum DamageBonus { get; private set; }
    public CharacterConditionEnum Condition { get; private set; }

    public CharacterStatsEntity(Guid id, Guid characterId, MaxAttributesEnum maxAttributes,BaseAttributeVo baseAttributes ,PoolStatVo hitPoints, int luck, PoolStatVo sanity, int move, int build, DamageBonusEnum damageBonus, CharacterConditionEnum condition)
    {
        Id = id;
        CharacterId = characterId;
        MaxAttributes = maxAttributes;
        BaseAttributes = baseAttributes;
        HitPoints=hitPoints;
        Luck = luck;
        Sanity = sanity;
        Move = move;
        Build = build;
        DamageBonus = damageBonus;
        Condition=condition; //Default=None
    }

    public void Update(MaxAttributesEnum? maxAttributes, BaseAttributeVo? baseAttributes, PoolStatVo? hitPoints, int? luck, PoolStatVo? sanity,
        int? move, int? build, DamageBonusEnum? damageBonus, CharacterConditionEnum? condition)
    {
        if (maxAttributes.HasValue) MaxAttributes = maxAttributes.Value;
        if(!baseAttributes.Equals(BaseAttributes)) BaseAttributes = baseAttributes;
        if(hitPoints)
        if (luck.HasValue) Luck = luck.Value;

        if (move.HasValue) Move = move.Value;
        if (build.HasValue) Build = build.Value;
        if (damageBonus.HasValue) DamageBonus = damageBonus.Value;
        if (condition.HasValue) Condition = condition.Value;
    }
    
}