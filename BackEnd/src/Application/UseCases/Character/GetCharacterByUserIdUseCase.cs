using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Exceptions.Character;

using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class GetCharacterByUserIdUseCase
{
    private readonly ICharacterRepository _repository;

    public GetCharacterByUserIdUseCase(ICharacterRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<GetCharacterSummaryResponse>> GetCharactersByUserId(Guid userId)
    {
        var characters = await _repository.GetCharactersByUserId(userId);

        if (characters == null)
            throw new CharacterNotFoundException();

        return characters.Select(CharacterMapper.ToSummaryResponse);
    }
}