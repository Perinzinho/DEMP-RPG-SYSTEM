using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.Exceptions.User;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.User;

public class RegisterUseCase
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _hasher;

    public RegisterUseCase(IUserRepository userRepository, IPasswordHasher hasher)
    {
        _userRepository = userRepository;
        _hasher = hasher;
    }

    public async Task Register(string username, string email, string password)
    {
        var existingUser = await _userRepository.GetUserByEmail(email);
        if (existingUser != null)
            throw new EmailAlreadyExistsException();

        var passwordHash = _hasher.Hash(password);

        var user = new UserEntity(Guid.NewGuid(), username, passwordHash, RoleEnum.User, email);

        await _userRepository.Create(user);
    }
}