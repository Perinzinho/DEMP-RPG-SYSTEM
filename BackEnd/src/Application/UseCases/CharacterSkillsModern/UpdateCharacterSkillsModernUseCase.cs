using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Request.CharacterSkillsModern;
using DEMP_RPG_API.Application.DTOs.Response.CharacterSkillsModern;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterSkillsModern;

public class UpdateCharacterSkillsUseCase
{
    private readonly ICharacterSkillModernRepository _skillsRepository;

    public UpdateCharacterSkillsUseCase(ICharacterSkillModernRepository skillsRepository)
    {
        _skillsRepository = skillsRepository;
    }

    public async Task<GetCharacterSkillsModernResponseDTO> UpdateCharacterSkills(Guid id, UpdateCharacterSkillsModernRequestDTO dto)
    {
        var skills = await _skillsRepository.GetCharacterSkillModernById(id);
        if (skills == null)
            throw new CharacterSkillsNotFoundException();

        CharacterSkillsModernMapper.Update(skills, dto);

        var updated = await _skillsRepository.UpdateCharacterSkillModern(skills);

        return CharacterSkillsModernMapper.ToResponseDTO(updated);
    }
}