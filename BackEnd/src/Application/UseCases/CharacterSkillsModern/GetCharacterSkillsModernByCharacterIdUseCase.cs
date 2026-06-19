using DEMP_RPG_API.Adapters.Mappers;
using DEMP_RPG_API.Application.DTOs.Response.CharacterSkillsModern;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterSkillsModern;

public class GetCharacterSkillsByCharacterIdUseCase
{
    private readonly ICharacterSkillModernRepository _skillsRepository;

    public GetCharacterSkillsByCharacterIdUseCase(ICharacterSkillModernRepository skillsRepository)
    {
        _skillsRepository = skillsRepository;
    }

    public async Task<GetCharacterSkillsModernResponseDTO> GetCharacterSkillsByCharacterId(Guid characterId)
    {
        var skills = await _skillsRepository.GetCharacterSkillModernByCharacterId(characterId);
        if (skills == null)
            throw new CharacterSkillsNotFoundException();

        return CharacterSkillsModernMapper.ToResponseDTO(skills);
    }
}