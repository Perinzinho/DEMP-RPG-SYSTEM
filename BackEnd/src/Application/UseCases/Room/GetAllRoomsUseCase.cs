using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class GetAllRoomsUseCase
{
    private readonly IRoomRepository _roomRepository;
    
    public GetAllRoomsUseCase(IRoomRepository roomRepository){
        _roomRepository = roomRepository;
        
    }

    public async Task<IEnumerable<GetRoomResponseDTO>> GetAllRooms()
    {
        var rooms= (await _roomRepository.GetAllRooms()).ToList();

        if (!rooms.Any())
            throw new RoomNotFoundException();

        return rooms.Select(RoomMapper.ToResponseDTO);
    }
}