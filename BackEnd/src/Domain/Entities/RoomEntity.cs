using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.Exceptions.Room;

namespace DEMP_RPG_API.Domain.Entities;

public class RoomEntity
{
    //ToDo-Implementation of optional rules
    public Guid Id { get; private set; }
    public string RoomCode { get; private set; }
    public Guid MasterId { get; private set; }
    public string Name { get; private set; }
    public string? Description { get; private set; }//ToDo-Make Optional
    public List<Guid> UserIds { get; private set; }
    public SheetEnum SheetEnum { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }
    
    
    public RoomEntity(Guid id, Guid masterId, string name, string? description,SheetEnum sheetEnum)
    {
        Id = id;
        RoomCode = GenerateRoomCode();
        MasterId = masterId;
        Name = name;
        Description = description;
        UserIds = new List<Guid>();
        SheetEnum = sheetEnum;
        CreatedAt = DateTime.UtcNow;
        UpdatedAt = null;
    }

    public void Update(string? name, string? description, SheetEnum? sheetEnum, List<Guid>? userIds)
    {
        if (!string.IsNullOrEmpty(name)) Name = name;
        if (!string.IsNullOrEmpty(description)) Description = description;
        if (sheetEnum.HasValue) SheetEnum = sheetEnum.Value;
        if (userIds != null && userIds.Count > 0) UserIds = userIds;
        UpdatedAt = DateTime.UtcNow;
    }

    private static string GenerateRoomCode()//Simple way to generate room code, could be changed later for something better
    {
        //ToDo-Make Generate RoomCode more impredictable
        Random random = new Random();
        return random.Next(100000, 999999).ToString();
    }

    public void AddUser(Guid userId)
    {
        if (UserIds.Contains(userId))
            throw new UserAlreadyInRoomException();
        
        UserIds.Add(userId);
    }
}