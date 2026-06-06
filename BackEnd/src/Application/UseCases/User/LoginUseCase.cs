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
    
    public async Task<string> Login(string email, string password)
    {
        var user =await _userRepository.GetUserByEmail(email);
        if (user == null)
            throw new UserNotFoundException();
        
        var verify = _hasher.Verify(password,user.PasswordHash);

        if (verify == false)
            throw new UserInvalidPasswordExcepetion();
        
        var token = _jwtTokenService.GenerateToken(user);
        
        
        return token;



    }
}