namespace DEMP_RPG_API.Domain.Entities;

public class CharacterSkillsModernEntity
{
    public Guid Id { get; private set; }
    public Guid CharacterId { get; private set; }
    public Guid CharacterStatsId { get; private set; }
    public int Accounting { get; private set; }
    public int Anthropology { get; private set; }
    public int Appraise { get; private set; }
    public int Archaelogy { get; private set; }
    public string ArtAndCraftSpecialization { get; private set; }
    public int ArtCraft { get; private set; }
    public int Charm { get; private set; }
    public int Climb { get; private set; }
    public int ComputerUse {get; private set;}
    public int CreditRating { get; private set; }
    public int CthulhuMythos { get; private set; }
    public int Disguise { get; private set; }
    public int Dodge { get; private set; }//Half DEX
    public int DriveAuto { get; private set; }
    public int EletricRepair { get; private set; }
    public int Eletronics { get; private set; }
    public int FastTalk { get; private set; }
    public int FightingAxe { get; private set; }
    public int FightingBrawl { get; private set; }
    public int FightingChainsaw { get; private set; }
    public int FightingFlail { get; private set; }
    public int FightingGarrote { get; private set; }
    public int FightingSpear { get; private set; }
    public int FightingSword { get; private set; }
    public int FightingWhip { get; private set; }
    public int FightingBow { get; private set; }
    public int HandGun { get; private set; }
    public int HeavyWeapons { get; private set; }
    public int Flamethrower { get; private set; }
    public int MachineGun { get; private set; }
    public int RifleShotgun { get; private set; }
    public int SubmachineGun  { get; private set; }
    public int FirstAid {get; private set;}
    public int History { get; private set; }
    public int Intimidate { get; private set; }
    public int Jump { get; private set; }
    public int LanguageOtherValue{get; private set;}
    public string LanguageOtherSpecialization {get; private set;}
    public int LanguageOwn { get; private set; } //==EDU
    public int Law { get; private set; }
    public int LibraryUse { get; private set; }
    public int Listen { get; private set; }
    public int LockSmith { get; private set; }
    public int MechanicalRepair { get; private set; }
    public int Medicine { get; private set; }
    public int NaturalWorld { get; private set; }
    public int Navigate { get; private set; }
    public int Occult {get; private set;}
    public int OperateHeavyMachinery { get; private set; }
    public int Persuade { get; private set; }
    public int PilotAirCraft { get; private set; }
    public int Psychoanalysis { get; private set; }
    public int Psychology { get; private set; }
    public int Ride { get; private set; }
    public int Astronomy { get; private set; }
    public int Biology { get; private set; }
    public int Botany { get; private set; }
    public int Chemistry { get; private set; }
    public int Cryptography { get; private set; }
    public int Engineering { get; private set; }
    public int Forensics { get; private set; }
    public int Geology { get; private set; }
    public int Mathematics { get; private set; }
    public int Meteorology { get; private set; }
    public int Pharmacy { get; private set; }
    public int SleightOfHand { get; private set; }
    public int SpotHidden { get; private set; }
    public int Stealth { get; private set; }
    public int Survival { get; private set; }
    public string SurvivalSpecialization {get; private set;}
    public int Swim { get; private set; }
    public int Throw { get; private set; }
    public int Track { get; private set; }

        public CharacterSkillsModernEntity(
        Guid id, Guid characterId, Guid characterStatsId,
        int accounting, int anthropology, int appraise, int archaelogy,
        string artAndCraftSpecialization, int artCraft, int charm, int climb,
        int computerUse, int creditRating, int cthulhuMythos, int disguise,
        int dodge, int driveAuto, int eletricRepair, int eletronics,
        int fastTalk, int fightingAxe, int fightingBrawl, int fightingChainsaw,
        int fightingFlail, int fightingGarrote, int fightingSpear, int fightingSword,
        int fightingWhip, int fightingBow, int handGun, int heavyWeapons,
        int flamethrower, int machineGun, int rifleShotgun, int submachineGun,
        int firstAid, int history, int intimidate, int jump,
        int languageOtherValue, string languageOtherSpecialization, int languageOwn,
        int law, int libraryUse, int listen, int lockSmith,
        int mechanicalRepair, int medicine, int naturalWorld, int navigate,
        int occult, int operateHeavyMachinery, int persuade, int pilotAirCraft,
        int psychoanalysis, int psychology, int ride, int astronomy,
        int biology, int botany, int chemistry, int cryptography,
        int engineering, int forensics, int geology, int mathematics,
        int meteorology, int pharmacy, int sleightOfHand, int spotHidden,
        int stealth, int survival, string survivalSpecialization, int swim,
        int @throw, int track)
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
        Guid characterId, Guid characterStatsId, int dexterity, int education,
        int? accounting = null, int? anthropology = null, int? appraise = null, int? archaelogy = null,
        string artAndCraftSpecialization = "", int? artCraft = null, int? charm = null, int? climb = null,
        int? computerUse = null, int? creditRating = null, int? cthulhuMythos = null, int? disguise = null,
        int? dodge = null, int? driveAuto = null, int? eletricRepair = null, int? eletronics = null,
        int? fastTalk = null, int? fightingAxe = null, int? fightingBrawl = null, int? fightingChainsaw = null,
        int? fightingFlail = null, int? fightingGarrote = null, int? fightingSpear = null, int? fightingSword = null,
        int? fightingWhip = null, int? fightingBow = null, int? handGun = null, int? heavyWeapons = null,
        int? flamethrower = null, int? machineGun = null, int? rifleShotgun = null, int? submachineGun = null,
        int? firstAid = null, int? history = null, int? intimidate = null, int? jump = null,
        int? languageOtherValue = null, string languageOtherSpecialization = "", int? languageOwn = null,
        int? law = null, int? libraryUse = null, int? listen = null, int? lockSmith = null,
        int? mechanicalRepair = null, int? medicine = null, int? naturalWorld = null, int? navigate = null,
        int? occult = null, int? operateHeavyMachinery = null, int? persuade = null, int? pilotAirCraft = null,
        int? psychoanalysis = null, int? psychology = null, int? ride = null, int? astronomy = null,
        int? biology = null, int? botany = null, int? chemistry = null, int? cryptography = null,
        int? engineering = null, int? forensics = null, int? geology = null, int? mathematics = null,
        int? meteorology = null, int? pharmacy = null, int? sleightOfHand = null, int? spotHidden = null,
        int? stealth = null, int? survival = null, string survivalSpecialization = "", int? swim = null,
        int? throwSkill = null, int? track = null)
    {
        return new CharacterSkillsModernEntity(
            Guid.NewGuid(), characterId, characterStatsId,
            accounting ?? 5, anthropology ?? 1, appraise ?? 5, archaelogy ?? 1,
            artAndCraftSpecialization, artCraft ?? 5, charm ?? 15, climb ?? 20,
            computerUse ?? 5, creditRating ?? 0, cthulhuMythos ?? 0, disguise ?? 5,
            dodge ?? (dexterity / 2), driveAuto ?? 20, eletricRepair ?? 10, eletronics ?? 1,
            fastTalk ?? 5, fightingAxe ?? 15, fightingBrawl ?? 25, fightingChainsaw ?? 10,
            fightingFlail ?? 10, fightingGarrote ?? 15, fightingSpear ?? 20, fightingSword ?? 20,
            fightingWhip ?? 5, fightingBow ?? 15, handGun ?? 20, heavyWeapons ?? 10,
            flamethrower ?? 10, machineGun ?? 10, rifleShotgun ?? 25, submachineGun ?? 15,
            firstAid ?? 30, history ?? 5, intimidate ?? 15, jump ?? 20,
            languageOtherValue ?? 1, languageOtherSpecialization, languageOwn ?? education,
            law ?? 5, libraryUse ?? 20, listen ?? 20, lockSmith ?? 1,
            mechanicalRepair ?? 10, medicine ?? 1, naturalWorld ?? 10, navigate ?? 10,
            occult ?? 5, operateHeavyMachinery ?? 1, persuade ?? 10, pilotAirCraft ?? 1,
            psychoanalysis ?? 1, psychology ?? 10, ride ?? 5, astronomy ?? 1,
            biology ?? 1, botany ?? 1, chemistry ?? 1, cryptography ?? 1,
            engineering ?? 1, forensics ?? 1, geology ?? 1, mathematics ?? 10,
            meteorology ?? 1, pharmacy ?? 1, sleightOfHand ?? 10, spotHidden ?? 25,
            stealth ?? 20, survival ?? 10, survivalSpecialization, swim ?? 20,
            throwSkill ?? 20, track ?? 10
        );
    }


public void Update(
    int? accounting = null, int? anthropology = null, int? appraise = null, int? archaelogy = null,
    string? artAndCraftSpecialization = null, int? artCraft = null, int? charm = null, int? climb = null,
    int? computerUse = null, int? creditRating = null, int? cthulhuMythos = null, int? disguise = null,
    int? dodge = null, int? driveAuto = null, int? eletricRepair = null, int? eletronics = null,
    int? fastTalk = null, int? fightingAxe = null, int? fightingBrawl = null, int? fightingChainsaw = null,
    int? fightingFlail = null, int? fightingGarrote = null, int? fightingSpear = null,
    int? fightingSword = null,
    int? fightingWhip = null, int? fightingBow = null, int? handGun = null, int? heavyWeapons = null,
    int? flamethrower = null, int? machineGun = null, int? rifleShotgun = null, int? submachineGun = null,
    int? firstAid = null, int? history = null, int? intimidate = null, int? jump = null,
    int? languageOtherValue = null, string? languageOtherSpecialization = null, int? languageOwn = null,
    int? law = null, int? libraryUse = null, int? listen = null, int? lockSmith = null,
    int? mechanicalRepair = null, int? medicine = null, int? naturalWorld = null, int? navigate = null,
    int? occult = null, int? operateHeavyMachinery = null, int? persuade = null, int? pilotAirCraft = null,
    int? psychoanalysis = null, int? psychology = null, int? ride = null, int? astronomy = null,
    int? biology = null, int? botany = null, int? chemistry = null, int? cryptography = null,
    int? engineering = null, int? forensics = null, int? geology = null, int? mathematics = null,
    int? meteorology = null, int? pharmacy = null, int? sleightOfHand = null, int? spotHidden = null,
    int? stealth = null, int? survival = null, string? survivalSpecialization = null, int? swim = null,
    int? @throw = null, int? track = null)
    {

    if (accounting.HasValue) Accounting = accounting.Value;
    if (anthropology.HasValue) Anthropology = anthropology.Value;
    if (appraise.HasValue) Appraise = appraise.Value;
    if (archaelogy.HasValue) Archaelogy = archaelogy.Value;
    if (!string.IsNullOrEmpty(artAndCraftSpecialization)) ArtAndCraftSpecialization = artAndCraftSpecialization;
    if (artCraft.HasValue) ArtCraft = artCraft.Value;
    if (charm.HasValue) Charm = charm.Value;
    if (climb.HasValue) Climb = climb.Value;
    if (computerUse.HasValue) ComputerUse = computerUse.Value;
    if (creditRating.HasValue) CreditRating = creditRating.Value;
    if (cthulhuMythos.HasValue) CthulhuMythos = cthulhuMythos.Value;
    if (disguise.HasValue) Disguise = disguise.Value;
    if (dodge.HasValue) Dodge = dodge.Value;
    if (driveAuto.HasValue) DriveAuto = driveAuto.Value;
    if (eletricRepair.HasValue) EletricRepair = eletricRepair.Value;
    if (eletronics.HasValue) Eletronics = eletronics.Value;
    if (fastTalk.HasValue) FastTalk = fastTalk.Value;
    if (fightingAxe.HasValue) FightingAxe = fightingAxe.Value;
    if (fightingBrawl.HasValue) FightingBrawl = fightingBrawl.Value;
    if (fightingChainsaw.HasValue) FightingChainsaw = fightingChainsaw.Value;
    if (fightingFlail.HasValue) FightingFlail = fightingFlail.Value;
    if (fightingGarrote.HasValue) FightingGarrote = fightingGarrote.Value;
    if (fightingSpear.HasValue) FightingSpear = fightingSpear.Value;
    if (fightingSword.HasValue) FightingSword = fightingSword.Value;
    if (fightingWhip.HasValue) FightingWhip = fightingWhip.Value;
    if (fightingBow.HasValue) FightingBow = fightingBow.Value;
    if (handGun.HasValue) HandGun = handGun.Value;
    if (heavyWeapons.HasValue) HeavyWeapons = heavyWeapons.Value;
    if (flamethrower.HasValue) Flamethrower = flamethrower.Value;
    if (machineGun.HasValue) MachineGun = machineGun.Value;
    if (rifleShotgun.HasValue) RifleShotgun = rifleShotgun.Value;
    if (submachineGun.HasValue) SubmachineGun = submachineGun.Value;
    if (firstAid.HasValue) FirstAid = firstAid.Value;
    if (history.HasValue) History = history.Value;
    if (intimidate.HasValue) Intimidate = intimidate.Value;
    if (jump.HasValue) Jump = jump.Value;
    if (languageOtherValue.HasValue) LanguageOtherValue = languageOtherValue.Value;
    if (!string.IsNullOrEmpty(languageOtherSpecialization))
        LanguageOtherSpecialization = languageOtherSpecialization;
    if (languageOwn.HasValue) LanguageOwn = languageOwn.Value;
    if (law.HasValue) Law = law.Value;
    if (libraryUse.HasValue) LibraryUse = libraryUse.Value;
    if (listen.HasValue) Listen = listen.Value;
    if (lockSmith.HasValue) LockSmith = lockSmith.Value;
    if (mechanicalRepair.HasValue) MechanicalRepair = mechanicalRepair.Value;
    if (medicine.HasValue) Medicine = medicine.Value;
    if (naturalWorld.HasValue) NaturalWorld = naturalWorld.Value;
    if (navigate.HasValue) Navigate = navigate.Value;
    if (occult.HasValue) Occult = occult.Value;
    if (operateHeavyMachinery.HasValue) OperateHeavyMachinery = operateHeavyMachinery.Value;
    if (persuade.HasValue) Persuade = persuade.Value;
    if (pilotAirCraft.HasValue) PilotAirCraft = pilotAirCraft.Value;
    if (psychoanalysis.HasValue) Psychoanalysis = psychoanalysis.Value;
    if (psychology.HasValue) Psychology = psychology.Value;
    if (ride.HasValue) Ride = ride.Value;
    if (astronomy.HasValue) Astronomy = astronomy.Value;
    if (biology.HasValue) Biology = biology.Value;
    if (botany.HasValue) Botany = botany.Value;
    if (chemistry.HasValue) Chemistry = chemistry.Value;
    if (cryptography.HasValue) Cryptography = cryptography.Value;
    if (engineering.HasValue) Engineering = engineering.Value;
    if (forensics.HasValue) Forensics = forensics.Value;
    if (geology.HasValue) Geology = geology.Value;
    if (mathematics.HasValue) Mathematics = mathematics.Value;
    if (meteorology.HasValue) Meteorology = meteorology.Value;
    if (pharmacy.HasValue) Pharmacy = pharmacy.Value;
    if (sleightOfHand.HasValue) SleightOfHand = sleightOfHand.Value;
    if (spotHidden.HasValue) SpotHidden = spotHidden.Value;
    if (stealth.HasValue) Stealth = stealth.Value;
    if (survival.HasValue) Survival = survival.Value;
    if (!string.IsNullOrEmpty(survivalSpecialization)) SurvivalSpecialization = survivalSpecialization;
    if (swim.HasValue) Swim = swim.Value;
    if (@throw.HasValue) Throw = @throw.Value;
    if (track.HasValue) Track = track.Value;
    }
}
