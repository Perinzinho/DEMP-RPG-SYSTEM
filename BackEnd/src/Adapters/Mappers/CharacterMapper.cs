using DEMP_RPG_API.Application.DTOs.Response.Character;
using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Adapters.Mappers.User;

public class CharacterMapper
{
    public static GetCharacterSummaryResponse ToSummaryResponse(CharacterEntity character)
    {
        return new GetCharacterSummaryResponse(character.Id,
            character.UserId,
            character.RoomId,
            character.Name,
            character.Occupation,
            character.Age);
    }

    public static GetCharacterDetailResponseDTO ToDetailResponse(CharacterEntity character)
    {
        return new GetCharacterDetailResponseDTO(character.Id,
            character.UserId,
            character.RoomId,
            character.Name,
            character.Gender,
            character.Occupation,
            character.Residence,
            character.Age,
            character.Annotations,
            character.ItemIds
        );
    }
    
}