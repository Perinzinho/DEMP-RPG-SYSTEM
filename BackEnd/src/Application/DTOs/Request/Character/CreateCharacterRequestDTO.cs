using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Request.Character;

public record CreateCharacterRequestDTO(
    Guid RoomId,
    Guid UserId,
    string Name,
    string Gender,
    OccupationsEnum Occupation,
    string Residence,
    string Age,
    string Annotations,
    List<Guid> ItemIds
    );