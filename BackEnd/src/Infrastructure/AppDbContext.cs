using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.ValueObjects.Character;
using DEMP_RPG_API.Domain.ValueObjects.User;
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
                .IsRequired()
                .HasConversion(email => email.Value,
                    value => new EmailVO(value));
            
            entity.Property(e=>e.PasswordHash)
                .HasColumnName("password_hash")
                .HasMaxLength(255)
                .IsRequired()
                .HasConversion(password => password.Value,
                    value => new PasswordVO(value));
            
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
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value) );
                
                entity.Property(e => e.Dexterity)
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value) );
                
                entity.Property(e => e.Intelligence)
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value));
                
                entity.Property(e => e.Intelligence)
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value));
                
                entity.Property(e => e.Size)
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value));
                
                entity.Property(e => e.Power)
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value));
                
                entity.Property(e => e.Appearance)
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value));

                entity.Property(e => e.Education)
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value));

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
                    .IsRequired()
                    .HasConversion(s =>s.Value,
                        value => new AttributeSkillVO(value));
                
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

entity.Property(e => e.Accounting)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Anthropology)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Appraise)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Archaelogy)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.ArtAndCraftSpecialization)
    .HasMaxLength(128);

entity.Property(e => e.ArtCraft)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Charm)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Climb)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.ComputerUse)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.CreditRating)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.CthulhuMythos)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Disguise)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Dodge)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.DriveAuto)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.EletricRepair)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Eletronics)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FastTalk)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingAxe)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingBrawl)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingChainsaw)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingFlail)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingGarrote)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingSpear)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingSword)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingWhip)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FightingBow)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.HandGun)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.HeavyWeapons)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Flamethrower)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.MachineGun)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.RifleShotgun)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.SubmachineGun)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.FirstAid)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.History)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Intimidate)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Jump)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.LanguageOtherValue)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.LanguageOtherSpecialization)
    .HasMaxLength(128);

entity.Property(e => e.LanguageOwn)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Law)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.LibraryUse)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Listen)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.LockSmith)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.MechanicalRepair)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Medicine)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.NaturalWorld)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Navigate)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Occult)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.OperateHeavyMachinery)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Persuade)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.PilotAirCraft)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Psychoanalysis)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Psychology)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Ride)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Astronomy)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Biology)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Botany)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Chemistry)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Cryptography)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Engineering)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Forensics)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Geology)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Mathematics)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Meteorology)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Pharmacy)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.SleightOfHand)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.SpotHidden)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Stealth)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Survival)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.SurvivalSpecialization)
    .HasMaxLength(128);

entity.Property(e => e.Swim)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Throw)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));

entity.Property(e => e.Track)
    .HasConversion(s => s.Value, value => new AttributeSkillVO(value));
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