using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Response;

public record LoginResponseDTO(
    RoleEnum Role,
    string Token
    );