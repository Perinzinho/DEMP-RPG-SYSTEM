using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.Room;
using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class UpdateRoomUseCase
{
    private readonly IRoomRepository _roomRepository;
    
    public UpdateRoomUseCase(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    public async Task<GetRoomResponseDTO> UpdateRoom(Guid id, UpdateRoomRequestDTO dto)
    {
        var room = await _roomRepository.GetRoomById(id);

        if (room == null)
            throw new RoomNotFoundException();
        
        room.Update(dto.Name,dto.Description,dto.SheetEnum);
        await _roomRepository.UpdateRoom(room);

        return RoomMapper.ToResponseDTO(room);
    }
}