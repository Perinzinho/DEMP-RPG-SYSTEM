import "./characterSkillStep.css";
import {SkillFields} from "../../utils/skillFields";



function CharacterSkillsStep({ skills, onChange }) {
    return (
        <div className="skills-step">
            <p className="skills-step-hint">Distribua pontos de perícia entre as opções abaixo</p>

            <div className="skills-step-grid">
                {SkillFields.map((field) => (
                    <div key={field.key} className="skills-step-row">
                        <span>{field.label}</span>
                        <input aria-label={field.label}
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