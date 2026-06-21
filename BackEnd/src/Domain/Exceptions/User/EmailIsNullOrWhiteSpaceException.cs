namespace DEMP_RPG_API.Domain.Exceptions.User;

public class EmailIsNullOrWhiteSpaceException:Exception
{
    public EmailIsNullOrWhiteSpaceException():base("Email can't be null or empty"){}
}