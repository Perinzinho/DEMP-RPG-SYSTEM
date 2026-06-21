using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.ValueObjects.User;

namespace DEMP_RPG_API.Domain.Ports;

public interface IUserRepository
{
    Task<UserEntity> Create(UserEntity user);
    Task<IEnumerable<UserEntity>> GetAllUsers();
    Task<UserEntity?> GetUserById(Guid id);
    Task<UserEntity?> GetUserByEmail(string email);
}