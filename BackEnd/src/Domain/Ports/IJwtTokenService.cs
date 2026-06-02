using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Domain.Ports;

public interface IJwtTokenService
{
    public string GenerateToken(UserEntity User);
}