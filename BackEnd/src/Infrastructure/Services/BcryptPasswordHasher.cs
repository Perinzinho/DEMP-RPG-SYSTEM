using DEMP_RPG_API.Domain.Ports;

namespace DEMP_RPG_API.Infrastructure;

public class BcryptPasswordHasher:IPasswordHasher
{

        //Encripta a senha
        public string Hash(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
        
        
        //Compara a senha com a senha criptografada
        public bool Verify(string password, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
    
}