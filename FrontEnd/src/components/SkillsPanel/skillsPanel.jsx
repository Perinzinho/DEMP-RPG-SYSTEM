import StatRow from "../StatRow/StatRow";
import {sortedSkillFields} from "../../utils/skillFields";
import "./skillsPanel.css";

function SkillsPanel({ skills, onChange }) {
    return (
        <div className="sheet-skills-section">
            <p className="sheet-panel-title">Perícias</p>
            <div className="sheet-skills-grid">
                {sortedSkillFields.map((field) => (
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