using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterStats;

public class GetCharacterStatsByCharacterIdUseCase
{
    private readonly ICharacterStatsRepository _characterStatsRepository;
    
    public GetCharacterStatsByCharacterIdUseCase(ICharacterStatsRepository characterStatsRepository)
    {
        _characterStatsRepository = characterStatsRepository;
    }

    public async Task<GetCharacterStatsResponseDTO> GetCharacterStatsByCharacterId(Guid characterId)
    {
        var characterStats = await _characterStatsRepository.GetCharacterStatsByCharacterId(characterId);

        if (characterStats == null)
            throw new CharacterStatsNoFoundException();
        
        return CharacterStatsMapper.ToGetResponse(characterStats);
    }
}