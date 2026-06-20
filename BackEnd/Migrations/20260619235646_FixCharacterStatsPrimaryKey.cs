using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DEMP_RPG_API.Migrations
{
    /// <inheritdoc />
    public partial class FixCharacterStatsPrimaryKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CharacterStats",
                table: "CharacterStats");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CharacterStats",
                table: "CharacterStats",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CharacterStats",
                table: "CharacterStats");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CharacterStats",
                table: "CharacterStats",
                column: "CharacterId");
        }
    }
}
