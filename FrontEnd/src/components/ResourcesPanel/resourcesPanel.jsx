import "./resourcesPanel.css";

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
                    checked={stats.temporaryInsanity}
                    onChange={(e) => onChange("temporaryInsanity", e.target.checked)}
                />
                Sanidade Temporária
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={stats.indefiniteSanity}
                    onChange={(e) => onChange("indefiniteSanity", e.target.checked)}
                />
                Sanidade Indefinida
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={stats.majorWound}
                    onChange={(e) => onChange("majorWound", e.target.checked)}
                />
                Ferimento Grave
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={stats.unconscious}
                    onChange={(e) => onChange("unconscious", e.target.checked)}
                />
                Inconsciente
            </label>
            <label className="sheet-status-checkbox">
                <input
                    type="checkbox"
                    checked={stats.dying}
                    onChange={(e) => onChange("dying", e.target.checked)}
                />
                Morrendo
            </label>
        </div>
    );
}

export default ResourcesPanel;