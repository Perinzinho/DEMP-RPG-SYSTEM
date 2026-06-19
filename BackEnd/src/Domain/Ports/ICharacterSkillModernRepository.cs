using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Domain.Ports;

public interface ICharacterSkillModernRepository
{
    Task<CharacterSkillsModernEntity> CreateCharacterSkillModern(CharacterSkillsModernEntity characterSkillModern);
    Task<CharacterSkillsModernEntity?> GetCharacterSkillModernById(Guid id);
    Task<CharacterSkillsModernEntity?> GetCharacterSkillModernByCharacterId(Guid characterId);//Pegar pelo personagem
    Task<CharacterSkillsModernEntity> UpdateCharacterSkillModern(CharacterSkillsModernEntity characterSkillModern);
    Task DeleteCharacterSkillModern(Guid id);
}