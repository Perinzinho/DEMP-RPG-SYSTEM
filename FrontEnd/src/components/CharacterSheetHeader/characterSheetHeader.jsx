import "./characterSheetHeader.css";
import { OCCUPATIONS } from "../../utils/occupations";

function CharacterSheetHeader({ name, onNameChange, occupation, age }) {
    const occupationLabel = OCCUPATIONS.find((o) => o.value === occupation)?.label ?? occupation;

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
                <p className="sheet-header-meta">{occupationLabel} &middot; {age} anos</p>
            </div>
        </div>
    );
}

export default CharacterSheetHeader;