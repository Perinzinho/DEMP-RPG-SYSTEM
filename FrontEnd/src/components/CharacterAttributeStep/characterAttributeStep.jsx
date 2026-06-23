import "./characterAttributeStep.css";

const ATTRIBUTE_FIELDS = [
    { key: "strength", label: "FOR" },
    { key: "constitution", label: "CON" },
    { key: "size", label: "TAM" },
    { key: "dexterity", label: "DES" },
    { key: "appearance", label: "APA" },
    { key: "intelligence", label: "INT" },
    { key: "power", label: "POD" },
    { key: "education", label: "EDU" },
];

function CharacterAttributesStep({ stats, onChange }) {
    return (
        <div className="attr-step">
            <p className="attr-step-hint">Distribua os pontos entre os atributos</p>

            <div className="attr-grid">
                {ATTRIBUTE_FIELDS.map((field) => (
                    <div key={field.key} className="attr-row">
                        <span>{field.label}</span>
                        <input
                            type="number"
                            value={stats[field.key]}
                            onChange={(e) => onChange(field.key, Number(e.target.value))}
                        />
                    </div>
                ))}
            </div>

            <p className="attr-step-hint">Recursos (defina manualmente por enquanto)</p>

            <div className="resource-grid">
                <div className="resource-field">
                    <label htmlFor="Vida">Vida</label>
                    <input
                        type="number"
                        value={stats.hitPoints}
                        onChange={(e) => onChange("hitPoints", Number(e.target.value))}
                    />
                </div>
                <div className="resource-field">
                    <label htmlFor="Sanidade">Sanidade</label>
                    <input
                        type="number"
                        value={stats.sanity}
                        onChange={(e) => onChange("sanity", Number(e.target.value))}
                    />
                </div>
                <div className="resource-field">
                    <label htmlFor="Magia">Magia</label>
                    <input
                        type="number"
                        value={stats.magicPoints}
                        onChange={(e) => onChange("magicPoints", Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
}

export default CharacterAttributesStep;