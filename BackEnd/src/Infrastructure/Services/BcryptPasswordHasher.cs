using DEMP_RPG_API.Domain.Ports;
using DEMP_RPG_API.Domain.ValueObjects.User;

namespace DEMP_RPG_API.Infrastructure;

public class BcryptPasswordHasher:IPasswordHasher
{

        //Encripta a senha
        public string Hash(PasswordVO password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password.Value);
        }
        
        
        //Compara a senha com a senha criptografada
        public bool Verify(PasswordVO password, PasswordVO hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password.Value, hashedPassword.Value);
        }
    
}