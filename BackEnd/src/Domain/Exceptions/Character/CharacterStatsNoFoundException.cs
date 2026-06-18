namespace DEMP_RPG_API.Domain.Exceptions.Character;

public class CharacterStatsNoFoundException:Exception
{
    public CharacterStatsNoFoundException():base(message:"CharacterStats Not Found"){}
}