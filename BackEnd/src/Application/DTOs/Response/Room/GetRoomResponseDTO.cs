using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Response.Room;

public record GetRoomResponseDTO(
    Guid Id,
    string RoomCode,
    Guid MasterId,
    string Name,
    string Description,
    List<Guid> UserIds,
    DateTime CreatedAt,
    DateTime? UpdatedAt
    );