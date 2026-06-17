using DEMP_RPG_API.Domain.Enums;
using Superpower.Parsers;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterEntity
{
    //ToDo-CharacterProfile
    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid RoomId { get; private set; }//ToDo-Validation for Roomid
    public string Name {get; private set;}
    public string Gender {get; private set;}
    public OccupationsEnum Occupation {get; private set;}//Note: See if it's possible to minimize occupation Enum
    public string Residence {get; private set;}
    public int Age {get; private set;}//ToDo-Validation for Age
    public string Annotations{get; private set;}
    public List<Guid> ItemIds{get; private set;}
    public DateTime CreatedAt {get; private set;}
    public DateTime? UpdatedAt {get; private set;}

    public CharacterEntity(Guid id, Guid userId, Guid roomId, string name, string gender, OccupationsEnum occupation,
        string residence, int age, string annotations, List<Guid> itemIds)
    {
        Id = id;
        UserId = userId;
        RoomId = roomId;
        Name = name;
        Gender = gender;
        Occupation = occupation;
        Residence = residence;
        Age = age;
        Annotations = annotations;
        ItemIds = itemIds;
        CreatedAt = DateTime.Now;
        UpdatedAt = null;
    }

    public void Update(string? name, string? gender, OccupationsEnum? occupation, string? residence, int? age,
        string? annotations, List<Guid>? itemIds)
    {
        if (Name != name) Name= name;
        if (Gender != gender) Gender = gender;
        if (Occupation != occupation) Occupation = occupation.Value;
        if (Residence != residence) Residence = residence;
        if (Age != age) Age = age.Value;
        if (Annotations != annotations) Annotations = annotations;
        if (ItemIds != itemIds) ItemIds = itemIds;
        UpdatedAt = DateTime.Now;
    }
}