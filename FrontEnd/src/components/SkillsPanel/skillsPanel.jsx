import StatRow from "../StatRow/StatRow";
import "./skillsPanel.css";

const SKILL_FIELDS = [
    { key: "anthropology", label: "Antropologia" },
    { key: "handGun", label: "Armas de Fogo (Pistola)" },
    { key: "rifleShotgun", label: "Armas de Fogo (Rifle/Espingarda)" },
    { key: "archaelogy", label: "Arqueologia" },
    { key: "throw", label: "Arremessar" },
    { key: "artCraft", label: "Arte e Ofício" },
    { key: "appraise", label: "Avaliação" },
    { key: "charm", label: "Charme" },
    { key: "lockSmith", label: "Chaveiro" },
    { key: "science", label: "Ciência" },
    {key: "eletricRepair", label: "Conserto de Eletrônicos"},
    {key: "mechanicalRepair", label: "Conserto Mecânico"},
    {key: "contability", label: "Contabilidade"},
    {key: "law", label: "Direito"},
    { key: "driveAuto", label: "Dirigir" },
    { key: "disguise", label: "Disfarce" },
    {key: "eletronics", label: "Eletrônica"},
    {key: "spotHidden", label: "Encontrar"},
    {key: "climb", label: "Escalar"},
    {key: "listen", label: "Escutar"},
    {key: "dodge", label: "Esquivar"},
    {key: "stealth", label: "Furtividade"},
    {key: "history", label: "História"},
    {key: "intimidate", label: "Intimidação"},
    {key: "fastTalk", label: "Lábia"},
    {key: "languageOwn", label: "Língua Nativa"},
    {key: "languageOtherValue", label: "Língua (Outra)"},
    {key: "fightBrawl", label: "Luta (Corpo a Corpo)"},
    {key: "medicine", label: "Medicina"},
    {key: "cthulhuMythos", label: "Mitos de Cthulhu"},
    {key: "naturalWorld", label: "Natureza"},
    {key: "swim", label: "Natação"},
    {key: "creditRating", label: "Nível de Crédito"},
    {key: "occult", label: "Ocultismo"},
    {key: "operateHeavyMachinery", label: "Operar Máquinas Pesadas"},
    {key: "persuade", label: "Persuasão"},
    {key: "pilot", label: "Pilotar"},
    {key: "sleightOfHand", label: "Prestidigitação"},
    {key: "firstAid", label: "Primeiros Socorros"},
    {key: "psychoanalysis", label: "Psicanálise"},
    {key: "psychology", label: "Psicologia"},
    {key: "track", label: "Rastrear"},
    {key: "jump", label: "Saltar"},
    {key: "survival", label: "Sobrevivência"},
    {key: "libraryUse", label: "Uso de Biblioteca"},
    {key: "computerUse", label: "Uso de Computador"},
    {key: "ride", label: "Cavalgar"},
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