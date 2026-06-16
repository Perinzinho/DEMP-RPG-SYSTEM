namespace DEMP_RPG_API.Domain.Exceptions.User;

public class EmailOrPasswordIncorrectException:Exception
{
    public EmailOrPasswordIncorrectException():base("Email or password is incorrect")
    {
    }
}