using DEMP_RPG_API.Domain.ValueObjects.User;

namespace DEMP_RPG_API.Application.DTOs.Request.User;

public record RegisterRequestDTO(
    string Username,
    EmailVO Email,
    PasswordVO Password
    );