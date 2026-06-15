namespace DEMP_RPG_API.Domain.Exceptions.User;

public class EmailAlreadyExistsException:Exception
{
    public EmailAlreadyExistsException():base("Email already exists"){}
}