import StatRow from "../StatRow/StatRow";

const ATTRIBUTE_FIELDS = [
    { key: "strength", label: "For" },
    { key: "constitution", label: "Con" },
    { key: "size", label: "Tam" },
    { key: "dexterity", label: "Des" },
    { key: "appearance", label: "Apa" },
    { key: "intelligence", label: "Int" },
    { key: "power", label: "Pod" },
    { key: "education", label: "Edu" },
];

function AttributesPanel({ stats, onChange }) {
    return (
        <div className="sheet-panel">
            <p className="sheet-panel-title">Atributos</p>
            {ATTRIBUTE_FIELDS.map((field) => (
                <StatRow
                    key={field.key}
                    label={field.label}
                    value={stats[field.key] ?? 0}
                    onChange={(v) => onChange(field.key, v)}
                />
            ))}
            <StatRow
                label="Esquiva"
                value={stats.dodge ?? 0}
                onChange={(v) => onChange("dodge", v)}
            />
        </div>
    );
}

export default AttributesPanel;