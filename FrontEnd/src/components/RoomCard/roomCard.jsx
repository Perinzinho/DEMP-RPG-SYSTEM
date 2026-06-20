import "./roomCard.css";

function RoomCard({ name, masterName, playerCount, onClick }) {
    return (
        <div className="room-card" onClick={onClick}>
            <div className="room-card-avatar">
                <span className="room-card-avatar-placeholder">?</span>
            </div>

            <div className="room-card-info">
                <p className="room-card-name">{name}</p>
                <p className="room-card-detail">Mestre: {masterName}</p>
                <p className="room-card-detail">{playerCount} jogadores</p>
            </div>

            <div className="room-card-action">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="room-card-eye">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </div>
        </div>
    );
}

export default RoomCard;