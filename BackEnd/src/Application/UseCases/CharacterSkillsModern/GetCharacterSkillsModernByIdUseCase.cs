using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.CharacterSkillsModern;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterSkillsModern;

public class GetCharacterSkillsModernByIdUseCase
{
    private readonly ICharacterSkillModernRepository _skillsRepository;

    public GetCharacterSkillsModernByIdUseCase(ICharacterSkillModernRepository skillsRepository)
    {
        _skillsRepository = skillsRepository;
    }

    public async Task<GetCharacterSkillsModernResponseDTO> GetCharacterSkillsById(Guid id)
    {
        var skills = await _skillsRepository.GetCharacterSkillModernById(id);
        if (skills == null)
            throw new CharacterSkillsNotFoundException();

        return CharacterSkillsModernMapper.ToResponse(skills);
    }
}