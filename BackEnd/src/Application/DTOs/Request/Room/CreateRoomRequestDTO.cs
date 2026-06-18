using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Request.Room;

public record CreateRoomRequestDTO(
    Guid MasterId,
    string Name,
    string Description,
    SheetEnum SheetEnum
);
