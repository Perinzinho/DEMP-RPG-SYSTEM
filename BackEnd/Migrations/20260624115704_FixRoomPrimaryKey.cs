using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DEMP_RPG_API.Migrations
{
    /// <inheritdoc />
    public partial class FixRoomPrimaryKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Diving",
                table: "CharacterSkillsModern",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Physics",
                table: "CharacterSkillsModern",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Zoology",
                table: "CharacterSkillsModern",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Diving",
                table: "CharacterSkillsModern");

            migrationBuilder.DropColumn(
                name: "Physics",
                table: "CharacterSkillsModern");

            migrationBuilder.DropColumn(
                name: "Zoology",
                table: "CharacterSkillsModern");
        }
    }
}
