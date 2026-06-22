using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Application.DTOs.Response.CharacterStats;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Application.UseCases.CharacterStats;

public class UpdateCharacterStatsUseCase
{
    private readonly ICharacterStatsRepository _characterStatsRepository;
    
    public UpdateCharacterStatsUseCase(ICharacterStatsRepository characterStatsRepository)
    {
        _characterStatsRepository = characterStatsRepository;
    }

    public async Task<GetCharacterStatsResponseDTO> UpdateCharacterStats(Guid id,UpdateCharacterStatsRequestDTO dto)
    {
        var oldCharacterStats = await _characterStatsRepository.GetCharacterStatsById(id);

        if (oldCharacterStats == null)
            throw new CharacterStatsNoFoundException();

        oldCharacterStats.Update(
            dto.MaxAttributes, new AttributeSkillVO(dto.Strength), new AttributeSkillVO(dto.Dexterity), new AttributeSkillVO(dto.Intelligence), new AttributeSkillVO(dto.Size),
            new AttributeSkillVO(dto.Power), new AttributeSkillVO(dto.Appearance), new AttributeSkillVO(dto.Education), dto.HitPoints, dto.CurrentHp,
            dto.Luck, dto.Sanity, dto.CurrentSanity, dto.Move, dto.Build, new AttributeSkillVO(dto.Dodge),
            dto.DamageBonus, dto.TemporaryInsanity, dto.IndefiniteSanity,
            dto.MajorWound, dto.Unconscious, dto.Dying
        );
        var updated = await _characterStatsRepository.UpdateCharacterStats(oldCharacterStats);
        return CharacterStatsMapper.ToGetResponse(updated);
    }
}