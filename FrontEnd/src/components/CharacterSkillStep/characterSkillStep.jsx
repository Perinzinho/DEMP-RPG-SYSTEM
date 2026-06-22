import "./characterSkillStep.css";

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
    {key: "naturalWorld", label: "Mundo Natural"},
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