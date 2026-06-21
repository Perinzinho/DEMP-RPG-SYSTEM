using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Response.Character;

public record GetCharacterDetailResponseDTO(    
    Guid Id,
    Guid? RoomId,
    Guid UserId,
    string Name,
    string Gender,
    string Occupation,
    string Residence,
    int Age,
    string Annotations,
    List<Guid> ItemIds
);