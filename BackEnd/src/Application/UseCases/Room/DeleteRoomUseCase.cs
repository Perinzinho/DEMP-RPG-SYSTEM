using DEMP_RPG_API.Domain.Exceptions.Room;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Room;

public class DeleteRoomUseCase
{
    private readonly IRoomRepository _roomRepository;
    
    public DeleteRoomUseCase(IRoomRepository roomRepository)
    {
        _roomRepository = roomRepository;
    }

    public async Task DeleteRoom(Guid id)
    {
        var room = await _roomRepository.GetRoomById(id);

        if (room != null)
            throw new RoomNotFoundException();
        
        await _roomRepository.DeleteRoom(id);
    }
}