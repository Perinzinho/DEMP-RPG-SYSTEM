using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Adapters.Mappers;

public class RoomMapper
{
    public static GetRoomResponseDTO ToResponseDTO(RoomEntity room)
    {
        return new GetRoomResponseDTO(
            room.Id,
            room.RoomCode,
            room.MasterId,
            room.Name,
            room.Description,
            room.UserIds,
            room.CreatedAt,
            room.UpdatedAt
        );
    }


}