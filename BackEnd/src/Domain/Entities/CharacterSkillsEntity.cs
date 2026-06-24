namespace DEMP_RPG_API.Domain.Entities;

public class CharacterSkillsEntity
{
    public Guid CharacterId { get; private set; }
    public int Acrobacy { get; private set; }
    public int Arts { get; private set; }
    public int Athletism { get; private set; }
    public int Actuality { get; private set; }
    public int Science { get; private set; }
    public int Crime { get; private set; }
    public int Diplomacy { get; private set; }
    public int Deception { get; private set; }
    public int Fortitude { get; private set; }
    public int Stealth { get; private set; }
    public int Initiative { get; private set; }
    public int Intimidation { get; private set; }
    public int Intuition { get; private set; }
    public int Investigation { get; private set; }
    public int Fight { get; private set; }
    public int Medicine { get; private set; }
    public int Occultism { get; private set; }
    public int Percepetion { get; private set; }
    public int Pilot { get; private set; }
    public int Aim { get; private set; }
    public int Profession { get; private set; }
    public string ProfessionSpecialization { get; private set; }
    public int Reflex { get; private set; }
    public int Religion { get; private set; }
    public int Survival { get;private set; }
    public int Tatic { get; private set; }
    public int Technology { get;private set; }
    public int Will { get; private set; }
    
    public CharacterSkillsEntity(Guid  characterId, int acrobacy, int arts, int athletism, int actuality, int science, int crime, int diplomacy, int deception
        ,int fortitude, int stealth, int initiative, int intimidation, int intuition, int investigation, int fight, int medicine, int occultism, int perception
        ,int pilot, int aim, int profession, string professionSpecialization, int reflex, int religion, int survival, int tatic, int technology, int will)
    {
        CharacterId = characterId;
        Acrobacy = acrobacy;
        Arts = arts;
        Athletism = athletism;
        Actuality = actuality;
        Science = science;
        Crime = crime;
        Diplomacy = diplomacy;
        Deception = deception;
        Fortitude = fortitude;
        Stealth = stealth;
        Initiative = initiative;
        Intimidation = intimidation;
        Intuition = intuition;
        Investigation = investigation;
        Fight = fight;
        Medicine = medicine;
        Occultism = occultism;
        Percepetion = perception;
        Pilot = pilot;
        Aim = aim;
        Profession = profession;
        ProfessionSpecialization = professionSpecialization;
        Reflex = reflex;
        Religion = religion;
        Survival = survival;
        Tatic = tatic;
        Technology = technology;
        Will = will;
    }
}