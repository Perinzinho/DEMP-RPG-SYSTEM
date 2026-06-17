using DEMP_RPG_API.Application.DTOs.Request;
using DEMP_RPG_API.Application.DTOs.Request.User;
using DEMP_RPG_API.Application.UseCases.User;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DEMP_RPG_API.Adapters.Controllers{
    [ApiController]
    [Route("auth")]
    public class AuthController : ControllerBase
    {
        private readonly LoginUseCase _loginUseCase;
        private readonly RegisterUseCase _registerUseCase;

        public AuthController(LoginUseCase loginUseCase, RegisterUseCase registerUseCase)
        {
            _loginUseCase = loginUseCase;
            _registerUseCase = registerUseCase;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDTO dto)
        {
            await _registerUseCase.Register(dto);
            return Ok(new{message = "Successfully registered"});
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO dto)
        {
            var result = await _loginUseCase.Login(dto);
            return Ok(result);
        }
    }
}