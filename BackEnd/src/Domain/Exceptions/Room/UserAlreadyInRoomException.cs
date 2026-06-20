namespace DEMP_RPG_API.Domain.Exceptions.Room;

public class UserAlreadyInRoomException:Exception
{
    public UserAlreadyInRoomException() : base(message:"User Already in Room") { }
}