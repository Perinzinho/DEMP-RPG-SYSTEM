using System.Text.Json;
using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Enums;
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

            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.Property(e => e.Username)
                .HasColumnName("username")
                .HasMaxLength(128)
                .IsRequired();

            entity.Property(e => e.Email)
                .HasMaxLength(128)
                .IsRequired()
                .HasConversion(
                    email => email.Value,
                    value => new EmailVO(value));

            entity.HasIndex(e => e.Email).IsUnique();
            
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

                entity.OwnsOne(e => e.BaseAttributes, vo =>
                    {
                        vo.ToJson();
                        vo.OwnsOne(b => b.Strength);
                        vo.OwnsOne(b => b.Education);
                        vo.OwnsOne(b => b.Appearance);
                        vo.OwnsOne(b => b.Constitution);
                        vo.OwnsOne(b => b.Dexterity);
                        vo.OwnsOne(b => b.Intelligence);
                        vo.OwnsOne(b => b.Size);
                        vo.OwnsOne(b => b.Power);
                    }
                );
                entity.OwnsOne(e => e.HitPoints, hp => hp.ToJson());
                entity.OwnsOne(e=>e.Sanity, san=>san.ToJson());
                
                entity.Property(e=>e.Luck)
                    .IsRequired();
                
                entity.Property(e => e.Move)
                    .IsRequired();
                
                entity.Property(e=>e.Build).
                    IsRequired();
                
                entity.Property(e=>e.DamageBonus)
                    .IsRequired();
                
                entity.Property(e=>e.Condition)
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
    
    entity.Property(e => e.Skill)
        .HasConversion(
            v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
            v => JsonSerializer.Deserialize<Dictionary<SkillEnum, AttributeSkillVO>>(v, (JsonSerializerOptions?)null)!
        );
    
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