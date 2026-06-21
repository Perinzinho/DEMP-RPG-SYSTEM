import "./characterSheetHeader.css";

function CharacterSheetHeader({ name, onNameChange, occupation, age }) {
    return (
        <div className="sheet-header">
            <div className="sheet-header-avatar">?</div>
            <div className="sheet-header-info">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => onNameChange(e.target.value)}
                    className="sheet-header-name"
                />
                <p className="sheet-header-meta">{occupation} &middot; {age} anos</p>
            </div>
        </div>
    );
}

export default CharacterSheetHeader;