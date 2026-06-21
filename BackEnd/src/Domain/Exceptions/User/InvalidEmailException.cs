namespace DEMP_RPG_API.Domain.Exceptions.User;

public class InvalidEmailException:Exception
{
    public InvalidEmailException():base("Please provide a valid email"){}
}