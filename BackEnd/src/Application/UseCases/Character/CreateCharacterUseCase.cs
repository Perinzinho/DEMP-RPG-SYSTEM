using DEMP_RPG_API.Application.DTOs.Request.Character;
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

    public async Task CreateCharacter(CreateCharacterRequestDTO dto)
    {
        var character = new CharacterEntity(Guid.NewGuid(), dto.UserId, dto.RoomId, dto.Name, dto.Gender, dto.Occupation, dto.Residence,dto.Age,dto.Annotations, dto.ItemIds);
        
        await _characterRepository.CreateCharacter(character);
    }
}