import StatRow from "../StatRow/StatRow";
import "./skillsPanel.css";

const SKILL_FIELDS = 
[
    { key: "accounting", label: "Contabilidade" },
    { key: "anthropology", label: "Antropologia" },
    { key: "appraise", label: "Avaliação" },
    { key: "archaelogy", label: "Arqueologia" },
    { key: "artCraft", label: "Arte e Ofício" },
    { key: "charm", label: "Charme" },
    { key: "climb", label: "Escalar" },
    { key: "computerUse", label: "Uso de Computador" },
    { key: "creditRating", label: "Nível de Crédito" },
    { key: "cthulhuMythos", label: "Mitos de Cthulhu" },
    { key: "disguise", label: "Disfarce" },
    { key: "dodge", label: "Esquivar" },
    { key: "driveAuto", label: "Dirigir" },
    { key: "eletricRepair", label: "Conserto Elétrico" },
    { key: "eletronics", label: "Eletrônica" },
    { key: "fastTalk", label: "Lábia" },
    

    { key: "fightingAxe", label: "Luta (Machado)" },
    { key: "fightingBrawl", label: "Luta (Briga)" },
    { key: "fightingChainsaw", label: "Luta (Motosserra)" },
    { key: "fightingFlail", label: "Luta (Mangual)" },
    { key: "fightingGarrote", label: "Luta (Garrote)" },
    { key: "fightingSpear", label: "Luta (Lança)" },
    { key: "fightingSword", label: "Luta (Espada)" },
    { key: "fightingWhip", label: "Luta (Chicote)" },
    

    { key: "fightingBow", label: "Armas de Fogo (Arco)" },
    { key: "handGun", label: "Armas de Fogo (Pistola)" },
    { key: "heavyWeapons", label: "Armas de Fogo (Armas Pesadas)" },
    { key: "flamethrower", label: "Armas de Fogo (Lança-chamas)" },
    { key: "machineGun", label: "Armas de Fogo (Metralhadora)" },
    { key: "rifleShotgun", label: "Armas de Fogo (Rifle/Espingarda)" },
    { key: "submachineGun", label: "Armas de Fogo (Submetralhadora)" },
    
    { key: "firstAid", label: "Primeiros Socorros" },
    { key: "history", label: "História" },
    { key: "intimidate", label: "Intimidação" },
    { key: "jump", label: "Saltar" },
    { key: "languageOwn", label: "Língua Nativa" },
    { key: "languageOtherValue", label: "Língua (Outra)" },
    { key: "law", label: "Direito" },
    { key: "libraryUse", label: "Uso de Biblioteca" },
    { key: "listen", label: "Escutar" },
    { key: "lockSmith", label: "Chaveiro" },
    { key: "mechanicalRepair", label: "Conserto Mecânico" },
    { key: "medicine", label: "Medicina" },
    { key: "naturalWorld", label: "Mundo Natural" },
    { key: "navigate", label: "Navegação" }, 
    { key: "occult", label: "Ocultismo" },
    { key: "operateHeavyMachinery", label: "Operar Máquinas Pesadas" },
    { key: "persuade", label: "Persuasão" },
    { key: "pilotAirCraft", label: "Pilotar (Aeronaves)" }, 
    { key: "psychoanalysis", label: "Psicanálise" },
    { key: "psychology", label: "Psicologia" },
    { key: "ride", label: "Cavalgar" },
    

    { key: "astronomy", label: "Ciência (Astronomia)" },
    { key: "biology", label: "Ciência (Biologia)" },
    { key: "botany", label: "Ciência (Botânica)" },
    { key: "chemistry", label: "Ciência (Química)" },
    { key: "cryptography", label: "Ciência (Criptografia)" },
    { key: "engineering", label: "Ciência (Engenharia)" },
    { key: "forensics", label: "Ciência (Forense)" },
    { key: "geology", label: "Ciência (Geologia)" },
    { key: "mathematics", label: "Ciência (Matemática)" },
    { key: "meteorology", label: "Ciência (Meteorologia)" },
    { key: "pharmacy", label: "Ciência (Farmácia)" },
    
    { key: "sleightOfHand", label: "Prestidigitação" },
    { key: "spotHidden", label: "Encontrar" },
    { key: "stealth", label: "Furtividade" },
    { key: "survival", label: "Sobrevivência" },
    { key: "swim", label: "Natação" },
    { key: "throw", label: "Arremessar" },
    { key: "track", label: "Rastrear" }
]

function SkillsPanel({ skills, onChange }) {
    return (
        <div className="sheet-skills-section">
            <p className="sheet-panel-title">Perícias</p>
            <div className="sheet-skills-grid">
                {SKILL_FIELDS.map((field) => (
                    <StatRow
                        key={field.key}
                        label={field.label}
                        value={skills[field.key] ?? 0}
                        onChange={(v) => onChange(field.key, v)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SkillsPanel;