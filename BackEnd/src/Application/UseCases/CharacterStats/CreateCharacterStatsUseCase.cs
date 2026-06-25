using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.Character;
using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Entities;
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

    public async Task<GetCharacterStatsResponseDTO> CreateCharacterStats(CreateCharacterStatsRequestDTO dto)
    {
        var characterStats = new CharacterStatsEntity(Guid.NewGuid(), dto.CharacterId, dto.MaxAttributes,
            new AttributeSkillVO(dto.Strength), new AttributeSkillVO(dto.Dexterity), new AttributeSkillVO(dto.Intelligence), new AttributeSkillVO(dto.Size), new AttributeSkillVO(dto.Power),
            new AttributeSkillVO(dto.Appearance), new AttributeSkillVO(dto.Education), dto.HitPoints, dto.CurrentHp, dto.Luck,
            dto.Sanity,dto.CurrentSanity,dto.Move,dto.Build,dto.DamageBonus);
        
        var created = await _characterStatsRepository.CreateCharacterStats(characterStats);
        
        return CharacterStatsMapper.ToGetResponse(characterStats);
    }
}