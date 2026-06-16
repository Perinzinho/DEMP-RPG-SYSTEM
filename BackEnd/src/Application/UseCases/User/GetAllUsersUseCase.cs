using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Response;
using DEMP_RPG_API.Domain.Exceptions.User;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.User;

public class GetAllUsersUseCase
{
    private readonly IUserRepository _userRepository;
    
    public GetAllUsersUseCase(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<IEnumerable<GetUsersResponseDTO>> GetAllUsers()
    {

        var users = (await _userRepository.GetAllUsers()).ToList(); //Remove problema de múltiplas consultas no banco de dados;

            if (!users.Any())
                throw new UserNotFoundException();

            return users.Select(UserMapper.ToResponseDTO);

    }
}