using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.EntityFrameworkCore;

namespace DEMP_RPG_API.Infrastructure.Repositories;

public class CharacterSkillModernRepository:ICharacterSkillModernRepository
{
    private readonly AppDbContext _context;
    
    public CharacterSkillModernRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<CharacterSkillsModernEntity> CreateCharacterSkillModern(CharacterSkillsModernEntity characterSkillModern)
    {
        await _context.CharacterSkillsModern.AddAsync(characterSkillModern);
        await _context.SaveChangesAsync();
        return characterSkillModern;
    }

    public async Task<CharacterSkillsModernEntity?> GetCharacterSkillModernById(Guid id)
    {
        var result = await _context.CharacterSkillsModern.FirstOrDefaultAsync(c => c.Id == id);
        return result;
    }

    public async Task<CharacterSkillsModernEntity?> GetCharacterSkillModernByCharacterId(Guid characterId)
    {
        var result = await _context.CharacterSkillsModern.FirstOrDefaultAsync(c => c.CharacterId == characterId);
        return result;
    }

    public async Task<CharacterSkillsModernEntity> UpdateCharacterSkillModern(CharacterSkillsModernEntity skills)
    {
        _context.CharacterSkillsModern.Update(skills);
        await _context.SaveChangesAsync();
        return skills;
        
    }

    public async Task DeleteCharacterSkillModern(Guid id)
    {
        var skills = await _context.CharacterSkillsModern.FindAsync(id);
        if (skills == null)
            throw new CharacterSkillsNotFoundException();
        
        _context.CharacterSkillsModern.Remove(skills);
        await _context.SaveChangesAsync();
    }
}