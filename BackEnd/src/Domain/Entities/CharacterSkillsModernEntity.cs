using DEMP_RPG_API.Domain.ValueObjects.Character;

namespace DEMP_RPG_API.Domain.Entities;

public class CharacterSkillsModernEntity
{
    public Guid Id { get; private set; }
    public Guid CharacterId { get; private set; }
    public Guid CharacterStatsId { get; private set; }
    public AttributeSkillVO Accounting { get; private set; }
    public AttributeSkillVO Anthropology { get; private set; }
    public AttributeSkillVO Appraise { get; private set; }
    public AttributeSkillVO Archaelogy { get; private set; }
    public string ArtAndCraftSpecialization { get; private set; }
    public AttributeSkillVO ArtCraft { get; private set; }
    public AttributeSkillVO Charm { get; private set; }
    public AttributeSkillVO Climb { get; private set; }
    public AttributeSkillVO ComputerUse {get; private set;}
    public AttributeSkillVO CreditRating { get; private set; }
    public AttributeSkillVO CthulhuMythos { get; private set; }
    public AttributeSkillVO Disguise { get; private set; }
    public AttributeSkillVO Dodge { get; private set; }//Half DEX
    public AttributeSkillVO DriveAuto { get; private set; }
    public AttributeSkillVO EletricRepair { get; private set; }
    public AttributeSkillVO Eletronics { get; private set; }
    public AttributeSkillVO FastTalk { get; private set; }
    public AttributeSkillVO FightingAxe { get; private set; }
    public AttributeSkillVO FightingBrawl { get; private set; }
    public AttributeSkillVO FightingChainsaw { get; private set; }
    public AttributeSkillVO FightingFlail { get; private set; }
    public AttributeSkillVO FightingGarrote { get; private set; }
    public AttributeSkillVO FightingSpear { get; private set; }
    public AttributeSkillVO FightingSword { get; private set; }
    public AttributeSkillVO FightingWhip { get; private set; }
    public AttributeSkillVO FightingBow { get; private set; }
    public AttributeSkillVO HandGun { get; private set; }
    public AttributeSkillVO HeavyWeapons { get; private set; }
    public AttributeSkillVO Flamethrower { get; private set; }
    public AttributeSkillVO MachineGun { get; private set; }
    public AttributeSkillVO RifleShotgun { get; private set; }
    public AttributeSkillVO SubmachineGun  { get; private set; }
    public AttributeSkillVO FirstAid {get; private set;}
    public AttributeSkillVO History { get; private set; }
    public AttributeSkillVO Intimidate { get; private set; }
    public AttributeSkillVO Jump { get; private set; }
    public AttributeSkillVO LanguageOtherValue{get; private set;}
    public string LanguageOtherSpecialization {get; private set;}
    public AttributeSkillVO LanguageOwn { get; private set; } //==EDU
    public AttributeSkillVO Law { get; private set; }
    public AttributeSkillVO LibraryUse { get; private set; }
    public AttributeSkillVO Listen { get; private set; }
    public AttributeSkillVO LockSmith { get; private set; }
    public AttributeSkillVO MechanicalRepair { get; private set; }
    public AttributeSkillVO Medicine { get; private set; }
    public AttributeSkillVO NaturalWorld { get; private set; }
    public AttributeSkillVO Navigate { get; private set; }
    public AttributeSkillVO Occult {get; private set;}
    public AttributeSkillVO OperateHeavyMachinery { get; private set; }
    public AttributeSkillVO Persuade { get; private set; }
    public AttributeSkillVO PilotAirCraft { get; private set; }
    public AttributeSkillVO Psychoanalysis { get; private set; }
    public AttributeSkillVO Psychology { get; private set; }
    public AttributeSkillVO Ride { get; private set; }
    public AttributeSkillVO Astronomy { get; private set; }
    public AttributeSkillVO Biology { get; private set; }
    public AttributeSkillVO Botany { get; private set; }
    public AttributeSkillVO Chemistry { get; private set; }
    public AttributeSkillVO Cryptography { get; private set; }
    public AttributeSkillVO Engineering { get; private set; }
    public AttributeSkillVO Forensics { get; private set; }
    public AttributeSkillVO Geology { get; private set; }
    public AttributeSkillVO Mathematics { get; private set; }
    public AttributeSkillVO Meteorology { get; private set; }
    public AttributeSkillVO Pharmacy { get; private set; }
    public AttributeSkillVO Physics { get; private set; }
    public AttributeSkillVO Zoology  { get; private set; }
    public AttributeSkillVO SleightOfHand { get; private set; }
    public AttributeSkillVO SpotHidden { get; private set; }
    public AttributeSkillVO Stealth { get; private set; }
    public AttributeSkillVO Survival { get; private set; }
    public string SurvivalSpecialization {get; private set;}
    public AttributeSkillVO Swim { get; private set; }
    public AttributeSkillVO Throw { get; private set; }
    public AttributeSkillVO Track { get; private set; }

        public CharacterSkillsModernEntity(
        Guid id, Guid characterId, Guid characterStatsId,
        AttributeSkillVO accounting, AttributeSkillVO anthropology, AttributeSkillVO appraise, AttributeSkillVO archaelogy,
        string artAndCraftSpecialization, AttributeSkillVO artCraft, AttributeSkillVO charm, AttributeSkillVO climb,
        AttributeSkillVO computerUse, AttributeSkillVO creditRating, AttributeSkillVO cthulhuMythos, AttributeSkillVO disguise,
        AttributeSkillVO dodge, AttributeSkillVO driveAuto, AttributeSkillVO eletricRepair, AttributeSkillVO eletronics,
        AttributeSkillVO fastTalk, AttributeSkillVO fightingAxe, AttributeSkillVO fightingBrawl, AttributeSkillVO fightingChainsaw,
        AttributeSkillVO fightingFlail, AttributeSkillVO fightingGarrote, AttributeSkillVO fightingSpear, AttributeSkillVO fightingSword,
        AttributeSkillVO fightingWhip, AttributeSkillVO fightingBow, AttributeSkillVO handGun, AttributeSkillVO heavyWeapons,
        AttributeSkillVO flamethrower, AttributeSkillVO machineGun, AttributeSkillVO rifleShotgun, AttributeSkillVO submachineGun,
        AttributeSkillVO firstAid, AttributeSkillVO history, AttributeSkillVO intimidate, AttributeSkillVO jump,
        AttributeSkillVO languageOtherValue, string languageOtherSpecialization, AttributeSkillVO languageOwn,
        AttributeSkillVO law, AttributeSkillVO libraryUse, AttributeSkillVO listen, AttributeSkillVO lockSmith,
        AttributeSkillVO mechanicalRepair, AttributeSkillVO medicine, AttributeSkillVO naturalWorld, AttributeSkillVO navigate,
        AttributeSkillVO occult, AttributeSkillVO operateHeavyMachinery, AttributeSkillVO persuade, AttributeSkillVO pilotAirCraft,
        AttributeSkillVO psychoanalysis, AttributeSkillVO psychology, AttributeSkillVO ride, AttributeSkillVO astronomy,
        AttributeSkillVO biology, AttributeSkillVO botany, AttributeSkillVO chemistry, AttributeSkillVO cryptography,
        AttributeSkillVO engineering, AttributeSkillVO forensics, AttributeSkillVO geology, AttributeSkillVO mathematics,
        AttributeSkillVO meteorology, AttributeSkillVO pharmacy, AttributeSkillVO physics, AttributeSkillVO zoology, AttributeSkillVO sleightOfHand, AttributeSkillVO spotHidden,
        AttributeSkillVO stealth, AttributeSkillVO survival, string survivalSpecialization, AttributeSkillVO swim,
        AttributeSkillVO @throw, AttributeSkillVO track)
    {
        Id = id;
        CharacterId = characterId;
        CharacterStatsId = characterStatsId;
        Accounting = accounting;
        Anthropology = anthropology;
        Appraise = appraise;
        Archaelogy = archaelogy;
        ArtAndCraftSpecialization = artAndCraftSpecialization;
        ArtCraft = artCraft;
        Charm = charm;
        Climb = climb;
        ComputerUse = computerUse;
        CreditRating = creditRating;
        CthulhuMythos = cthulhuMythos;
        Disguise = disguise;
        Dodge = dodge;
        DriveAuto = driveAuto;
        EletricRepair = eletricRepair;
        Eletronics = eletronics;
        FastTalk = fastTalk;
        FightingAxe = fightingAxe;
        FightingBrawl = fightingBrawl;
        FightingChainsaw = fightingChainsaw;
        FightingFlail = fightingFlail;
        FightingGarrote = fightingGarrote;
        FightingSpear = fightingSpear;
        FightingSword = fightingSword;
        FightingWhip = fightingWhip;
        FightingBow = fightingBow;
        HandGun = handGun;
        HeavyWeapons = heavyWeapons;
        Flamethrower = flamethrower;
        MachineGun = machineGun;
        RifleShotgun = rifleShotgun;
        SubmachineGun = submachineGun;
        FirstAid = firstAid;
        History = history;
        Intimidate = intimidate;
        Jump = jump;
        LanguageOtherValue = languageOtherValue;
        LanguageOtherSpecialization = languageOtherSpecialization;
        LanguageOwn = languageOwn;
        Law = law;
        LibraryUse = libraryUse;
        Listen = listen;
        LockSmith = lockSmith;
        MechanicalRepair = mechanicalRepair;
        Medicine = medicine;
        NaturalWorld = naturalWorld;
        Navigate = navigate;
        Occult = occult;
        OperateHeavyMachinery = operateHeavyMachinery;
        Persuade = persuade;
        PilotAirCraft = pilotAirCraft;
        Psychoanalysis = psychoanalysis;
        Psychology = psychology;
        Ride = ride;
        Astronomy = astronomy;
        Biology = biology;
        Botany = botany;
        Chemistry = chemistry;
        Cryptography = cryptography;
        Engineering = engineering;
        Forensics = forensics;
        Geology = geology;
        Mathematics = mathematics;
        Meteorology = meteorology;
        Pharmacy = pharmacy;
        Physics = physics;
        Zoology = zoology;
        SleightOfHand = sleightOfHand;
        SpotHidden = spotHidden;
        Stealth = stealth;
        Survival = survival;
        SurvivalSpecialization = survivalSpecialization;
        Swim = swim;
        Throw = @throw;
        Track = track;
    }

    // Factory Method — usado pela aplicação para CRIAR um personagem novo
    public static CharacterSkillsModernEntity Create(
        Guid characterId, Guid characterStatsId, AttributeSkillVO dexterity, AttributeSkillVO education,
        AttributeSkillVO? accounting = null, AttributeSkillVO? anthropology = null, AttributeSkillVO? appraise = null, AttributeSkillVO? archaelogy = null,
        string artAndCraftSpecialization = "", AttributeSkillVO? artCraft = null, AttributeSkillVO? charm = null, AttributeSkillVO? climb = null,
        AttributeSkillVO? computerUse = null, AttributeSkillVO? creditRating = null, AttributeSkillVO? cthulhuMythos = null, AttributeSkillVO? disguise = null,
        AttributeSkillVO? dodge = null, AttributeSkillVO? driveAuto = null, AttributeSkillVO? eletricRepair = null, AttributeSkillVO? eletronics = null,
        AttributeSkillVO? fastTalk = null, AttributeSkillVO? fightingAxe = null, AttributeSkillVO? fightingBrawl = null, AttributeSkillVO? fightingChainsaw = null,
        AttributeSkillVO? fightingFlail = null, AttributeSkillVO? fightingGarrote = null, AttributeSkillVO? fightingSpear = null, AttributeSkillVO? fightingSword = null,
        AttributeSkillVO? fightingWhip = null, AttributeSkillVO? fightingBow = null, AttributeSkillVO? handGun = null, AttributeSkillVO? heavyWeapons = null,
        AttributeSkillVO? flamethrower = null, AttributeSkillVO? machineGun = null, AttributeSkillVO? rifleShotgun = null, AttributeSkillVO? submachineGun = null,
        AttributeSkillVO? firstAid = null, AttributeSkillVO? history = null, AttributeSkillVO? intimidate = null, AttributeSkillVO? jump = null,
        AttributeSkillVO? languageOtherValue = null, string languageOtherSpecialization = "", AttributeSkillVO? languageOwn = null,
        AttributeSkillVO? law = null, AttributeSkillVO? libraryUse = null, AttributeSkillVO? listen = null, AttributeSkillVO? lockSmith = null,
        AttributeSkillVO? mechanicalRepair = null, AttributeSkillVO? medicine = null, AttributeSkillVO? naturalWorld = null, AttributeSkillVO? navigate = null,
        AttributeSkillVO? occult = null, AttributeSkillVO? operateHeavyMachinery = null, AttributeSkillVO? persuade = null, AttributeSkillVO? pilotAirCraft = null,
        AttributeSkillVO? psychoanalysis = null, AttributeSkillVO? psychology = null, AttributeSkillVO? ride = null, AttributeSkillVO? astronomy = null,
        AttributeSkillVO? biology = null, AttributeSkillVO? botany = null, AttributeSkillVO? chemistry = null, AttributeSkillVO? cryptography = null,
        AttributeSkillVO? engineering = null, AttributeSkillVO? forensics = null, AttributeSkillVO? geology = null, AttributeSkillVO? mathematics = null,
        AttributeSkillVO? meteorology = null, AttributeSkillVO? pharmacy = null, AttributeSkillVO? physics = null, AttributeSkillVO? zoology=null, AttributeSkillVO? sleightOfHand = null, AttributeSkillVO? spotHidden = null,
        AttributeSkillVO? stealth = null, AttributeSkillVO? survival = null, string survivalSpecialization = "", AttributeSkillVO? swim = null,
        AttributeSkillVO? throwSkill = null, AttributeSkillVO? track = null)
    {
        return new CharacterSkillsModernEntity(
            Guid.NewGuid(), characterId, characterStatsId,
            accounting ?? new AttributeSkillVO(5), anthropology ?? new AttributeSkillVO(1), appraise ?? new AttributeSkillVO(5), archaelogy ?? new AttributeSkillVO(1),
            artAndCraftSpecialization, artCraft ?? new AttributeSkillVO(5), charm ?? new AttributeSkillVO(15), climb ?? new AttributeSkillVO(20),
            computerUse ?? new AttributeSkillVO(5), creditRating ?? new AttributeSkillVO(0), cthulhuMythos ?? new AttributeSkillVO(0), disguise ?? new AttributeSkillVO(5),
            dodge ?? new AttributeSkillVO(25), driveAuto ?? new AttributeSkillVO(20), eletricRepair ?? new AttributeSkillVO(10), eletronics ?? new AttributeSkillVO(1),
            fastTalk ?? new AttributeSkillVO(5), fightingAxe ?? new AttributeSkillVO(15), fightingBrawl ?? new AttributeSkillVO(25), fightingChainsaw ?? new AttributeSkillVO(10),
            fightingFlail ?? new AttributeSkillVO(10), fightingGarrote ?? new AttributeSkillVO(15), fightingSpear ?? new AttributeSkillVO(20), fightingSword ?? new AttributeSkillVO(20),
            fightingWhip ?? new AttributeSkillVO(5), fightingBow ?? new AttributeSkillVO(15), handGun ?? new AttributeSkillVO(20), heavyWeapons ?? new AttributeSkillVO(10),
            flamethrower ?? new AttributeSkillVO(10), machineGun ?? new AttributeSkillVO(10), rifleShotgun ?? new AttributeSkillVO(25), submachineGun ?? new AttributeSkillVO(15),
            firstAid ?? new AttributeSkillVO(30), history ?? new AttributeSkillVO(5), intimidate ?? new AttributeSkillVO(15), jump ?? new AttributeSkillVO(20),
            languageOtherValue ?? new AttributeSkillVO(1), languageOtherSpecialization, languageOwn ?? education,
            law ?? new AttributeSkillVO(5), libraryUse ?? new AttributeSkillVO(20), listen ?? new AttributeSkillVO(20), lockSmith ?? new AttributeSkillVO(1),
            mechanicalRepair ?? new AttributeSkillVO(10), medicine ?? new AttributeSkillVO(1), naturalWorld ?? new AttributeSkillVO(10), navigate ?? new AttributeSkillVO(10),
            occult ?? new AttributeSkillVO(5), operateHeavyMachinery ?? new AttributeSkillVO(1), persuade ?? new AttributeSkillVO(10), pilotAirCraft ?? new AttributeSkillVO(1),
            psychoanalysis ?? new AttributeSkillVO(1), psychology ?? new AttributeSkillVO(10), ride ?? new AttributeSkillVO(5), astronomy ?? new AttributeSkillVO(1),
            biology ?? new AttributeSkillVO(1), botany ?? new AttributeSkillVO(1), chemistry ?? new AttributeSkillVO(1), cryptography ?? new AttributeSkillVO(1),
            engineering ?? new AttributeSkillVO(1), forensics ?? new AttributeSkillVO(1), geology ?? new AttributeSkillVO(1), mathematics ?? new AttributeSkillVO(10),
            meteorology ?? new AttributeSkillVO(1), pharmacy ?? new AttributeSkillVO(1), physics ?? new AttributeSkillVO(01), zoology ?? new AttributeSkillVO(01), sleightOfHand ?? new AttributeSkillVO(10), spotHidden ?? new AttributeSkillVO(25),
            stealth ?? new AttributeSkillVO(20), survival ?? new AttributeSkillVO(10), survivalSpecialization, swim ?? new AttributeSkillVO(20),
            throwSkill ?? new AttributeSkillVO(20), track ?? new AttributeSkillVO(10)
        );
    }


public void Update(
    AttributeSkillVO? accounting = null, AttributeSkillVO? anthropology = null, AttributeSkillVO? appraise = null, AttributeSkillVO? archaelogy = null,
    string? artAndCraftSpecialization = null, AttributeSkillVO? artCraft = null, AttributeSkillVO? charm = null, AttributeSkillVO? climb = null,
    AttributeSkillVO? computerUse = null, AttributeSkillVO? creditRating = null, AttributeSkillVO? cthulhuMythos = null, AttributeSkillVO? disguise = null,
    AttributeSkillVO? dodge = null, AttributeSkillVO? driveAuto = null, AttributeSkillVO? eletricRepair = null, AttributeSkillVO? eletronics = null,
    AttributeSkillVO? fastTalk = null, AttributeSkillVO? fightingAxe = null, AttributeSkillVO? fightingBrawl = null, AttributeSkillVO? fightingChainsaw = null,
    AttributeSkillVO? fightingFlail = null, AttributeSkillVO? fightingGarrote = null, AttributeSkillVO? fightingSpear = null,
    AttributeSkillVO? fightingSword = null,
    AttributeSkillVO? fightingWhip = null, AttributeSkillVO? fightingBow = null, AttributeSkillVO? handGun = null, AttributeSkillVO? heavyWeapons = null,
    AttributeSkillVO? flamethrower = null, AttributeSkillVO? machineGun = null, AttributeSkillVO? rifleShotgun = null, AttributeSkillVO? submachineGun = null,
    AttributeSkillVO? firstAid = null, AttributeSkillVO? history = null, AttributeSkillVO? intimidate = null, AttributeSkillVO? jump = null,
    AttributeSkillVO? languageOtherValue = null, string? languageOtherSpecialization = null, AttributeSkillVO? languageOwn = null,
    AttributeSkillVO? law = null, AttributeSkillVO? libraryUse = null, AttributeSkillVO? listen = null, AttributeSkillVO? lockSmith = null,
    AttributeSkillVO? mechanicalRepair = null, AttributeSkillVO? medicine = null, AttributeSkillVO? naturalWorld = null, AttributeSkillVO? navigate = null,
    AttributeSkillVO? occult = null, AttributeSkillVO? operateHeavyMachinery = null, AttributeSkillVO? persuade = null, AttributeSkillVO? pilotAirCraft = null,
    AttributeSkillVO? psychoanalysis = null, AttributeSkillVO? psychology = null, AttributeSkillVO? ride = null, AttributeSkillVO? astronomy = null,
    AttributeSkillVO? biology = null, AttributeSkillVO? botany = null, AttributeSkillVO? chemistry = null, AttributeSkillVO? cryptography = null,
    AttributeSkillVO? engineering = null, AttributeSkillVO? forensics = null, AttributeSkillVO? geology = null, AttributeSkillVO? mathematics = null,
    AttributeSkillVO? meteorology = null, AttributeSkillVO? pharmacy = null, AttributeSkillVO? physics=null, AttributeSkillVO? zoology=null, AttributeSkillVO? sleightOfHand = null, AttributeSkillVO? spotHidden = null,
    AttributeSkillVO? stealth = null, AttributeSkillVO? survival = null, string? survivalSpecialization = null, AttributeSkillVO? swim = null,
    AttributeSkillVO? @throw = null, AttributeSkillVO? track = null)
    {

    if (accounting !=null) Accounting = accounting;
    if (anthropology !=null) Anthropology = anthropology;
    if (appraise !=null) Appraise = appraise;
    if (archaelogy !=null) Archaelogy = archaelogy;
    if (!string.IsNullOrEmpty(artAndCraftSpecialization)) ArtAndCraftSpecialization = artAndCraftSpecialization;
    if (artCraft !=null) ArtCraft = artCraft;
    if (charm !=null) Charm = charm;
    if (climb !=null) Climb = climb;
    if (computerUse !=null) ComputerUse = computerUse;
    if (creditRating !=null) CreditRating = creditRating;
    if (cthulhuMythos !=null) CthulhuMythos = cthulhuMythos;
    if (disguise !=null) Disguise = disguise;
    if (dodge !=null) Dodge = dodge;
    if (driveAuto !=null) DriveAuto = driveAuto;
    if (eletricRepair !=null) EletricRepair = eletricRepair;
    if (eletronics !=null) Eletronics = eletronics;
    if (fastTalk !=null) FastTalk = fastTalk;
    if (fightingAxe !=null) FightingAxe = fightingAxe;
    if (fightingBrawl !=null) FightingBrawl = fightingBrawl;
    if (fightingChainsaw !=null) FightingChainsaw = fightingChainsaw;
    if (fightingFlail !=null) FightingFlail = fightingFlail;
    if (fightingGarrote !=null) FightingGarrote = fightingGarrote;
    if (fightingSpear !=null) FightingSpear = fightingSpear;
    if (fightingSword !=null) FightingSword = fightingSword;
    if (fightingWhip !=null) FightingWhip = fightingWhip;
    if (fightingBow !=null) FightingBow = fightingBow;
    if (handGun !=null) HandGun = handGun;
    if (heavyWeapons !=null) HeavyWeapons = heavyWeapons;
    if (flamethrower !=null) Flamethrower = flamethrower;
    if (machineGun !=null) MachineGun = machineGun;
    if (rifleShotgun !=null) RifleShotgun = rifleShotgun;
    if (submachineGun !=null) SubmachineGun = submachineGun;
    if (firstAid !=null) FirstAid = firstAid;
    if (history !=null) History = history;
    if (intimidate !=null) Intimidate = intimidate;
    if (jump !=null) Jump = jump;
    if (languageOtherValue !=null) LanguageOtherValue = languageOtherValue;
    if (!string.IsNullOrEmpty(languageOtherSpecialization))
        LanguageOtherSpecialization = languageOtherSpecialization;
    if (languageOwn !=null) LanguageOwn = languageOwn;
    if (law !=null) Law = law;
    if (libraryUse !=null) LibraryUse = libraryUse;
    if (listen !=null) Listen = listen;
    if (lockSmith !=null) LockSmith = lockSmith;
    if (mechanicalRepair !=null) MechanicalRepair = mechanicalRepair;
    if (medicine !=null) Medicine = medicine;
    if (naturalWorld !=null) NaturalWorld = naturalWorld;
    if (navigate !=null) Navigate = navigate;
    if (occult !=null) Occult = occult;
    if (operateHeavyMachinery !=null) OperateHeavyMachinery = operateHeavyMachinery;
    if (persuade !=null) Persuade = persuade;
    if (pilotAirCraft !=null) PilotAirCraft = pilotAirCraft;
    if (psychoanalysis !=null) Psychoanalysis = psychoanalysis;
    if (psychology !=null) Psychology = psychology;
    if (ride !=null) Ride = ride;
    if (astronomy !=null) Astronomy = astronomy;
    if (biology !=null) Biology = biology;
    if (botany !=null) Botany = botany;
    if (chemistry !=null) Chemistry = chemistry;
    if (cryptography !=null) Cryptography = cryptography;
    if (engineering !=null) Engineering = engineering;
    if (forensics !=null) Forensics = forensics;
    if (geology !=null) Geology = geology;
    if (mathematics !=null) Mathematics = mathematics;
    if (meteorology !=null) Meteorology = meteorology;
    if (pharmacy !=null) Pharmacy = pharmacy;
    if (physics !=null) Physics = physics;
    if (zoology !=null) Zoology = zoology;
    if (sleightOfHand !=null) SleightOfHand = sleightOfHand;
    if (spotHidden !=null) SpotHidden = spotHidden;
    if (stealth !=null) Stealth = stealth;
    if (survival !=null) Survival = survival;
    if (!string.IsNullOrEmpty(survivalSpecialization)) SurvivalSpecialization = survivalSpecialization;
    if (swim !=null) Swim = swim;
    if (@throw !=null) Throw = @throw;
    if (track !=null) Track = track;
    }
}
