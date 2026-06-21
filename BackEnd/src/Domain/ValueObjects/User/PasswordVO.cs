using DEMP_RPG_API.Domain.Exceptions.User;

namespace DEMP_RPG_API.Domain.ValueObjects.User;

public class PasswordVO
{
    public string Value { get; private set; }

    public PasswordVO(string value)
    {
        if (value.Length < 6)
            throw new PasswordMustContainAtLeast6Exception();
        
        //Note-Should Password have banned characters?
        
        Value = value;
    }
}