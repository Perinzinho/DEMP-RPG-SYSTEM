using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Infrastructure.Repositories;

public class RoomRepository:IRoomRepository
{
    private readonly AppDbContext _context;
    
    public RoomRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<RoomEntity> CreateRoom(RoomEntity room)
    {
        await _context.Rooms.AddAsync(room);
        await _context.SaveChangesAsync();
        return room;
    }

    public Task<RoomEntity?> GetRoomById(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<RoomEntity>> GetAllRooms()
    {
        throw new NotImplementedException();
    }
    
    public Task<RoomEntity?> GetRoomByCode(string code)
    {
        throw new NotImplementedException();
    }

    public async Task<RoomEntity> UpdateRoom(RoomEntity room)
    {
        throw new NotImplementedException();
    }

    public async Task<RoomEntity> DeleteRoom(Guid id)
    {
        throw new NotImplementedException();
    }
    
    
}