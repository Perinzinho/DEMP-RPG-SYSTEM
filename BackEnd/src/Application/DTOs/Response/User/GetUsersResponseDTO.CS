using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.User;

namespace DEMP_RPG_API.Application.DTOs.Response.User;

public record GetUsersResponseDTO(
    Guid UserId,
    EmailVO Email,
    string UserName,
    RoleEnum Role,
    DateTime CreatedAt,
    DateTime? UpdatedAt
    );