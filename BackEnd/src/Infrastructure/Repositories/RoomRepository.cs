using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.EntityFrameworkCore;

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

    public async Task<RoomEntity?> GetRoomById(Guid id)
    {
        var result = await _context.Rooms.FirstOrDefaultAsync(room => room.Id == id);
        return result;
    }

    public async Task<IEnumerable<RoomEntity>> GetAllRooms()
    {
        var result = await _context.Rooms.ToListAsync();
        return result;
    }
    
    public async Task<RoomEntity?> GetRoomByCode(string code)
    {
        var result = await _context.Rooms.FirstOrDefaultAsync(room => room.RoomCode == code);
        return result;
    }

    public async Task<RoomEntity> UpdateRoom(RoomEntity room)
    {
        var oldRoom = await _context.Rooms.FindAsync(room.Id);

        if (oldRoom == null)
            throw new RoomNotFoundException();

        oldRoom.Update(room.Name, room.Description, room.SheetEnum);
        await _context.SaveChangesAsync();
        return oldRoom;
    }

    public async Task DeleteRoom(Guid id)
    {
        var result = await _context.Rooms.FindAsync(id);
        
        if (result == null)
            throw new RoomNotFoundException();
        
        _context.Remove(result);
        _context.SaveChanges();
    }
    
    
}