import "./resourcesPanel.css";
import { ConditionFlags, hasCondition, toggleCondition } from "../../utils/conditions";


function ResourcesPanel({ stats, onChange }) {
    return (
        <div className="sheet-panel">
            <p className="sheet-panel-title">Recursos</p>

            <div className="sheet-resource-row">
                <span>Vida</span>
                <span>
                    <input aria-label="Vida atual"
                        type="number"
                        value={stats.currentHp}
                        onChange={(e) => onChange("currentHp", Number(e.target.value))}
                        className="sheet-resource-input"
                    />
                    /
                    <input aria-label="Pontos de Vida"
                        type="number"
                        value={stats.hitPoints}
                        onChange={(e) => onChange("hitPoints", Number(e.target.value))}
                        className="sheet-resource-input"
                    />
                </span>
            </div>

            <div className="sheet-resource-row">
                <span>Sanidade</span>
                <span>
                    <input aria-label="Sanidade atual"
                        type="number"
                        value={stats.currentSanity}
                        onChange={(e) => onChange("currentSanity", Number(e.target.value))}
                        className="sheet-resource-input"
                    />
                    /
                    <input aria-label="Pontos de Sanidade"
                        type="number"
                        value={stats.sanity}
                        onChange={(e) => onChange("sanity", Number(e.target.value))}
                        className="sheet-resource-input"
                    />
                </span>
            </div>

            <div className="sheet-resource-row">
                <span>Sorte</span>
                <input aria-label="Sorte"
                    type="number"
                    value={stats.luck}
                    onChange={(e) => onChange("luck", Number(e.target.value))}
                    className="sheet-resource-input-single"
                />
            </div>

            <div className="sheet-resource-row">
                <span>Movimento</span>
                <input aria-label="Movimento"
                    type="number"
                    value={stats.move}
                    onChange={(e) => onChange("move", Number(e.target.value))}
                    className="sheet-resource-input-single"
                />
            </div>

            <p className="sheet-panel-title sheet-panel-title-spaced">Status</p>

            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={hasCondition(stats.condition, ConditionFlags.TemporaryInsanity)}
                    onChange={(e) => onChange("condition", toggleCondition(stats.condition, ConditionFlags.TemporaryInsanity, e.target.checked))}
                />
                Sanidade Temporária
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={hasCondition(stats.condition, ConditionFlags.IndefiniteSanity)}
                    onChange={(e) => onChange("condition", toggleCondition(stats.condition, ConditionFlags.IndefiniteSanity, e.target.checked))}
                />
                Sanidade Indefinida
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={hasCondition(stats.condition, ConditionFlags.MajorWound)}
                    onChange={(e) => onChange("condition", toggleCondition(stats.condition, ConditionFlags.MajorWound, e.target.checked))}
                />
                Ferimento Grave
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={hasCondition(stats.condition, ConditionFlags.Unconscious)}
                    onChange={(e) => onChange("condition", toggleCondition(stats.condition, ConditionFlags.Unconscious, e.target.checked))}
                />
                Inconsciente
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={hasCondition(stats.condition, ConditionFlags.Dying)}
                    onChange={(e) => onChange("condition", toggleCondition(stats.condition, ConditionFlags.Dying, e.target.checked))}
                />
                Morrendo
            </label>
        </div>
    );
}

export default ResourcesPanel;