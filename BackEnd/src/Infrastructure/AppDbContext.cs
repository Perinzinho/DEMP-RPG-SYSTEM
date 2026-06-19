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
                .HasColumnType("datetime(6)")
                .IsRequired();

            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updated_at")
                .HasColumnType("datetime(6)");
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
            
            entity.Property(e => e.ItemIds);
            
            entity.Property(e => e.CreatedAt)
                .HasColumnName("created_at")
                .HasColumnType("datetime(6)")
                .IsRequired();
            
            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updated_at")
                .HasColumnType("datetime(6)");
        });
        
        //CharacterStats
        modelBuilder.Entity<CharacterStatsEntity>(entity =>
        {
                entity.ToTable("CharacterStats");
                entity.HasKey(e => e.Id);
                entity.HasKey(e => e.CharacterId);
                
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
        
        
        //Room
        modelBuilder.Entity<RoomEntity>(entity =>
        {
            entity.ToTable("Rooms");
            entity.HasKey(e => e.Id);
            entity.HasKey(e => e.RoomCode);

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
                .HasColumnType("datetime(6)")
                .IsRequired();

            entity.Property(e => e.UpdatedAt)
                .HasColumnName("updated_at")
                .HasColumnType("datetime(6)");
        });
    }


}