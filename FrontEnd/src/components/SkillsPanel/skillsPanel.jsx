import StatRow from "../StatRow/StatRow";
import "./skillsPanel.css";

const SKILL_FIELDS = [
    { key: "anthropology", label: "Antropologia" },
    { key: "fightingAxe", label: "Armas de Fogo (Pistola)" },
    { key: "fightingBow", label: "Armas de Fogo (Rifle/Espingarda)" },
    { key: "archaelogy", label: "Arqueologia" },
    { key: "throw", label: "Arremessar" },
    { key: "artCraft", label: "Arte e Ofício" },
    { key: "appraise", label: "Avaliação" },
    { key: "charm", label: "Charme" },
    { key: "lockSmith", label: "Chaveiro" },
    { key: "cthulhuMythos", label: "Mythos" },
    { key: "naturalWorld", label: "Mundo Natural" },
    { key: "swim", label: "Natação" },
    { key: "navigate", label: "Navegação" },
    { key: "creditRating", label: "Nível de Crédito" },
    { key: "occult", label: "Ocultismo" },
    { key: "operateHeavyMachinery", label: "Op. Maquinário" },
    { key: "persuade", label: "Persuasão" },
    { key: "listen", label: "Escutar" },
    { key: "dodge", label: "Esquivar" },
    { key: "stealth", label: "Furtividade" },
    { key: "history", label: "História" },
    { key: "intimidate", label: "Intimidação" },
    { key: "law", label: "Lábia" },
    { key: "languageOwn", label: "Língua Nativa" },
    { key: "languageOtherValue", label: "Língua (Outra)" },
    { key: "fightingBrawl", label: "Lutar (Briga)" },
    { key: "medicine", label: "Medicina" },
    { key: "psychoanalysis", label: "Psicanálise" },
    { key: "psychology", label: "Psicologia" },
    { key: "track", label: "Rastrear" },
    { key: "jump", label: "Saltar" },
    { key: "survival", label: "Sobrevivência" },
    { key: "libraryUse", label: "Usar Bibliotecas" },
    { key: "computerUse", label: "Usar Computadores" },
    { key: "pilotAirCraft", label: "Pilotar" },
    { key: "sleightOfHand", label: "Prestidigitação" },
    { key: "firstAid", label: "Primeiros Socorros" },
];

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