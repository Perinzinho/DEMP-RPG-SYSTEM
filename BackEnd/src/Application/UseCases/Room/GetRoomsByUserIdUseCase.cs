using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class GetRoomsByUserIdUseCase
{
    private readonly IRoomRepository _roomRepository;
    
    public GetRoomsByUserIdUseCase(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    public async Task<IEnumerable<GetRoomResponseDTO>> GetRoomsByUserId(Guid userId)
    {
        var rooms = (await _roomRepository.GetRoomsByUserId(userId)).ToList();

        return rooms.Select(room => RoomMapper.ToResponseDTO(room));
    }
}