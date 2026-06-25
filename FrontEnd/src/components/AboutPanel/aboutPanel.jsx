import "./aboutPanel.css";

function AboutPanel({ annotations, onChange }) {
    return (
        <div className="sheet-panel">
            <p className="sheet-panel-title">Sobre</p>
            <textarea aria-label="Anotações"
                className="sheet-textarea"
                placeholder="Anotações"
                value={annotations ?? ""}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default AboutPanel;