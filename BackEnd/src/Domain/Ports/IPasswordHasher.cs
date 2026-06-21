using DEMP_RPG_API.Domain.ValueObjects.User;

namespace DEMP_RPG_API.Domain.Ports;

public interface IPasswordHasher
{
    string Hash(string password);
    bool Verify(string password, string hashedPassword);
}