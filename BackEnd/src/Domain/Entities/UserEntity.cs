using DEMP_RPG_API.Domain.Enums;
using DEMP_RPG_API.Domain.ValueObjects.User;

namespace DEMP_RPG_API.Domain.Entities;

public class UserEntity
{
    //ToDo-UserProfile
    public Guid Id { get; private set; }
    public string Username { get; private set; }//ToDo-Add validation for UserName, min and max? characters
    public EmailVO Email { get; private set; }
    public PasswordVO PasswordHash { get; private set; }//ToDo-Add Validation for Password, min and max characters
    public RoleEnum Role { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }
    
    public UserEntity(Guid id,string username, PasswordVO passwordHash, RoleEnum role, EmailVO email)
    {
        Id = id;
        Username = username;
        Email = email;
        PasswordHash = passwordHash;
        Role = role;
        CreatedAt = DateTime.UtcNow;
        UpdatedAt = null;
    }
}