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
    }


}