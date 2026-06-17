using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Domain.Ports;

public interface ICharacterRepository
{
    Task<CharacterEntity> CreateCharacter(CharacterEntity character);//Criar
    Task<CharacterEntity> GetCharacterById(Guid id);//Pegar por id
    Task<IEnumerable<CharacterEntity?>> GetCharactersByUserId(Guid userId);//Pegar por id do usuário
    Task<IEnumerable<CharacterEntity>> GetAllCharacters();//Pegar todos os personagens
    Task<CharacterEntity> UpdateCharacter(CharacterEntity character);//Patch
    Task DeleteCharacter(Guid id);//Deletar
    
}