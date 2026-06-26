namespace DEMP_RPG_API.Domain.Enums;

[Flags]//Representa que o ENUM é uma coleção de valores possíveis e possívelmente acumulativos
public enum CharacterConditionEnum
{
    None=0,
    TemporaryInsanity=1,
    IndefiniteSanity=2,
    MajorWound=4,
    Unconscious=8,
    Dying=16
}

/*O uso de [Flags] requer obrigatoriamente que você atribua os valores de cada enumerador de uma forma que cada um represente unicamente um bit.
 Para isso você deve usar números do resultado exponencial da base binária. Ou seja, use 2 elevado a X, onde X é a ordem do enumerador.

declaração correta, usando bit-shifting 
[Flags]
public enum Cor
{
    None     = 0,
    Vermelho = 1 << 0,
    Verde    = 2 << 1, 
    Azul     = 4 << 2,
    Amarelo  = 8 << 3
}
*/