using System.Text;
using System.Text.Json.Serialization;
using DEMP_RPG_API.Application.UseCases.Character;
using DEMP_RPG_API.Application.UseCases.CharacterSkillsModern;
using DEMP_RPG_API.Application.UseCases.CharacterStats;
using DEMP_RPG_API.Application.UseCases.Room;
using DEMP_RPG_API.Application.UseCases.User;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using DEMP_RPG_API.Domain.Ports;
using DEMP_RPG_API.Infrastructure;
using DEMP_RPG_API.Infrastructure.Repositories;
using DEMP_RPG_API.Infrastructure.Services;
using Microsoft.OpenApi;
using Microsoft.EntityFrameworkCore;

DotNetEnv.Env.Load();
Console.WriteLine($"DB_CONNECTION: {Environment.GetEnvironmentVariable("DB_CONNECTION")}");

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Cole apenas o token, sem o prefixo Bearer"
    });

    options.AddSecurityRequirement(document => new OpenApiSecurityRequirement
    {
        [new OpenApiSecuritySchemeReference("Bearer", document)] = new List<string>()
    });
});

// DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        Environment.GetEnvironmentVariable("DB_CONNECTION"),
        npgsqlOptions =>
        {
            npgsqlOptions.CommandTimeout(30);
        }
    ));

// Serviços
builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();
builder.Services.AddScoped<IPasswordHasher, BcryptPasswordHasher>();

//User
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<LoginUseCase>();
builder.Services.AddScoped<RegisterUseCase>();
builder.Services.AddScoped<GetAllUsersUseCase>();
builder.Services.AddScoped<GetUserByIdUseCase>();

//Character
builder.Services.AddScoped<ICharacterRepository, CharacterRepository>();
builder.Services.AddScoped<CreateCharacterUseCase>();
builder.Services.AddScoped<DeleteCharacterUseCase>();
builder.Services.AddScoped<UpdateCharacterUseCase>();
builder.Services.AddScoped<GetAllCharactersUseCase>();
builder.Services.AddScoped<GetCharacterByIdUseCase>();
builder.Services.AddScoped<GetCharacterByUserIdUseCase>();
builder.Services.AddScoped<GetCharacterByRoomIdUseCase>();

//CharacterStats
builder.Services.AddScoped<ICharacterStatsRepository, CharacterStatsRepository>();
builder.Services.AddScoped<CreateCharacterStatsUseCase>();
builder.Services.AddScoped<DeleteCharacterStatsUseCase>();
builder.Services.AddScoped<UpdateCharacterStatsUseCase>();
builder.Services.AddScoped<GetCharacterStatsByCharacterIdUseCase>();
builder.Services.AddScoped<GetCharacterStatsById>();

//CharacterSkills-Modern
builder.Services.AddScoped<ICharacterSkillModernRepository, CharacterSkillModernRepository>();
builder.Services.AddScoped<CreateCharacterSkillsModernUseCase>();
builder.Services.AddScoped<DeleteCharacterSkillsUseCase>();
builder.Services.AddScoped<UpdateCharacterSkillsUseCase>();
builder.Services.AddScoped<GetCharacterSkillsByCharacterIdUseCase>();
builder.Services.AddScoped<GetCharacterSkillsModernByIdUseCase>();

//Room
builder.Services.AddScoped<IRoomRepository, RoomRepository>();
builder.Services.AddScoped<CreateRoomUseCase>();
builder.Services.AddScoped<UpdateRoomUseCase>();
builder.Services.AddScoped<DeleteRoomUseCase>();
builder.Services.AddScoped<GetAllRoomsUseCase>();
builder.Services.AddScoped<GetRoomByIdUseCase>();
builder.Services.AddScoped<GetRoomByCodeUseCase>();
builder.Services.AddScoped<JoinRoomUseCase>();
builder.Services.AddScoped<GetRoomsByUserIdUseCase>();

// JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = Environment.GetEnvironmentVariable("JWT_TOKEN_ISSUER"),
            ValidAudience = Environment.GetEnvironmentVariable("JWT_TOKEN_AUDIENCE"),
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET")!))
        };
    });


builder.Services.AddAuthorization();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173",
                "https://demprpgsystem.vercel.app"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Swagger apenas em desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");

app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";
        await context.Response.WriteAsync("{\"error\": \"Internal Server Error\"}");
    });
});

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();