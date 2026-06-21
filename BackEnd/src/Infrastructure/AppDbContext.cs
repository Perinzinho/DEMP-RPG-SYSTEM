using System.Xml;
using DEMP_RPG_API.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DEMP_RPG_API.Infrastructure;

public class AppDbContext : DbContext
{
    public  AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {}
    
    public DbSet<UserEntity> Users => Set<UserEntity>();
    public DbSet<CharacterEntity> Characters => Set<CharacterEntity>();
    public DbSet<RoomEntity> Rooms => Set<RoomEntity>();
    public DbSet<CharacterStatsEntity> CharacterStats => Set<CharacterStatsEntity>();
    public DbSet<CharacterSkillsModernEntity> CharacterSkillsModern => Set<CharacterSkillsModernEntity>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        //User
        modelBuilder.Entity<UserEntity>(entity =>
        {
            entity.ToTable("Users");
            
            entity.HasKey(e => e.Id);
            
            entity.HasIndex(e => e.Email).IsUnique();
            
            entity.Property(e => e.Id).ValueGeneratedNever();
            
            entity.Property(e =>e.Username)
                .HasColumnName("username")
                .HasMaxLength(128)
                .IsRequired();
            
            entity.Property(e=>e.Email)
                .HasMaxLength(128)
                .IsRequired();
            
            entity.Property(e=>e.PasswordHash)
                .HasColumnName("password_hash")
                .HasMaxLength(255)
                .IsRequired();
            
            entity.Property(e=>e.Role)
                .IsRequired();
            
            entity.Property(e=>e.CreatedAt)
                .HasColumnName("created_at")
                .HasColumnType("timestamptz")
                .IsRequired();

            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updated_at")
                .HasColumnType("timestamptz");
        });
        
        //Character
        modelBuilder.Entity<CharacterEntity>(entity =>
        {
            entity.ToTable("Characters");
            
            entity.HasKey(e => e.Id);
            
            entity.Property(e => e.Id)
                .IsRequired()
                .ValueGeneratedNever();
            
            entity.Property(e=>e.UserId)
                .IsRequired();

            entity.Property(e => e.RoomId)
                .IsRequired(false);
            
            entity.Property(e=>e.Name)
                .HasMaxLength(128)
                .IsRequired();
            
            entity.Property(e=>e.Gender)
                .IsRequired();
            
            entity.Property(e=>e.Occupation)
                .IsRequired();
            
            entity.Property(e=>e.Residence)
                .IsRequired();
            
            entity.Property(e => e.Age)
                .IsRequired();
            
            entity.Property(e => e.Annotations);
            
            entity.Property(e => e.ItemIds)
                .IsRequired(false);
            
            entity.Property(e => e.CreatedAt)
                .HasColumnName("created_at")
                .HasColumnType("timestamptz")
                .IsRequired();
            
            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updated_at")
                .HasColumnType("timestamptz");
        });
        
        //CharacterStats
        modelBuilder.Entity<CharacterStatsEntity>(entity =>
        {
                entity.ToTable("CharacterStats");
                entity.HasKey(e => e.Id);

                
                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .IsRequired();

                entity.Property(e => e.MaxAttributes)
                    .IsRequired();

                entity.Property(e => e.Strength)
                    .IsRequired();
                
                entity.Property(e => e.Dexterity)
                    .IsRequired();
                
                entity.Property(e => e.Intelligence)
                    .IsRequired();
                
                entity.Property(e => e.Intelligence)
                    .IsRequired();
                
                entity.Property(e => e.Size)
                    .IsRequired();
                
                entity.Property(e => e.Power)
                    .IsRequired();
                
                entity.Property(e => e.Appearance)
                    .IsRequired();

                entity.Property(e => e.Education)
                    .IsRequired();

                entity.Property(e => e.HitPoints)
                    .IsRequired();
                
                entity.Property(e=>e.CurrentHp)
                    .IsRequired();
                
                entity.Property(e=>e.Luck)
                    .IsRequired();
                
                entity.Property(e=>e.Sanity)
                    .IsRequired();
                
                entity.Property(e => e.CurrentSanity)
                    .IsRequired();
                
                entity.Property(e => e.Move)
                    .IsRequired();
                
                entity.Property(e=>e.Build).
                    IsRequired();
                
                entity.Property(e=>e.Dodge)
                    .IsRequired();
                
                entity.Property(e=>e.DamageBonus)
                    .IsRequired();
                
                entity.Property(e=>e.TemporaryInsanity)
                    .IsRequired();
                
                entity.Property(e => e.IndefiniteSanity)
                    .IsRequired();
                
                entity.Property(e => e.MajorWound)
                    .IsRequired();
                
                entity.Property(e => e.Unconscious)
                    .IsRequired();
                
                entity.Property(e=>e.Dying)
                    .IsRequired();

        });
        //CharacterSkillsModern
modelBuilder.Entity<CharacterSkillsModernEntity>(entity =>
{
    entity.ToTable("CharacterSkillsModern");
    entity.HasKey(e => e.Id);

    entity.Property(e => e.Id)
        .ValueGeneratedNever()
        .IsRequired();

    entity.Property(e => e.CharacterId)
        .IsRequired();

    entity.Property(e => e.CharacterStatsId)
        .IsRequired();

    entity.Property(e => e.Accounting).IsRequired();
    entity.Property(e => e.Anthropology).IsRequired();
    entity.Property(e => e.Appraise).IsRequired();
    entity.Property(e => e.Archaelogy).IsRequired();

    entity.Property(e => e.ArtAndCraftSpecialization)
        .HasMaxLength(128);

    entity.Property(e => e.ArtCraft).IsRequired();
    entity.Property(e => e.Charm).IsRequired();
    entity.Property(e => e.Climb).IsRequired();
    entity.Property(e => e.ComputerUse).IsRequired();
    entity.Property(e => e.CreditRating).IsRequired();
    entity.Property(e => e.CthulhuMythos).IsRequired();
    entity.Property(e => e.Disguise).IsRequired();
    entity.Property(e => e.Dodge).IsRequired();
    entity.Property(e => e.DriveAuto).IsRequired();
    entity.Property(e => e.EletricRepair).IsRequired();
    entity.Property(e => e.Eletronics).IsRequired();
    entity.Property(e => e.FastTalk).IsRequired();
    entity.Property(e => e.FightingAxe).IsRequired();
    entity.Property(e => e.FightingBrawl).IsRequired();
    entity.Property(e => e.FightingChainsaw).IsRequired();
    entity.Property(e => e.FightingFlail).IsRequired();
    entity.Property(e => e.FightingGarrote).IsRequired();
    entity.Property(e => e.FightingSpear).IsRequired();
    entity.Property(e => e.FightingSword).IsRequired();
    entity.Property(e => e.FightingWhip).IsRequired();
    entity.Property(e => e.FightingBow).IsRequired();
    entity.Property(e => e.HandGun).IsRequired();
    entity.Property(e => e.HeavyWeapons).IsRequired();
    entity.Property(e => e.Flamethrower).IsRequired();
    entity.Property(e => e.MachineGun).IsRequired();
    entity.Property(e => e.RifleShotgun).IsRequired();
    entity.Property(e => e.SubmachineGun).IsRequired();
    entity.Property(e => e.FirstAid).IsRequired();
    entity.Property(e => e.History).IsRequired();
    entity.Property(e => e.Intimidate).IsRequired();
    entity.Property(e => e.Jump).IsRequired();
    entity.Property(e => e.LanguageOtherValue).IsRequired();

    entity.Property(e => e.LanguageOtherSpecialization)
        .HasMaxLength(128);

    entity.Property(e => e.LanguageOwn).IsRequired();
    entity.Property(e => e.Law).IsRequired();
    entity.Property(e => e.LibraryUse).IsRequired();
    entity.Property(e => e.Listen).IsRequired();
    entity.Property(e => e.LockSmith).IsRequired();
    entity.Property(e => e.MechanicalRepair).IsRequired();
    entity.Property(e => e.Medicine).IsRequired();
    entity.Property(e => e.NaturalWorld).IsRequired();
    entity.Property(e => e.Navigate).IsRequired();
    entity.Property(e => e.Occult).IsRequired();
    entity.Property(e => e.OperateHeavyMachinery).IsRequired();
    entity.Property(e => e.Persuade).IsRequired();
    entity.Property(e => e.PilotAirCraft).IsRequired();
    entity.Property(e => e.Psychoanalysis).IsRequired();
    entity.Property(e => e.Psychology).IsRequired();
    entity.Property(e => e.Ride).IsRequired();
    entity.Property(e => e.Astronomy).IsRequired();
    entity.Property(e => e.Biology).IsRequired();
    entity.Property(e => e.Botany).IsRequired();
    entity.Property(e => e.Chemistry).IsRequired();
    entity.Property(e => e.Cryptography).IsRequired();
    entity.Property(e => e.Engineering).IsRequired();
    entity.Property(e => e.Forensics).IsRequired();
    entity.Property(e => e.Geology).IsRequired();
    entity.Property(e => e.Mathematics).IsRequired();
    entity.Property(e => e.Meteorology).IsRequired();
    entity.Property(e => e.Pharmacy).IsRequired();
    entity.Property(e => e.SleightOfHand).IsRequired();
    entity.Property(e => e.SpotHidden).IsRequired();
    entity.Property(e => e.Stealth).IsRequired();
    entity.Property(e => e.Survival).IsRequired();

    entity.Property(e => e.SurvivalSpecialization)
        .HasMaxLength(128);

    entity.Property(e => e.Swim).IsRequired();
    entity.Property(e => e.Throw).IsRequired();
    entity.Property(e => e.Track).IsRequired();
});
        
        
        //Room
        modelBuilder.Entity<RoomEntity>(entity =>
        {
            entity.ToTable("Rooms");
            entity.HasKey(e => e.Id);

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .IsRequired();

            entity.Property(e => e.RoomCode)
                .ValueGeneratedNever()
                .IsRequired();

            entity.Property(e => e.MasterId)
                .ValueGeneratedNever()
                .IsRequired();

            entity.Property(e => e.Name)
                .HasMaxLength(128)
                .IsRequired();

            entity.Property(e => e.Description)
                .HasMaxLength(255);

            entity.Property(e => e.UserIds);

            entity.Property(e => e.SheetEnum)
                .IsRequired();

            entity.Property(e => e.CreatedAt)
                .HasColumnName("created_at")
                .HasColumnType("timestamptz")
                .IsRequired();

            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updated_at")
                .HasColumnType("timestamptz");
        });
    }


}