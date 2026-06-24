using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterEntity
{
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid? RoomId { get; private set; }
    public string Name { get; private set; }
    public int Age { get; private set; }//6 to 16
    public string Gender { get; private set; }
    public int Agility { get; private set; }
    public int Strength { get; private set; }
    public int Intelect { get; private set; }
    public int Presence { get; private set; }
    public int Vigor { get; private set; }
    public OriginEnum Origin { get; private set; }
    public ClassEnum Class { get; private set; }
    public int HealthPoints { get; private set; }
    public int CurrentHp { get; private set; }
    public int EffortPoints { get; private set; }
    public int CurrentEp { get; private set; }
    public int Fear { get; private set; }
    public int CurrentFear { get; private set; }
    public int Defense { get; private set; }//10+AGI
    public int Move {get; private set;}
    public int Nex { get; private set; }
    public int EpLimit { get; private set; }
    public string? Notes { get; private set; }
    public List<Guid>? Habilities { get; private set; }
    public List<Guid>? Inventory { get; private set; }

    public CharacterEntity(Guid id, Guid userId, Guid? roomId, string name, int age, string gender, int agility,
        int strength, int intelect, int presence, int vigor, OriginEnum origin,
        ClassEnum @class, int healthPoints, int currentHp, int effortPoints, int currentEp, int fear, int currentFear,
        int move, int nex, int epLimit, string? notes, List<Guid>? habilities
        , List<Guid>? inventory)
    {
        Id = id;
        UserId = userId;
        RoomId = roomId;
        Name = name;
        Age = age;
        Gender = gender;
        Agility = agility;
        Strength = strength;
        Intelect = intelect;
        Presence = presence;
        Vigor = vigor;
        Origin = origin;
        Class = @class;
        HealthPoints = healthPoints;
        CurrentHp = currentHp;
        EffortPoints = effortPoints;
        CurrentEp = currentEp;
        Fear = fear;
        CurrentFear = currentFear;
        Defense = 10 + agility;
        Move = move;
        Nex = nex;
        EpLimit = epLimit;
        Notes = notes;
        Habilities = habilities;
        Inventory = inventory;
    }
    


}