using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Response;

public record GetUsersResponseDTO(
    Guid UserId,
    string Email,
    string UserName,
    RoleEnum Role,
    DateTime CreatedAt,
    DateTime? UpdatedAt
    );