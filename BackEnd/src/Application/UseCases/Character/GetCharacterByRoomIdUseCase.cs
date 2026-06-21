using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class GetCharacterByRoomIdUseCase
{
    private readonly ICharacterRepository _repository;
    
    public GetCharacterByRoomIdUseCase(ICharacterRepository repository){
        _repository = repository;
        
    }

    public async Task<IEnumerable<GetCharacterSummaryResponse>> GetCharacterByRoomId(Guid roomId)
    {
        var character = (await _repository.GetAllCharactersByRoomId(roomId)).ToList();

        return character.Select(CharacterMapper.ToSummaryResponse);

    }
}