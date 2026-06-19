using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.CharacterSkillsModern;
using DEMP_RPG_API.Application.DTOs.Response.CharacterSkillsModern;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterSkillsModern;

public class CreateCharacterSkillsModernUseCase
{
    private readonly ICharacterSkillModernRepository _skillRepository;
    private readonly ICharacterStatsRepository _statsRepository;

    public CreateCharacterSkillsModernUseCase(
        ICharacterSkillModernRepository skillRepository,
        ICharacterStatsRepository statsRepository)
    {
        _skillRepository = skillRepository;
        _statsRepository = statsRepository;
    }

    public async Task<GetCharacterSkillsModernResponseDTO> CreateCharacterSkillsModern(
        CreateCharacterSkillsModernRequestDTO dto)
    {
        var stats = await _statsRepository.GetCharacterStatsByCharacterId(dto.CharacterId);
        if (stats == null)
            throw new CharacterStatsNoFoundException();

        var skills = CharacterSkillsModernMapper.ToEntity(dto, stats.Id, stats.Dexterity, stats.Education);

        var created = await _skillRepository.CreateCharacterSkillModern(skills);
        return CharacterSkillsModernMapper.ToResponseDTO(created);
    }
}