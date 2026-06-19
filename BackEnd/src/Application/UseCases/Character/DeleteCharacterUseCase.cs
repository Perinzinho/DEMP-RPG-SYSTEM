using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class DeleteCharacterUseCase
{
    private readonly ICharacterRepository _repository;
    
    public DeleteCharacterUseCase(ICharacterRepository repository)
    {
        _repository = repository;
    }

    public async Task DeleteCharacter(Guid id)
    {
        var character= await  _repository.GetCharacterById(id);

        if (character == null)
            throw new CharacterNotFoundException();
        
        await _repository.DeleteCharacter(id);
    }
}