using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Domain.Entities;

public class RoomEntity
{
    public Guid Id { get; private set; }
    public Guid MasterId { get; private set; }
    public string Name { get; private set; }
    public string Description { get; private set; }
    public List<Guid> UserIds { get; private set; }
    public SheetEnum SheetEnum { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }
    
    
    public RoomEntity(Guid id, Guid masterId, string name, string description, List<Guid>usersIds,SheetEnum sheetEnum, DateTime createdAt, DateTime? updatedAt)
    {
        Id = id;
        MasterId = masterId;
        Name = name;
        Description = description;
        UserIds = usersIds;
        SheetEnum = sheetEnum;
        CreatedAt = DateTime.UtcNow;
        UpdatedAt = null;
    }

    public void Update(string name, string description, SheetEnum sheetEnum)
    {
        if (Name != name) Name = name;
        if(Description != description) Description = description;
        if(SheetEnum != sheetEnum) SheetEnum = sheetEnum;
        UpdatedAt = DateTime.UtcNow;
    }
}