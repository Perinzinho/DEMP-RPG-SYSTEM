using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class GetAllCharactersUseCase
{
    private readonly ICharacterRepository _characterRepository;

    public GetAllCharactersUseCase(ICharacterRepository characterRepository)
    {
        _characterRepository = characterRepository;
    }

    public async Task<IEnumerable<GetCharacterSummaryResponse>> GetAllCharacters()
    {
        var characters= (await _characterRepository.GetAllCharacters()).ToList();

        if (!characters.Any())
            throw new CharacterNotFoundException();

        return characters.Select(CharacterMapper.ToSummaryResponse);
    }
}