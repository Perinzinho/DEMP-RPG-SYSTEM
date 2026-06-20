using DEMP_RPG_API.Application.DTOs.Response;
using DEMP_RPG_API.Application.DTOs.Response.User;
using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Adapters.Mappers.User;

public class UserMapper
{
    public static GetUsersResponseDTO ToResponseDTO(UserEntity user)
    {
        return new GetUsersResponseDTO(
            user.Id,
            user.Email,
            user.Username,
            user.Role,
            user.CreatedAt,
            user.UpdatedAt);
    }

    public static LoginResponseDTO ToLoginResponse(UserEntity user, string token)
    {
        return new LoginResponseDTO(
            user.Id,
            user.Role,
            token);
    }
}