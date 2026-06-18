namespace DEMP_RPG_API.Domain.Exceptions.Room;

public class RoomNotFoundException:Exception
{
    public RoomNotFoundException():base(message:"Room Not Found"){}
}