using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.EntityFrameworkCore;

namespace DEMP_RPG_API.Infrastructure.Repositories;

public class UserRepository: IUserRepository
{
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<UserEntity> Create(UserEntity user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task<UserEntity?> GetUserByEmail(string email)
    {
        var result = await _context.Users.FirstOrDefaultAsync(e=>e.Email == email);
        return result;
    }

    public async Task<UserEntity?> GetUserById(Guid id)
    {
        var result = await _context.Users.FirstOrDefaultAsync(e => e.Id == id);
        return result;
    }

    public async Task<IEnumerable<UserEntity?>> GetAllUsers()
    {
        var result = await _context.Users.ToListAsync();
        return result;
    }
}