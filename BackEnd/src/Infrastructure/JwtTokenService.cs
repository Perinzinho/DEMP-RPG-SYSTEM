using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Infrastructure;

public class JwtTokenService
{
    private readonly IJwtTokenService _jwtTokenService;

    public LoginUseCase(IJwtTokenService jwtTokenService)
    {
        _jwtTokenService = jwtTokenService;
    }

    public string Execute(UserEntity user)
    {
        return _jwtTokenService.GenerateToken(user);
    }
}