using DEMP_RPG_API.Domain.Entities;
using DEMP_RPG_API.Domain.Exceptions.Character;
using DEMP_RPG_API.Domain.Ports;
using Microsoft.EntityFrameworkCore;

namespace DEMP_RPG_API.Infrastructure.Repositories;

public class CharacterSkillModernRepository:ICharacterSkillModernRepository
{
    private readonly AppDbContext _context;
    
    public CharacterSkillModernRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<CharacterSkillsModernEntity> CreateCharacterSkillModern(CharacterSkillsModernEntity characterSkillModern)
    {
        await _context.CharacterSkillsModern.AddAsync(characterSkillModern);
        await _context.SaveChangesAsync();
        return characterSkillModern;
    }

    public async Task<CharacterSkillsModernEntity?> GetCharacterSkillModernById(Guid id)
    {
        var result = await _context.CharacterSkillsModern.FirstOrDefaultAsync(c => c.Id == id);
        return result;
    }

    public async Task<CharacterSkillsModernEntity?> GetCharacterSkillModernByCharacterId(Guid characterId)
    {
        var result = await _context.CharacterSkillsModern.FirstOrDefaultAsync(c => c.CharacterId == characterId);
        return result;
    }

    public async Task<CharacterSkillsModernEntity> UpdateCharacterSkillModern(CharacterSkillsModernEntity skills)
    {
        var oldSkills = await _context.CharacterSkillsModern.FindAsync(skills.Id);
        if (oldSkills == null)
            throw new CharacterSkillsNotFoundException();

        oldSkills.Update(
            skills.Accounting, skills.Anthropology, skills.Appraise, skills.Archaelogy,
            skills.ArtAndCraftSpecialization, skills.ArtCraft, skills.Charm, skills.Climb,
            skills.ComputerUse, skills.CreditRating, skills.CthulhuMythos, skills.Disguise,
            skills.Dodge, skills.DriveAuto, skills.EletricRepair, skills.Eletronics,
            skills.FastTalk, skills.FightingAxe, skills.FightingBrawl, skills.FightingChainsaw,
            skills.FightingFlail, skills.FightingGarrote, skills.FightingSpear, skills.FightingSword,
            skills.FightingWhip, skills.FightingBow, skills.HandGun, skills.HeavyWeapons,
            skills.Flamethrower, skills.MachineGun, skills.RifleShotgun, skills.SubmachineGun,
            skills.FirstAid, skills.History, skills.Intimidate, skills.Jump,
            skills.LanguageOtherValue, skills.LanguageOtherSpecialization, skills.LanguageOwn,
            skills.Law, skills.LibraryUse, skills.Listen, skills.LockSmith,
            skills.MechanicalRepair, skills.Medicine, skills.NaturalWorld, skills.Navigate,
            skills.Occult, skills.OperateHeavyMachinery, skills.Persuade, skills.PilotAirCraft,
            skills.Psychoanalysis, skills.Psychology, skills.Ride, skills.Astronomy,
            skills.Biology, skills.Botany, skills.Chemistry, skills.Cryptography,
            skills.Engineering, skills.Forensics, skills.Geology, skills.Mathematics,
            skills.Meteorology, skills.Pharmacy, skills.Physics, skills.Zoology, skills.SleightOfHand, skills.SpotHidden,
            skills.Stealth, skills.Survival, skills.SurvivalSpecialization, skills.Swim,
            skills.Throw, skills.Track
        );
        
        await _context.SaveChangesAsync();
        return oldSkills;
        
    }

    public async Task DeleteCharacterSkillModern(Guid id)
    {
        var skills = await _context.CharacterSkillsModern.FindAsync(id);
        if (skills == null)
            throw new CharacterSkillsNotFoundException();
        
        _context.CharacterSkillsModern.Remove(skills);
        await _context.SaveChangesAsync();
    }
}