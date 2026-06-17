namespace DEMP_RPG_API.Domain.Exceptions.Character;

public class CharacterNotFoundException:Exception
{
    public CharacterNotFoundException():base(message:"Character not found"){}
}