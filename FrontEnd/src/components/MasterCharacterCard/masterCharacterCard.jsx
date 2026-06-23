import { FaHeart, FaEye } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import "./masterCharacterCard.css";

function MasterCharacterCard({ characterName, playerName, currentHp, maxHp, currentSanity, maxSanity, avatarUrl, onClick }) {
    return (
        <div className="master-character-card" onClick={onClick} onKeyPress={onClick}>
            <div className="master-character-avatar">
                {avatarUrl ? (
                    <img src={avatarUrl} alt={characterName} className="master-character-avatar-img" />
                ) : (
                    <span className="master-character-avatar-placeholder">?</span>
                )}
            </div>

            <div className="master-character-info">
                <p className="master-character-name">{characterName}</p>

                <div className="master-character-stat">
                    <FaHeart className="master-character-icon" />
                    <span>{currentHp}/{maxHp}</span>
                </div>

                <div className="master-character-stat">
                    <GiBrain className="master-character-icon" />
                    <span>{currentSanity}/{maxSanity}</span>
                </div>

                <p className="master-character-detail">{playerName}</p>
            </div>

            <div className="master-character-action">
                <FaEye className="master-character-eye" />
            </div>
        </div>
    );
}

export default MasterCharacterCard;