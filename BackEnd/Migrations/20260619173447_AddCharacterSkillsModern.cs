using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DEMP_RPG_API.Migrations
{
    /// <inheritdoc />
    public partial class AddCharacterSkillsModern : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    UserId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    RoomId = table.Column<Guid>(type: "char(36)", nullable: true, collation: "ascii_general_ci"),
                    Name = table.Column<string>(type: "varchar(128)", maxLength: 128, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Gender = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Occupation = table.Column<int>(type: "int", nullable: false),
                    Residence = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Annotations = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ItemIds = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    created_at = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    updated_at = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CharacterSkillsModern",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    CharacterId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    CharacterStatsId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Accounting = table.Column<int>(type: "int", nullable: false),
                    Anthropology = table.Column<int>(type: "int", nullable: false),
                    Appraise = table.Column<int>(type: "int", nullable: false),
                    Archaelogy = table.Column<int>(type: "int", nullable: false),
                    ArtAndCraftSpecialization = table.Column<string>(type: "varchar(128)", maxLength: 128, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ArtCraft = table.Column<int>(type: "int", nullable: false),
                    Charm = table.Column<int>(type: "int", nullable: false),
                    Climb = table.Column<int>(type: "int", nullable: false),
                    ComputerUse = table.Column<int>(type: "int", nullable: false),
                    CreditRating = table.Column<int>(type: "int", nullable: false),
                    CthulhuMythos = table.Column<int>(type: "int", nullable: false),
                    Disguise = table.Column<int>(type: "int", nullable: false),
                    Dodge = table.Column<int>(type: "int", nullable: false),
                    DriveAuto = table.Column<int>(type: "int", nullable: false),
                    EletricRepair = table.Column<int>(type: "int", nullable: false),
                    Eletronics = table.Column<int>(type: "int", nullable: false),
                    FastTalk = table.Column<int>(type: "int", nullable: false),
                    FightingAxe = table.Column<int>(type: "int", nullable: false),
                    FightingBrawl = table.Column<int>(type: "int", nullable: false),
                    FightingChainsaw = table.Column<int>(type: "int", nullable: false),
                    FightingFlail = table.Column<int>(type: "int", nullable: false),
                    FightingGarrote = table.Column<int>(type: "int", nullable: false),
                    FightingSpear = table.Column<int>(type: "int", nullable: false),
                    FightingSword = table.Column<int>(type: "int", nullable: false),
                    FightingWhip = table.Column<int>(type: "int", nullable: false),
                    FightingBow = table.Column<int>(type: "int", nullable: false),
                    HandGun = table.Column<int>(type: "int", nullable: false),
                    HeavyWeapons = table.Column<int>(type: "int", nullable: false),
                    Flamethrower = table.Column<int>(type: "int", nullable: false),
                    MachineGun = table.Column<int>(type: "int", nullable: false),
                    RifleShotgun = table.Column<int>(type: "int", nullable: false),
                    SubmachineGun = table.Column<int>(type: "int", nullable: false),
                    FirstAid = table.Column<int>(type: "int", nullable: false),
                    History = table.Column<int>(type: "int", nullable: false),
                    Intimidate = table.Column<int>(type: "int", nullable: false),
                    Jump = table.Column<int>(type: "int", nullable: false),
                    LanguageOtherValue = table.Column<int>(type: "int", nullable: false),
                    LanguageOtherSpecialization = table.Column<string>(type: "varchar(128)", maxLength: 128, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    LanguageOwn = table.Column<int>(type: "int", nullable: false),
                    Law = table.Column<int>(type: "int", nullable: false),
                    LibraryUse = table.Column<int>(type: "int", nullable: false),
                    Listen = table.Column<int>(type: "int", nullable: false),
                    LockSmith = table.Column<int>(type: "int", nullable: false),
                    MechanicalRepair = table.Column<int>(type: "int", nullable: false),
                    Medicine = table.Column<int>(type: "int", nullable: false),
                    NaturalWorld = table.Column<int>(type: "int", nullable: false),
                    Navigate = table.Column<int>(type: "int", nullable: false),
                    Occult = table.Column<int>(type: "int", nullable: false),
                    OperateHeavyMachinery = table.Column<int>(type: "int", nullable: false),
                    Persuade = table.Column<int>(type: "int", nullable: false),
                    PilotAirCraft = table.Column<int>(type: "int", nullable: false),
                    Psychoanalysis = table.Column<int>(type: "int", nullable: false),
                    Psychology = table.Column<int>(type: "int", nullable: false),
                    Ride = table.Column<int>(type: "int", nullable: false),
                    Astronomy = table.Column<int>(type: "int", nullable: false),
                    Biology = table.Column<int>(type: "int", nullable: false),
                    Botany = table.Column<int>(type: "int", nullable: false),
                    Chemistry = table.Column<int>(type: "int", nullable: false),
                    Cryptography = table.Column<int>(type: "int", nullable: false),
                    Engineering = table.Column<int>(type: "int", nullable: false),
                    Forensics = table.Column<int>(type: "int", nullable: false),
                    Geology = table.Column<int>(type: "int", nullable: false),
                    Mathematics = table.Column<int>(type: "int", nullable: false),
                    Meteorology = table.Column<int>(type: "int", nullable: false),
                    Pharmacy = table.Column<int>(type: "int", nullable: false),
                    SleightOfHand = table.Column<int>(type: "int", nullable: false),
                    SpotHidden = table.Column<int>(type: "int", nullable: false),
                    Stealth = table.Column<int>(type: "int", nullable: false),
                    Survival = table.Column<int>(type: "int", nullable: false),
                    SurvivalSpecialization = table.Column<string>(type: "varchar(128)", maxLength: 128, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Swim = table.Column<int>(type: "int", nullable: false),
                    Throw = table.Column<int>(type: "int", nullable: false),
                    Track = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterSkillsModern", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CharacterStats",
                columns: table => new
                {
                    CharacterId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Id = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    MaxAttributes = table.Column<int>(type: "int", nullable: false),
                    Strength = table.Column<int>(type: "int", nullable: false),
                    Dexterity = table.Column<int>(type: "int", nullable: false),
                    Intelligence = table.Column<int>(type: "int", nullable: false),
                    Size = table.Column<int>(type: "int", nullable: false),
                    Power = table.Column<int>(type: "int", nullable: false),
                    Appearance = table.Column<int>(type: "int", nullable: false),
                    Education = table.Column<int>(type: "int", nullable: false),
                    HitPoints = table.Column<int>(type: "int", nullable: false),
                    CurrentHp = table.Column<int>(type: "int", nullable: false),
                    Luck = table.Column<int>(type: "int", nullable: false),
                    Sanity = table.Column<int>(type: "int", nullable: false),
                    CurrentSanity = table.Column<int>(type: "int", nullable: false),
                    Move = table.Column<int>(type: "int", nullable: false),
                    Build = table.Column<int>(type: "int", nullable: false),
                    Dodge = table.Column<int>(type: "int", nullable: false),
                    DamageBonus = table.Column<int>(type: "int", nullable: false),
                    TemporaryInsanity = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IndefiniteSanity = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    MajorWound = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Unconscious = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Dying = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterStats", x => x.CharacterId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    RoomCode = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Id = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    MasterId = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    Name = table.Column<string>(type: "varchar(128)", maxLength: 128, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    UserIds = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    SheetEnum = table.Column<int>(type: "int", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    updated_at = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.RoomCode);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Characters");

            migrationBuilder.DropTable(
                name: "CharacterSkillsModern");

            migrationBuilder.DropTable(
                name: "CharacterStats");

            migrationBuilder.DropTable(
                name: "Rooms");
        }
    }
}
