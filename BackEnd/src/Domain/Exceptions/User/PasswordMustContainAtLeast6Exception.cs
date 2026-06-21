namespace DEMP_RPG_API.Domain.Exceptions.User;

public class PasswordMustContainAtLeast6Exception:Exception
{
    public PasswordMustContainAtLeast6Exception():base("Password must contain at least 6 characters"){}
}