using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.CharacterStats;

public class DeleteCharacterStatsUseCase
{
    private readonly ICharacterStatsRepository _repository;
    
    public DeleteCharacterStatsUseCase(ICharacterStatsRepository repository)
    {
        _repository = repository;
    }

    public async Task DeleteCharacterStats(Guid id)
    {
        var characterStats= await  _repository.GetCharacterStatsById(id);

        if (characterStats != null)
            throw new CharacterStatsNoFoundException();
        
        await _repository.DeleteCharacterStats(id);
    }
}