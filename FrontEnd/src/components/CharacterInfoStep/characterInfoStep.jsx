import "./characterInfoStep.css";
import { OCCUPATIONS } from "../../utils/occupations";

function CharacterInfoStep({ data, onChange }) {
    return (
        <div className="info-step">
            <div className="info-field">
                <label>Nome</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => onChange("name", e.target.value)}
                />
            </div>

            <div className="info-field">
                <label>Gênero</label>
                <input
                    type="text"
                    value={data.gender}
                    onChange={(e) => onChange("gender", e.target.value)}
                />
            </div>

            <div className="info-field">
                <label>Ocupação</label>
                <select
                    value={data.occupation}
                    onChange={(e) => onChange("occupation", Number(e.target.value))}
                    className="info-select"
                >
                    {OCCUPATIONS.map((occ) => (
                        <option key={occ.value} value={occ.value}>{occ.label}</option>
                    ))}
                </select>
            </div>

            <div className="info-field">
                <label>Residência</label>
                <input
                    type="text"
                    value={data.residence}
                    onChange={(e) => onChange("residence", e.target.value)}
                />
            </div>

            <div className="info-field">
                <label>Idade</label>
                <input
                    type="number"
                    value={data.age}
                    onChange={(e) => onChange("age", Number(e.target.value))}
                />
            </div>
        </div>
    );
}

export default CharacterInfoStep;