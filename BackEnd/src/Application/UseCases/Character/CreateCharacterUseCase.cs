using DEMP_RPG_API.Application.DTOs.Request.Character;
using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Application.UseCases.Character;

public class CreateCharacterUseCase
{
    private readonly ICharacterRepository _characterRepository;
    
    public CreateCharacterUseCase(ICharacterRepository characterRepository)
    {
        _characterRepository = characterRepository;
    }

    public async Task<CreateCharacterResponseDTO> CreateCharacter(CreateCharacterRequestDTO dto)
    {
        var character = new CharacterEntity(Guid.NewGuid(), dto.UserId, dto.RoomId, dto.Name, dto.Gender, dto.Occupation, dto.Residence, dto.Age, dto.Annotations, dto.ItemIds);
    
        var created = await _characterRepository.CreateCharacter(character);
    
        return new CreateCharacterResponseDTO(created.Id);
    }
}