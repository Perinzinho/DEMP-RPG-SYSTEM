using DEMP_RPG_API.Application.DTOs.Request.CharacterSkillsModern;
using DEMP_RPG_API.Application.UseCases.CharacterSkillsModern;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DEMP_RPG_API.Adapters.Controllers;
[ApiController]
[Route("characterSkillsModern")]
[Authorize]
public class CharacterSkillsModernController:ControllerBase
{
    private readonly CreateCharacterSkillsModernUseCase _createCharacterSkillsModernUseCase;
    private readonly DeleteCharacterSkillsUseCase _deleteCharacterSkillsUseCase;
    private readonly UpdateCharacterSkillsUseCase _updateCharacterSkillsUseCase;
    private readonly GetCharacterSkillsModernByIdUseCase _getCharacterSkillsModernByIdUseCase;
    private readonly GetCharacterSkillsByCharacterIdUseCase _getCharacterSkillsByCharacterIdUseCase;

    public CharacterSkillsModernController(CreateCharacterSkillsModernUseCase createCharacterSkillsModernUseCase,
        DeleteCharacterSkillsUseCase deleteCharacterSkillsUseCase,
        UpdateCharacterSkillsUseCase updateCharacterSkillsUseCase, 
        GetCharacterSkillsModernByIdUseCase getCharacterSkillsModernByIdUseCase,
        GetCharacterSkillsByCharacterIdUseCase getCharacterSkillsByCharacterIdUseCase)
    {
        _createCharacterSkillsModernUseCase = createCharacterSkillsModernUseCase;
        _deleteCharacterSkillsUseCase = deleteCharacterSkillsUseCase;
        _updateCharacterSkillsUseCase = updateCharacterSkillsUseCase;
        _getCharacterSkillsModernByIdUseCase = getCharacterSkillsModernByIdUseCase;
        _getCharacterSkillsByCharacterIdUseCase = getCharacterSkillsByCharacterIdUseCase;
    }
    
    [HttpPost("{characterId}")]
    public async Task<IActionResult> CreateCharacterSkillsModern([FromRoute] Guid characterId, [FromBody] CreateCharacterSkillsModernRequestDTO dto)
    {
        await _createCharacterSkillsModernUseCase.CreateCharacterSkillsModern(characterId, dto);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCharacterSkillsModern(Guid id)
    {
        await _deleteCharacterSkillsUseCase.DeleteCharacterSkills(id);
        return Ok();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCharacterSkillsModernById(Guid id)
    {
        var result = await _getCharacterSkillsModernByIdUseCase.GetCharacterSkillsById(id);
        return Ok(result);
    }

    [HttpGet("character/{characterId}")]
    public async Task<IActionResult> GetCharacterSkillsByCharacterId(Guid characterId)
    {
        var result = await _getCharacterSkillsByCharacterIdUseCase.GetCharacterSkillsByCharacterId(characterId);
        return Ok(result);
    }

    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateCharacterSkillsModern(Guid id, [FromBody] UpdateCharacterSkillsModernRequestDTO dto)
    {
        var result = await _updateCharacterSkillsUseCase.UpdateCharacterSkills(id, dto);
        return Ok(result);
    }
}