import { FaEye } from "react-icons/fa";
import { OCCUPATIONS } from "../../utils/occupations";
import "./characterCard.css";

function CharacterCard({ name, age, occupation, roomName, avatarUrl, onClick }) {
    const occupationLabel = OCCUPATIONS.find((o) => o.value === occupation)?.label ?? occupation;

    return (
        <div className="character-card" onClick={onClick} onKeyPress={onClick}>
            <div className="character-card-avatar">
                {avatarUrl ? (
                    <img src={avatarUrl} alt={name} className="character-card-avatar-img" />
                ) : (
                    <span className="character-card-avatar-placeholder">?</span>
                )}
            </div>

            <div className="character-card-info">
                <p className="character-card-name">{name}</p>
                <p className="character-card-detail">{age} anos</p>
                <p className="character-card-detail">{occupationLabel}</p>
                <p className="character-card-detail">Mesa: {roomName}</p>
            </div>

            <div className="character-card-action">
                <FaEye className="character-card-eye" />
            </div>
        </div>
    );
}

export default CharacterCard;