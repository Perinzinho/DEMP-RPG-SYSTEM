using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DEMP_RPG_API.Infrastructure.Services;

public class JwtTokenService : IJwtTokenService
{
    public string GenerateToken(UserEntity user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),//Guarda o Id do usuário
            new Claim(ClaimTypes.Email, user.Email.Value),//Guarda email
            new Claim(ClaimTypes.Role, user.Role.ToString())//Guarda role
        };

        var key = new SymmetricSecurityKey(//Chave secreta do token
            Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET") ?? "Default"));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);//Algoritmo de assinatura

        var token = new JwtSecurityToken(//Monta o token
            issuer: Environment.GetEnvironmentVariable("JWT_TOKEN_ISSUER"),//Quem emitiu o token
            audience: Environment.GetEnvironmentVariable("JWT_TOKEN_AUDIENCE"),//quem pode consumir o token
            claims: claims,//informações do usuário
            expires: DateTime.UtcNow.AddHours(8),//Tempo que ele expira- 8 horas- ToDo-ver se precisa alterar o tempo
            signingCredentials: creds //Assinatura que valida o token
        );

        return new JwtSecurityTokenHandler().WriteToken(token);//Transforma numa string
    }
}