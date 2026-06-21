import { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { rollD100 } from "../../utils/dice";
import "./StatRow.css";

function StatRow({ label, value, onChange, editable = true }) {
    const [rollResult, setRollResult] = useState(null);

    function handleRoll() {
        const result = rollD100(value);
        setRollResult(result);
        setTimeout(() => setRollResult(null), 2500);
    }

    const half = Math.floor(value / 2);
    const fifth = Math.floor(value / 5);

    return (
        <div className="stat-row">
            <span className="stat-row-label">{label}</span>
            <span className="stat-row-value">
                {editable ? (
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => onChange?.(Number(e.target.value))}
                        className="stat-row-input"
                    />
                ) : (
                    value
                )}
                /{half}/{fifth}
            </span>
            <button
                className="stat-row-dice"
                onClick={handleRoll}
                aria-label={`Rolar d100 para ${label}`}
                title={rollResult ? `${rollResult.value} - ${rollResult.label}` : "Rolar d100"}
            >
                <GiPerspectiveDiceSixFacesRandom />
            </button>
            {rollResult && (
                <span className={`stat-row-result stat-row-result-${rollResult.tier}`}>
                    {rollResult.value} · {rollResult.label}
                </span>
            )}
        </div>
    );
}

export default StatRow;