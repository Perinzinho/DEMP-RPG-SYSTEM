using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Domain.Ports;

public interface IRoomRepository
{
    Task<RoomEntity> CreateRoom(RoomEntity room);
}