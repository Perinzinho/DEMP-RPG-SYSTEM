using DEMP_RPG_API.Application.UseCases.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DEMP_RPG_API.Adapters.Controllers;
[ApiController]
[Authorize]
[Route("user")]
public class UserController:ControllerBase
{
    private readonly GetAllUsersUseCase _getAllUsersUseCase;
    private readonly GetUserByIdUseCase _getUserByIdUseCase;

    public UserController(GetAllUsersUseCase getAllUsersUseCase, GetUserByIdUseCase getUserByIdUseCase)
    {
        _getAllUsersUseCase = getAllUsersUseCase;
        _getUserByIdUseCase = getUserByIdUseCase;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAllUsers()
    {
        var result = await _getAllUsersUseCase.GetAllUsers();
        return Ok(result);
    }

    [HttpGet("/{userId}")]
    public async Task<IActionResult> GetUserById(Guid userId)
    {
        var result = await _getUserByIdUseCase.GetUserById(userId);
        return Ok(result);
    }
}