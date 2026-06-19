using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.Character;
using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterStats;

public class CreateCharacterStatsUseCase
{
    private readonly ICharacterStatsRepository _characterStatsRepository;
    
    public CreateCharacterStatsUseCase(ICharacterStatsRepository characterStatsRepository)
    {
        _characterStatsRepository = characterStatsRepository;
    }

    public async Task<GetCharacterStatsResponseDTO> CreateCharacterStats(CreateCharacterStatsRequestDTO dto)
    {
        var characterStats = new CharacterStatsEntity(Guid.NewGuid(), dto.CharacterId, dto.MaxAttributes,
            dto.Strength, dto.Dexterity, dto.Intelligence, dto.Size, dto.Power,
            dto.Appearance, dto.Education, dto.HitPoints, dto.CurrentHp, dto.Luck,
            dto.Sanity,dto.CurrentSanity,dto.Move,dto.Build,dto.Dodge,dto.DamageBonus);

        return CharacterStatsMapper.ToGetResponse(characterStats);
    }
}