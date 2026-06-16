using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Response;
using DEMP_RPG_API.Domain.Exceptions.User;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.User;

public class GetUserByIdUseCase
{
    private readonly IUserRepository _userRepository;
    
    public GetUserByIdUseCase(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<GetUsersResponseDTO?> GetUserById(Guid id)
    {
        var user = await _userRepository.GetUserById(id);

        if (user == null)
            throw new UserNotFoundException();

        return UserMapper.ToResponseDTO(user);
    }
}