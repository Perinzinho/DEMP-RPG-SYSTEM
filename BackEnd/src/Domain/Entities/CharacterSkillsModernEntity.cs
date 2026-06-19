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
    Guid id, Guid characterId, Guid characterStatsId, int dexterity, int education,
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
    Id = id;
    CharacterId = characterId;
    CharacterStatsId = characterStatsId;
    Accounting = accounting ?? 5;
    Anthropology = anthropology ?? 1;
    Appraise = appraise ?? 5;
    Archaelogy = archaelogy ?? 1;
    ArtAndCraftSpecialization = artAndCraftSpecialization;
    ArtCraft = artCraft ?? 5;
    Charm = charm ?? 15;
    Climb = climb ?? 20;
    ComputerUse = computerUse ?? 5;
    CreditRating = creditRating ?? 0;
    CthulhuMythos = cthulhuMythos ?? 0;
    Disguise = disguise ?? 5;
    Dodge = dodge ?? (dexterity / 2);              // <- depende de outro stat
    DriveAuto = driveAuto ?? 20;
    EletricRepair = eletricRepair ?? 10;
    Eletronics = eletronics ?? 1;
    FastTalk = fastTalk ?? 5;
    FightingAxe = fightingAxe ?? 15;
    FightingBrawl = fightingBrawl ?? 25;
    FightingChainsaw = fightingChainsaw ?? 10;
    FightingFlail = fightingFlail ?? 10;
    FightingGarrote = fightingGarrote ?? 15;
    FightingSpear = fightingSpear ?? 20;
    FightingSword = fightingSword ?? 20;
    FightingWhip = fightingWhip ?? 5;
    FightingBow = fightingBow ?? 15;
    HandGun = handGun ?? 20;
    HeavyWeapons = heavyWeapons ?? 10;
    Flamethrower = flamethrower ?? 10;
    MachineGun = machineGun ?? 10;
    RifleShotgun = rifleShotgun ?? 25;
    SubmachineGun = submachineGun ?? 15;
    FirstAid = firstAid ?? 30;
    History = history ?? 5;
    Intimidate = intimidate ?? 15;
    Jump = jump ?? 20;
    LanguageOtherValue = languageOtherValue ?? 1;
    LanguageOtherSpecialization = languageOtherSpecialization;
    LanguageOwn = languageOwn ?? education;          // <- depende de EDU
    Law = law ?? 5;
    LibraryUse = libraryUse ?? 20;
    Listen = listen ?? 20;
    LockSmith = lockSmith ?? 1;
    MechanicalRepair = mechanicalRepair ?? 10;
    Medicine = medicine ?? 1;
    NaturalWorld = naturalWorld ?? 10;
    Navigate = navigate ?? 10;
    Occult = occult ?? 5;
    OperateHeavyMachinery = operateHeavyMachinery ?? 1;
    Persuade = persuade ?? 10;
    PilotAirCraft = pilotAirCraft ?? 1;
    Psychoanalysis = psychoanalysis ?? 1;
    Psychology = psychology ?? 10;
    Ride = ride ?? 5;
    Astronomy = astronomy ?? 1;
    Biology = biology ?? 1;
    Botany = botany ?? 1;
    Chemistry = chemistry ?? 1;
    Cryptography = cryptography ?? 1;
    Engineering = engineering ?? 1;
    Forensics = forensics ?? 1;
    Geology = geology ?? 1;
    Mathematics = mathematics ?? 10;
    Meteorology = meteorology ?? 1;
    Pharmacy = pharmacy ?? 1;
    SleightOfHand = sleightOfHand ?? 10;
    SpotHidden = spotHidden ?? 25;
    Stealth = stealth ?? 20;
    Survival = survival ?? 10;
    SurvivalSpecialization = survivalSpecialization;
    Swim = swim ?? 20;
    Throw = throwSkill ?? 20;
    Track = track ?? 10;
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
    int? throwSkill = null, int? track = null)
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
    if (throwSkill.HasValue) Throw = throwSkill.Value;
    if (track.HasValue) Track = track.Value;
    }
}
