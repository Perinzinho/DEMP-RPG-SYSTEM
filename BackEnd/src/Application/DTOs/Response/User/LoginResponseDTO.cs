using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Response.User;

public record LoginResponseDTO(
    Guid UserId,
    RoleEnum Role,
    string Token
    );