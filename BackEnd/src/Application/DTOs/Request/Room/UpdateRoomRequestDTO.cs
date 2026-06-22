using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Request.Room;

public record UpdateRoomRequestDTO(
    string Name,
    string Description,
    SheetEnum SheetEnum,
    List<Guid> UserIds
    );