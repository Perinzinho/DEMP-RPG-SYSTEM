using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.Character;
using DEMP_RPG_API.Application.DTOs.Request.CharacterSkillsModern;
using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;
using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class CreateCharacterFullUseCase
{
    private readonly ICharacterRepository _characterRepository;
    private readonly ICharacterStatsRepository _characterStatsRepository;
    private readonly ICharacterSkillModernRepository _characterSkillModernRepository;

    public CreateCharacterFullUseCase(ICharacterRepository characterRepository,
        ICharacterStatsRepository characterStatsRepository,
        ICharacterSkillModernRepository characterSkillModernRepository)
    {
        _characterRepository = characterRepository;
        _characterStatsRepository = characterStatsRepository;
        _characterSkillModernRepository = characterSkillModernRepository;
    }

    public async Task<CreateCharacterResponseDTO> CreateCharacter(CreateFullCharacterRequestDTO dto)
    {
        var character = new CharacterEntity(Guid.NewGuid(), dto.Character.UserId, dto.Character.RoomId,dto.Character.Name,dto.Character.Gender,dto.Character.Occupation,dto.Character.Residence,dto.Character.Age,dto.Character.Annotations,dto.Character.ItemIds);
        var characterStats = new CharacterStatsEntity(Guid.NewGuid(), character.Id, dto.Stats.MaxAttributes,
            new AttributeSkillVO(dto.Stats.Strength), new AttributeSkillVO(dto.Stats.Dexterity),
            new AttributeSkillVO(dto.Stats.Intelligence), new AttributeSkillVO(dto.Stats.Size), new AttributeSkillVO(dto.Stats.Power),
            new AttributeSkillVO(dto.Stats.Appearance), new AttributeSkillVO(dto.Stats.Education), dto.Stats.HitPoints, dto.Stats.CurrentHp, dto.Stats.Luck,
            dto.Stats.Sanity,dto.Stats.CurrentSanity,dto.Stats.Move,dto.Stats.Build,dto.Stats.DamageBonus);
        var characterSkills = CharacterSkillsModernMapper.ToEntity(dto.Skills,characterStats.Id, characterStats.Dexterity.Value, characterStats.Education.Value);
        
        await _characterRepository.CreateCharacter(character);
        await _characterStatsRepository.CreateCharacterStats(characterStats);
        await _characterSkillModernRepository.CreateCharacterSkillModern(characterSkills);
        
        return new CreateCharacterResponseDTO(character.Id);//Works, but still need Improvement
    }
}   