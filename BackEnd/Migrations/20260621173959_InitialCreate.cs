using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DEMP_RPG_API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Characters",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    RoomId = table.Column<Guid>(type: "uuid", nullable: true),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Gender = table.Column<string>(type: "text", nullable: false),
                    Occupation = table.Column<int>(type: "integer", nullable: false),
                    Residence = table.Column<string>(type: "text", nullable: false),
                    Age = table.Column<int>(type: "integer", nullable: false),
                    Annotations = table.Column<string>(type: "text", nullable: false),
                    ItemIds = table.Column<List<Guid>>(type: "uuid[]", nullable: true),
                    created_at = table.Column<DateTime>(type: "timestamptz", nullable: false),
                    updated_at = table.Column<DateTime>(type: "timestamptz", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Characters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CharacterSkillsModern",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CharacterId = table.Column<Guid>(type: "uuid", nullable: false),
                    CharacterStatsId = table.Column<Guid>(type: "uuid", nullable: false),
                    Accounting = table.Column<int>(type: "integer", nullable: false),
                    Anthropology = table.Column<int>(type: "integer", nullable: false),
                    Appraise = table.Column<int>(type: "integer", nullable: false),
                    Archaelogy = table.Column<int>(type: "integer", nullable: false),
                    ArtAndCraftSpecialization = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    ArtCraft = table.Column<int>(type: "integer", nullable: false),
                    Charm = table.Column<int>(type: "integer", nullable: false),
                    Climb = table.Column<int>(type: "integer", nullable: false),
                    ComputerUse = table.Column<int>(type: "integer", nullable: false),
                    CreditRating = table.Column<int>(type: "integer", nullable: false),
                    CthulhuMythos = table.Column<int>(type: "integer", nullable: false),
                    Disguise = table.Column<int>(type: "integer", nullable: false),
                    Dodge = table.Column<int>(type: "integer", nullable: false),
                    DriveAuto = table.Column<int>(type: "integer", nullable: false),
                    EletricRepair = table.Column<int>(type: "integer", nullable: false),
                    Eletronics = table.Column<int>(type: "integer", nullable: false),
                    FastTalk = table.Column<int>(type: "integer", nullable: false),
                    FightingAxe = table.Column<int>(type: "integer", nullable: false),
                    FightingBrawl = table.Column<int>(type: "integer", nullable: false),
                    FightingChainsaw = table.Column<int>(type: "integer", nullable: false),
                    FightingFlail = table.Column<int>(type: "integer", nullable: false),
                    FightingGarrote = table.Column<int>(type: "integer", nullable: false),
                    FightingSpear = table.Column<int>(type: "integer", nullable: false),
                    FightingSword = table.Column<int>(type: "integer", nullable: false),
                    FightingWhip = table.Column<int>(type: "integer", nullable: false),
                    FightingBow = table.Column<int>(type: "integer", nullable: false),
                    HandGun = table.Column<int>(type: "integer", nullable: false),
                    HeavyWeapons = table.Column<int>(type: "integer", nullable: false),
                    Flamethrower = table.Column<int>(type: "integer", nullable: false),
                    MachineGun = table.Column<int>(type: "integer", nullable: false),
                    RifleShotgun = table.Column<int>(type: "integer", nullable: false),
                    SubmachineGun = table.Column<int>(type: "integer", nullable: false),
                    FirstAid = table.Column<int>(type: "integer", nullable: false),
                    History = table.Column<int>(type: "integer", nullable: false),
                    Intimidate = table.Column<int>(type: "integer", nullable: false),
                    Jump = table.Column<int>(type: "integer", nullable: false),
                    LanguageOtherValue = table.Column<int>(type: "integer", nullable: false),
                    LanguageOtherSpecialization = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    LanguageOwn = table.Column<int>(type: "integer", nullable: false),
                    Law = table.Column<int>(type: "integer", nullable: false),
                    LibraryUse = table.Column<int>(type: "integer", nullable: false),
                    Listen = table.Column<int>(type: "integer", nullable: false),
                    LockSmith = table.Column<int>(type: "integer", nullable: false),
                    MechanicalRepair = table.Column<int>(type: "integer", nullable: false),
                    Medicine = table.Column<int>(type: "integer", nullable: false),
                    NaturalWorld = table.Column<int>(type: "integer", nullable: false),
                    Navigate = table.Column<int>(type: "integer", nullable: false),
                    Occult = table.Column<int>(type: "integer", nullable: false),
                    OperateHeavyMachinery = table.Column<int>(type: "integer", nullable: false),
                    Persuade = table.Column<int>(type: "integer", nullable: false),
                    PilotAirCraft = table.Column<int>(type: "integer", nullable: false),
                    Psychoanalysis = table.Column<int>(type: "integer", nullable: false),
                    Psychology = table.Column<int>(type: "integer", nullable: false),
                    Ride = table.Column<int>(type: "integer", nullable: false),
                    Astronomy = table.Column<int>(type: "integer", nullable: false),
                    Biology = table.Column<int>(type: "integer", nullable: false),
                    Botany = table.Column<int>(type: "integer", nullable: false),
                    Chemistry = table.Column<int>(type: "integer", nullable: false),
                    Cryptography = table.Column<int>(type: "integer", nullable: false),
                    Engineering = table.Column<int>(type: "integer", nullable: false),
                    Forensics = table.Column<int>(type: "integer", nullable: false),
                    Geology = table.Column<int>(type: "integer", nullable: false),
                    Mathematics = table.Column<int>(type: "integer", nullable: false),
                    Meteorology = table.Column<int>(type: "integer", nullable: false),
                    Pharmacy = table.Column<int>(type: "integer", nullable: false),
                    SleightOfHand = table.Column<int>(type: "integer", nullable: false),
                    SpotHidden = table.Column<int>(type: "integer", nullable: false),
                    Stealth = table.Column<int>(type: "integer", nullable: false),
                    Survival = table.Column<int>(type: "integer", nullable: false),
                    SurvivalSpecialization = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Swim = table.Column<int>(type: "integer", nullable: false),
                    Throw = table.Column<int>(type: "integer", nullable: false),
                    Track = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterSkillsModern", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CharacterStats",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CharacterId = table.Column<Guid>(type: "uuid", nullable: false),
                    MaxAttributes = table.Column<int>(type: "integer", nullable: false),
                    Strength = table.Column<int>(type: "integer", nullable: false),
                    Dexterity = table.Column<int>(type: "integer", nullable: false),
                    Intelligence = table.Column<int>(type: "integer", nullable: false),
                    Size = table.Column<int>(type: "integer", nullable: false),
                    Power = table.Column<int>(type: "integer", nullable: false),
                    Appearance = table.Column<int>(type: "integer", nullable: false),
                    Education = table.Column<int>(type: "integer", nullable: false),
                    HitPoints = table.Column<int>(type: "integer", nullable: false),
                    CurrentHp = table.Column<int>(type: "integer", nullable: false),
                    Luck = table.Column<int>(type: "integer", nullable: false),
                    Sanity = table.Column<int>(type: "integer", nullable: false),
                    CurrentSanity = table.Column<int>(type: "integer", nullable: false),
                    Move = table.Column<int>(type: "integer", nullable: false),
                    Build = table.Column<int>(type: "integer", nullable: false),
                    Dodge = table.Column<int>(type: "integer", nullable: false),
                    DamageBonus = table.Column<int>(type: "integer", nullable: false),
                    TemporaryInsanity = table.Column<bool>(type: "boolean", nullable: false),
                    IndefiniteSanity = table.Column<bool>(type: "boolean", nullable: false),
                    MajorWound = table.Column<bool>(type: "boolean", nullable: false),
                    Unconscious = table.Column<bool>(type: "boolean", nullable: false),
                    Dying = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CharacterStats", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    RoomCode = table.Column<string>(type: "text", nullable: false),
                    MasterId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Description = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    UserIds = table.Column<List<Guid>>(type: "uuid[]", nullable: false),
                    SheetEnum = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamptz", nullable: false),
                    updated_at = table.Column<DateTime>(type: "timestamptz", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    username = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Email = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    password_hash = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false),
                    Role = table.Column<int>(type: "integer", nullable: false),
                    created_at = table.Column<DateTime>(type: "timestamptz", nullable: false),
                    updated_at = table.Column<DateTime>(type: "timestamptz", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);
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

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
