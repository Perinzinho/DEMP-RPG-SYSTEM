namespace DEMP_RPG_API.Application.DTOs.Request;

public record LoginRequestDTO(
    string Email,
    string PasswordHash
    );