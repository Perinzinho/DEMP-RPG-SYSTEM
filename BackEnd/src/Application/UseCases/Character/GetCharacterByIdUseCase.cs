using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class GetCharacterByIdUseCase
{
    private readonly ICharacterRepository _repository;

    public GetCharacterByIdUseCase(ICharacterRepository repository)
    {
        _repository = repository;
    }

    public async Task<GetCharacterDetailResponseDTO>GetCharacterById(Guid id)
    {
        var character = await _repository.GetCharacterById(id);

        if (character == null)
            throw new CharacterNotFoundException();
        
        return CharacterMapper.ToDetailResponse(character);
    }
}