using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;

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
        throw new NotImplementedException();
    }

    public async Task<CharacterEntity> GetCharacterById(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<CharacterEntity>> GetAllCharacters()
    {
        throw new NotImplementedException();
    }

    public async Task<CharacterEntity?> GetCharacterByUserId(Guid userId)
    {
        throw new NotImplementedException();
    }

    public async Task<CharacterEntity> UpdateCharacter(CharacterEntity character)//Patch
    {
        throw new NotImplementedException();
    }

    public async Task DeleteCharacter(Guid id)
    {
        throw new NotImplementedException();
    }
}