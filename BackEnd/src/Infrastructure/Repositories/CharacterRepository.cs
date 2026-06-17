using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.EntityFrameworkCore;

namespace DEMP_RPG_API.Infrastructure.Repositories;

public class CharacterRepository:ICharacterRepository
{
    private readonly AppDbContext _context;
    public CharacterRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<CharacterEntity> CreateCharacter(CharacterEntity character)
    {
        await _context.Characters.AddAsync(character);
        await _context.SaveChangesAsync();
        return character;
    }

    public async Task<CharacterEntity> GetCharacterById(Guid id)
    {
        var result = await _context.Characters.FirstOrDefaultAsync(e=>e.Id == id);
        return result;
    }

    public async Task<IEnumerable<CharacterEntity>> GetAllCharacters()
    {
        var result = await _context.Characters.ToListAsync();
        return result;
    }

    public async Task<IEnumerable<CharacterEntity?>> GetCharactersByUserId(Guid userId)
    {
        var result = await _context.Characters.Where(e => e.UserId == userId).ToListAsync();//Retorna todos os usuários
        return result;
    }

    public async Task<CharacterEntity> UpdateCharacter(CharacterEntity character)//Patch
    {
        var oldChar = await _context.Characters.FindAsync(character.Id);
        if (oldChar == null)
            throw new CharacterNotFoundException();

        oldChar.Update(character.Name, character.Gender, character.Occupation, character.Residence, character.Age, character.Annotations, character.ItemIds);
        await _context.SaveChangesAsync();
        return oldChar;

    }

    public async Task DeleteCharacter(Guid id)
    {
        var character = await _context.Characters.FindAsync(id);
        if (character == null)
            throw new CharacterNotFoundException();
        _context.Characters.Remove(character);
        await _context.SaveChangesAsync();
    }
}