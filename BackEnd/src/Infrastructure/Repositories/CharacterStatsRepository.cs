using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.EntityFrameworkCore;

namespace DEMP_RPG_API.Infrastructure.Repositories;

public class CharacterStatsRepository:ICharacterStatsRepository
{
    private readonly AppDbContext _context;
    
    public CharacterStatsRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<CharacterStatsEntity> CreateCharacterStats(CharacterStatsEntity characterStats)
    {
        var result = await _context.CharacterStats.AddAsync(characterStats);
        await _context.SaveChangesAsync();
        return result.Entity;
    }

    public async Task<CharacterStatsEntity?> GetCharacterStatsById(Guid id)
    {
        var result = await _context.CharacterStats.FirstOrDefaultAsync(characterStats => characterStats.Id == id);
        return result;
    }

    public async Task<CharacterStatsEntity?> GetCharacterStatsByCharacterId(Guid characterId)
    {
       var result = await _context.CharacterStats.FirstOrDefaultAsync(characterStats => characterStats.CharacterId == characterId);
       return result;
    }

    public async Task<CharacterStatsEntity> UpdateCharacterStats(CharacterStatsEntity characterStats)
    {
        var oldchar = await _context.CharacterStats.FindAsync(characterStats.Id);

        if (oldchar == null)
            throw new CharacterStatsNoFoundException();

        oldchar.Update(characterStats.MaxAttributes, characterStats.Strength, characterStats.Dexterity,
            characterStats.Intelligence, characterStats.Size, characterStats.Power,
            characterStats.Appearance, characterStats.Education, characterStats.HitPoints, characterStats.CurrentHp,
            characterStats.Luck, characterStats.Sanity, characterStats.CurrentSanity,
            characterStats.Move, characterStats.Build, characterStats.DamageBonus,
            characterStats.TemporaryInsanity, characterStats.IndefiniteSanity, characterStats.MajorWound,
            characterStats.Unconscious, characterStats.Dying);
        await _context.SaveChangesAsync();
        return oldchar;
    }

    public async Task DeleteCharacterStats(Guid id)
    {
        var result = await _context.CharacterStats.FindAsync(id);
        
        if(result == null)
            throw new CharacterNotFoundException();
        
        _context.CharacterStats.Remove(result);
        await _context.SaveChangesAsync();
    }


}