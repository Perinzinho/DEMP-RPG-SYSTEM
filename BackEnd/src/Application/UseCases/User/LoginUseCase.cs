using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Request;
using DEMP_RPG_API.Application.DTOs.Response;
using DEMP_RPG_API.Domain.Exceptions.User;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.User;

public class LoginUseCase
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _hasher;
    private readonly IJwtTokenService _jwtTokenService;

    public LoginUseCase(IUserRepository userRepository, IPasswordHasher hasher, IJwtTokenService jwtTokenService)
    {
        _userRepository = userRepository;
        _hasher = hasher;
        _jwtTokenService = jwtTokenService;
    }
    
    public async Task<LoginResponseDTO> Login(LoginRequestDTO dto)
    {
        var user =await _userRepository.GetUserByEmail(dto.Email);
        if (user == null)
            throw new EmailOrPasswordIncorrectException();
        
        var verify = _hasher.Verify(dto.Password,user.PasswordHash);

        if (verify == false)
            throw new EmailOrPasswordIncorrectException();
        
        var token = _jwtTokenService.GenerateToken(user);
        
        
        return UserMapper.ToLoginResponse(user, token);



    }
}