using DEMP_RPG_API.Application.DTOs.Request.Character;
using DEMP_RPG_API.Application.UseCases.Character;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DEMP_RPG_API.Adapters.Controllers;
[ApiController]
[Route("characters")]
[Authorize]
public class CharacterController:ControllerBase
{
    private readonly CreateCharacterUseCase _createCharacterUseCase;
    private readonly DeleteCharacterUseCase _deleteCharacterUseCase;
    private readonly GetAllCharactersUseCase _getAllCharactersUseCase;
    private readonly  GetCharacterByIdUseCase _getCharacterByIdUseCase;
    private readonly GetCharacterByUserIdUseCase _getCharacterByUserIdUseCase;
    private readonly UpdateCharacterUseCase _updateCharacterUseCase;
    private readonly GetCharacterByRoomIdUseCase _getCharacterByRoomIdUseCase;

    public CharacterController(CreateCharacterUseCase createCharacterUseCase,
        DeleteCharacterUseCase deleteCharacterUseCase,
        GetAllCharactersUseCase getAllCharactersUseCase,
        GetCharacterByIdUseCase getCharacterByIdUseCase,
        GetCharacterByUserIdUseCase getCharacterByUserIdUseCase,
        UpdateCharacterUseCase updateCharacterUseCase,
        GetCharacterByRoomIdUseCase getCharacterByRoomIdUseCase)
    {
        _createCharacterUseCase = createCharacterUseCase;
        _deleteCharacterUseCase = deleteCharacterUseCase;
        _getAllCharactersUseCase = getAllCharactersUseCase;
        _getCharacterByIdUseCase = getCharacterByIdUseCase;
        _getCharacterByUserIdUseCase = getCharacterByUserIdUseCase;
        _updateCharacterUseCase = updateCharacterUseCase;
        _getCharacterByRoomIdUseCase = getCharacterByRoomIdUseCase;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCharacter([FromBody] CreateCharacterRequestDTO dto)
    {
        await _createCharacterUseCase.CreateCharacter(dto);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCharacter(Guid id)
    {
        await _deleteCharacterUseCase.DeleteCharacter(id);
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCharacters()
    {
        var result =await  _getAllCharactersUseCase.GetAllCharacters();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCharacterById(Guid id)
    {
       var result = await _getCharacterByIdUseCase.GetCharacterById(id);
        return Ok(result);
    }

    [HttpGet("user/{userId}")]
    public async Task<IActionResult> GetCharacterByUserId(Guid userId)
    {
       var result = await _getCharacterByUserIdUseCase.GetCharactersByUserId(userId);
       return Ok(result);
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateCharacter(Guid id, [FromBody] UpdateCharacterRequestDTO dto)
    {
        var result =await _updateCharacterUseCase.UpdateCharacter(id, dto);
        return Ok(result);
    }

    [HttpGet("room/{roomId}")]
    public async Task<IActionResult> GetCharacterByRoomId(Guid roomId)
    {
        var result = await _getCharacterByRoomIdUseCase.GetCharacterByRoomId(roomId);
        
        return Ok(result);
    }
    
    
}