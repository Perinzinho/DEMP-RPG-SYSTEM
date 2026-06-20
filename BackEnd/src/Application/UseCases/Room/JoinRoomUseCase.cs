using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.Room;
using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class JoinRoomUseCase
{
    private readonly IRoomRepository _roomRepository;

    public JoinRoomUseCase(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    public async Task<GetRoomResponseDTO> JoinRoom(string roomCode, Guid userId)
    {
        var room = await _roomRepository.GetRoomByCode(roomCode);
        if (room == null)
            throw new RoomNotFoundException();

        room.AddUser(userId);

        var updated = await _roomRepository.UpdateRoom(room);

        return RoomMapper.ToResponseDTO(updated);
    }
}