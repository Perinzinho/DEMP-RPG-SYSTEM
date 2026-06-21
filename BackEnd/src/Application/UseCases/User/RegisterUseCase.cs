using DEMP_RPG_API.Application.DTOs.Request;
using DEMP_RPG_API.Application.DTOs.Request.User;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.Exceptions.User;
using DEMP_RPG_API.Domain.Ports;
using DEMP_RPG_API.Domain.ValueObjects.User;

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

    public async Task Register(RegisterRequestDTO dto)
    {
        var existingUser = await _userRepository.GetUserByEmail(dto.Email);
        if (existingUser != null)
            throw new EmailAlreadyExistsException();

        var passwordHash = new PasswordVO(_hasher.Hash(dto.Password));

        var user = new UserEntity(Guid.NewGuid(), dto.Username, passwordHash, RoleEnum.User, dto.Email);//Padronização- Criar Id no UseCase

        await _userRepository.Create(user);
    }
}