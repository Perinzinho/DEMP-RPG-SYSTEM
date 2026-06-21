import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { getCharactersByRoomId } from "../../services/characterService";
import { useAuth } from "../../contexts/AuthContext";
import "./playerRoomPage.css";

function PlayerRoomPage() {
    const { roomId } = useParams();
    const { userId } = useAuth();
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!roomId || !userId) return;

        getCharactersByRoomId(roomId)
            .then((characters) => {
                const own = characters.find((c) => c.userId === userId);
                setCharacter(own ?? null);
            })
            .catch(() => setCharacter(null))
            .finally(() => setLoading(false));
    }, [roomId, userId]);

    return (
        <div className="page-layout">
            <Header />
            <main className="page-main">
                <div className="player-room-content">

                    {loading ? (
                        <p className="player-room-loading">Carregando...</p>
                    ) : !character ? (
                        <div className="player-room-empty">
                            <p className="player-room-empty-text">
                                Parece que você ainda não tem nenhum investigador nessa mesa...
                            </p>
                            <button
                                className="player-room-create-button"
                                onClick={() => navigate(`/room/${roomId}/create-character`)}
                            >
                                Criar Investigador
                            </button>
                        </div>
                    ) : (
                        <p className="player-room-loading">
                            {/* Aqui entra a ficha do personagem quando ele existir */}
                            Personagem: {character.name}
                        </p>
                    )}

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default PlayerRoomPage;