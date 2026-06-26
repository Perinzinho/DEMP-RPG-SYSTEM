namespace DEMP_RPG_API.Domain.ValueObjects.Character;

public class PoolStatVo:ValueObject
{
    private PoolStatVo() { }
    public int Max { get; private set; }
    public int Current { get; private set; }
    

    public PoolStatVo(int max, int current)
    {
        Max = max;
        Current = current;
        
    }

    protected override IEnumerable<object> GetEqualityComponents()
    {
        yield return Max;
        yield return Current;
    }
}