using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Application.UseCases.CharacterStats;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DEMP_RPG_API.Adapters.Controllers;
[ApiController]
[Route("CharacterStats")]
[Authorize]
public class CharacterStatsController:ControllerBase
{
    private readonly CreateCharacterStatsUseCase _createCharacterStatsUseCase;
    private readonly DeleteCharacterStatsUseCase _deleteCharacterStatsUseCase;
    private readonly GetCharacterStatsByCharacterIdUseCase _getCharacterStatsByCharacterIdUseCase;
    private readonly GetCharacterStatsById _getcharacterStatsByIdUseCase;
    private readonly UpdateCharacterStatsUseCase _updateCharacterStatsUseCase;
    
    public CharacterStatsController(CreateCharacterStatsUseCase createCharacterStatsUseCase,
        DeleteCharacterStatsUseCase deleteCharacterStatsUseCase,
        GetCharacterStatsByCharacterIdUseCase getCharacterStatsByCharacterIdUseCase,
        GetCharacterStatsById characterStatsByIdUseCase,
        UpdateCharacterStatsUseCase updateCharacterStatsUseCase)
        {
        _createCharacterStatsUseCase = createCharacterStatsUseCase;
        _deleteCharacterStatsUseCase = deleteCharacterStatsUseCase;
        _getCharacterStatsByCharacterIdUseCase = getCharacterStatsByCharacterIdUseCase;
        _getcharacterStatsByIdUseCase = characterStatsByIdUseCase;
        _updateCharacterStatsUseCase = updateCharacterStatsUseCase;
        }

    [HttpPost("{characterId}")]
    public async Task<IActionResult> CreateCharacterStats([FromRoute]Guid characterId,[FromBody] CreateCharacterStatsRequestDTO dto)
    {
        var result =await _createCharacterStatsUseCase.CreateCharacterStats(characterId, dto);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCharacterStats(Guid id)
    {
        await _deleteCharacterStatsUseCase.DeleteCharacterStats(id);
        return Ok();
    }

    [HttpGet("character/{characterId}")]
    public async Task<IActionResult> GetCharacterStatsByCharacterId(Guid characterId)
    {
       var result = await _getCharacterStatsByCharacterIdUseCase.GetCharacterStatsByCharacterId(characterId);
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCharacterStatsById(Guid id)
    {
        var result = await _getcharacterStatsByIdUseCase.GetCharacterStats(id);
        return Ok(result);
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateCharacterStats(Guid id, [FromBody] UpdateCharacterStatsRequestDTO dto)
    {
        await _updateCharacterStatsUseCase.UpdateCharacterStats(id, dto);
        return Ok();
    }
    
    
}