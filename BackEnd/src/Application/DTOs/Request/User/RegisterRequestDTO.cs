namespace DEMP_RPG_API.Application.DTOs.Request.User;

public record RegisterRequestDTO(
    string Username,
    string Password,
    string Email
    );