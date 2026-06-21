using DEMP_RPG_API.Domain.Exceptions.User;

namespace DEMP_RPG_API.Domain.ValueObjects.User;

public class EmailVO
{
    public string Value { get; private set; }
    
    public EmailVO(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new EmailIsNullOrWhiteSpaceException();

        if (!value.Contains("@"))
            throw new InvalidEmailException();
        Value = value;
    }
}