import "./characterSkillStep.css";

const SKILL_FIELDS = [
    { key: "anthropology", label: "Antropologia" },
    { key: "appraise", label: "Avaliar" },
    { key: "archaelogy", label: "Arqueologia" },
    { key: "lockSmith", label: "Arrombamento" },
    { key: "artCraft", label: "Arte e Ofício" },
    { key: "charm", label: "Charme" },
    { key: "driveAuto", label: "Conduzir Automóvel" },
    { key: "cthulhuMythos", label: "Mythos de Cthulhu" },
    { key: "eletricRepair", label: "Consertos Elétricos" },
    { key: "mechanicalRepair", label: "Consertos Mecânicos" },
    { key: "accounting", label: "Contabilidade" },
    { key: "disguise", label: "Disfarce" },
    { key: "spotHidden", label: "Encontrar" },
    { key: "climb", label: "Escalar" },
    { key: "listen", label: "Escutar" },
    { key: "dodge", label: "Esquivar" },
    { key: "stealth", label: "Furtividade" },
    { key: "history", label: "História" },
    { key: "intimidate", label: "Intimidação" },
    { key: "law", label: "Leis" },
    { key: "languageOwn", label: "Língua Nativa" },
    { key: "languageOtherValue", label: "Língua (Outra)" },
    { key: "fightingBrawl", label: "Lutar (Briga)" },
    { key: "medicine", label: "Medicina" },
    { key: "naturalWorld", label: "Mundo Natural" },
    { key: "swim", label: "Nadar" },
    { key: "navigate", label: "Navegação" },
    { key: "occult", label: "Ocultismo" },
    { key: "operateHeavyMachinery", label: "Op. Maquinário" },
    { key: "persuade", label: "Persuasão" },
    { key: "pilotAirCraft", label: "Pilotar" },
    { key: "firstAid", label: "Primeiros Socorros" },
    { key: "psychoanalysis", label: "Psicanálise" },
    { key: "psychology", label: "Psicologia" },
    { key: "track", label: "Rastrear" },
    { key: "jump", label: "Saltar" },
    { key: "survival", label: "Sobrevivência" },
    { key: "libraryUse", label: "Uso de Bibliotecas" },
    { key: "computerUse", label: "Uso de Computadores" },
];

function CharacterSkillsStep({ skills, onChange }) {
    return (
        <div className="skills-step">
            <p className="skills-step-hint">Distribua pontos de perícia entre as opções abaixo</p>

            <div className="skills-step-grid">
                {SKILL_FIELDS.map((field) => (
                    <div key={field.key} className="skills-step-row">
                        <span>{field.label}</span>
                        <input
                            type="number"
                            value={skills[field.key] ?? 0}
                            onChange={(e) => onChange(field.key, Number(e.target.value))}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharacterSkillsStep;