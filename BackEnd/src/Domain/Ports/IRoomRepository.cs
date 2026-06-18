using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Domain.Ports;

public interface IRoomRepository
{
    Task<RoomEntity> CreateRoom(RoomEntity room);
    Task<RoomEntity?> GetRoomById(Guid id);
    Task<IEnumerable<RoomEntity>> GetAllRooms();//Only Admins
    Task<RoomEntity?> GetRoomByCode(string code);
    Task<RoomEntity> UpdateRoom(RoomEntity room);//Patch
    Task DeleteRoom(Guid id);
}