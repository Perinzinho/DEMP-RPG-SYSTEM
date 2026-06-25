using DEMP_RPG_API.Application.DTOs.Request.CharacterSkillsModern;
using DEMP_RPG_API.Application.DTOs.Request.CharacterStats;
using DEMP_RPG_API.Domain.Enums;

namespace DEMP_RPG_API.Application.DTOs.Request.Character;

public record CreateFullCharacterRequestDTO(
    CreateCharacterRequestDTO Character,
    CreateCharacterStatsRequestDTO Stats,
    CreateCharacterSkillsModernRequestDTO Skills
    );
    
    //Nota- É possível agregar dtos menores em um grande DTO- é errado colocar + de 90 parametros em 1 unico dto(god DTO)