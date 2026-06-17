namespace DEMP_RPG_API.Application.DTOs.Request.User;

public record LoginRequestDTO(
    string Email,
    string Password
    );