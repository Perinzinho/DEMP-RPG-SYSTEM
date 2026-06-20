import { useState } from "react";
import "./joinRoomModal.css";

function JoinRoomModal({ onClose, onJoin }) {
    const [roomCode, setRoomCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await onJoin(roomCode);
        } catch (err) {
            setError("Código inválido ou mesa não encontrada");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="join-modal-overlay" onClick={onClose}>
            <div className="join-modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="join-modal-close" onClick={onClose} aria-label="Fechar">×</button>

                <h2 className="join-modal-title">Entrar em mesa</h2>

                <form className="join-modal-form" onSubmit={handleSubmit}>
                    <div className="join-modal-field">
                        <label htmlFor="roomCode">Código da mesa</label>
                        <input
                            type="text"
                            id="roomCode"
                            placeholder="000000"
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value)}
                            disabled={loading}
                            maxLength={6}
                        />
                    </div>

                    {error && <p className="join-modal-error">{error}</p>}

                    <button type="submit" className="join-modal-button" disabled={loading || !roomCode}>
                        {loading ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default JoinRoomModal;