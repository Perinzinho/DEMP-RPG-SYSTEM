using DEMP_RPG_API.Domain.Entities;

namespace DEMP_RPG_API.Domain.Ports;

public interface ICharacterStatsRepository
{
    Task<CharacterStatsEntity> CreateCharacterStats(CharacterStatsEntity characterStats);
    Task<CharacterStatsEntity?> GetCharacterStatsById(Guid characterId);
    Task<CharacterStatsEntity?> GetCharacterStatsByCharacterId(Guid characterId);
    Task<CharacterStatsEntity> UpdateCharacterStats(CharacterStatsEntity characterStats);
    Task DeleteCharacterStats(Guid characterId);
}