using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class GetRoomByIdUseCase
{
    private readonly IRoomRepository _roomRepository;
    
    public GetRoomByIdUseCase(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    public async Task<GetRoomResponseDTO> GetRoomById(Guid id)
    {
        var room = await _roomRepository.GetRoomById(id);

        if (room == null)
            throw new RoomNotFoundException();

        return RoomMapper.ToResponseDTO(room);
    }
}