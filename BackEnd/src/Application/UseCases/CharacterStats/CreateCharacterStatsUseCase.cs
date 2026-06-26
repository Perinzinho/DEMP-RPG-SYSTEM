using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.Character;
using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.Ports;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Application.UseCases.CharacterStats;

public class CreateCharacterStatsUseCase
{
    private readonly ICharacterStatsRepository _characterStatsRepository;
    
    public CreateCharacterStatsUseCase(ICharacterStatsRepository characterStatsRepository)
    {
        _characterStatsRepository = characterStatsRepository;
    }

    public async Task<GetCharacterStatsResponseDTO> CreateCharacterStats(Guid characterId,CreateCharacterStatsRequestDTO dto)
    {
        var characterStats = CharacterStatsMapper.ToEntity(characterId, dto);
        
        await _characterStatsRepository.CreateCharacterStats(characterStats);
        
        return CharacterStatsMapper.ToGetResponse(characterStats);
    }
}