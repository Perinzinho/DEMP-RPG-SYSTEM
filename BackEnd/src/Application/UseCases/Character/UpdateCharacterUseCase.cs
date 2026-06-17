using DEMP_RPG_API.Adapters.Mappers.User;
using DEMP_RPG_API.Application.DTOs.Request.Character;
using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class UpdateCharacterUseCase
{
    private readonly ICharacterRepository _repository;
    
    public UpdateCharacterUseCase(ICharacterRepository repository)
    {
        _repository = repository;
    }

    public async Task<GetCharacterDetailResponseDTO> UpdateCharacter(Guid id, UpdateCharacterRequestDTO dto)
    {
        var character = await _repository.GetCharacterById(id);
        if (character == null)
            throw new CharacterNotFoundException();

        character.Update(dto.Name, dto.Gender, dto.Occupation, dto.Residence, dto.Age, dto.Annotations, dto.ItemIds);

        var updated = await _repository.UpdateCharacter(character);

        return CharacterMapper.ToDetailResponse(updated);
    }
}