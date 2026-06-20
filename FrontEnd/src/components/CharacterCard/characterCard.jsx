import "./characterCard.css";

function CharacterCard({ name, age, occupation, roomName, avatarUrl, onClick }) {
    return (
        <div className="character-card" onClick={onClick}>
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
                <p className="character-card-detail">{occupation}</p>
                <p className="character-card-detail">Mesa: {roomName}</p>
            </div>

            <div className="character-card-action">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="character-card-eye">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </div>
        </div>
    );
}

export default CharacterCard;