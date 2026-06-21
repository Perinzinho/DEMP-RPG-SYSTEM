using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Request.Character;

public record UpdateCharacterRequestDTO(
    string Name,
    string Gender,
    OccupationsEnum Occupation,
    string Residence,
    int Age,
    string Annotations,
    List<Guid>? ItemIds
    );