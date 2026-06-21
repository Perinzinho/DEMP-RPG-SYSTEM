using DEMP_RPG_API.Domain.ValueObjects.User;

namespace DEMP_RPG_API.Domain.Ports;

public interface IPasswordHasher
{
    string Hash(PasswordVO password);
    bool Verify(PasswordVO password, PasswordVO hashedPassword);
}