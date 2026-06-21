using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Response.Character;

public record GetCharacterSummaryResponse(
    Guid Id,
    Guid UserId,
    Guid? RoomId,
    string Name,
    string Occupation,
    int Age
    );