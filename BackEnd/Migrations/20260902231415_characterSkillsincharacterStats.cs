using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DEMP_RPG_API.Migrations
{
    /// <inheritdoc />
    public partial class characterSkillsincharacterStats : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Skill",
                table: "CharacterStats",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Skill",
                table: "CharacterStats");
        }
    }
}
