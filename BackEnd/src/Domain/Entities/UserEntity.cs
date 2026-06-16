using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Domain.Entities;

public class UserEntity
{
    public Guid Id { get; private set; }
    public string Username { get; private set; }//ToDo-Add validation for UserName, min and max? characters
    public string Email { get; private set; }//ToDo-Add Value Object or validation for Email
    public string PasswordHash { get; private set; }//ToDo-Add Validation for Password, min and max characters
    public RoleEnum Role { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }
    
    public UserEntity(Guid id,string username, string passwordHash, RoleEnum role, string email)
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