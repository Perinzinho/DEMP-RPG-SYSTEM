using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class GetRoomByCodeUseCase
{
    private readonly IRoomRepository _roomRepository;

    public GetRoomByCodeUseCase(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    public async Task<GetRoomResponseDTO> GetRoomByCode(string code)
    {
        var room = await _roomRepository.GetRoomByCode(code);

        if (room == null)
            throw new RoomNotFoundException();
        
        return RoomMapper.ToResponseDTO(room);
    }
}