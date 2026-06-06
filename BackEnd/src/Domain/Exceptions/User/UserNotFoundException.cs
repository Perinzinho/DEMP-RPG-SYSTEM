namespace DEMP_RPG_API.Domain.Exceptions.User;

public class UserNotFoundException:Exception
{
    public UserNotFoundException()
        :base("User Not Found"){}
}