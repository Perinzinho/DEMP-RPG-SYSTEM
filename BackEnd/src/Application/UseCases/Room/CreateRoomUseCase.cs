using DEMP_RPG_API.Application.DTOs.Request.Room;
using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class CreateRoomUseCase
{
    private readonly IRoomRepository _roomRepository;
    
    public CreateRoomUseCase(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    public async Task<CreateRoomResponseDTO> CreateRoom(CreateRoomRequestDTO dto)
    {
        var room = new RoomEntity(Guid.NewGuid(),dto.MasterId,dto.Name,dto.Description);
        
        await _roomRepository.CreateRoom(room);
        return new CreateRoomResponseDTO(room.Id);
    }
}