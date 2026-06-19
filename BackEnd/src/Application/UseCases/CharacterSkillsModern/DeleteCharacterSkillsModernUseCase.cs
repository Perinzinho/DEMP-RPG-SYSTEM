using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterSkillsModern;

public class DeleteCharacterSkillsUseCase
{
    private readonly ICharacterSkillModernRepository _skillsRepository;

    public DeleteCharacterSkillsUseCase(ICharacterSkillModernRepository skillsRepository)
    {
        _skillsRepository = skillsRepository;
    }

    public async Task DeleteCharacterSkills(Guid id)
    {
        await _skillsRepository.DeleteCharacterSkillModern(id);
    }
}