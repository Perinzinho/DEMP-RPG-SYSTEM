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
    
    
}