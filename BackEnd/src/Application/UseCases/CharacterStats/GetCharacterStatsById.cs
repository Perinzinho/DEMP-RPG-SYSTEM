using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterStats;

public class GetCharacterStatsById
{
    private readonly ICharacterStatsRepository _characterStatsRepository;
    
    public GetCharacterStatsById(ICharacterStatsRepository characterStatsRepository)
    {
        _characterStatsRepository = characterStatsRepository;
    }

    public async Task<GetCharacterStatsResponseDTO> GetCharacterStats(Guid id)
    {
        var characterStats = await _characterStatsRepository.GetCharacterStatsById(id);

        if (characterStats == null)
            throw new CharacterStatsNoFoundException();
        
        return CharacterStatsMapper.ToGetResponse(characterStats);
    }
}