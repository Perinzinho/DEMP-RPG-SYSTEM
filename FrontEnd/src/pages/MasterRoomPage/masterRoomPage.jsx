import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import MasterCharacterCard from "../../components/MasterCharacterCard/MasterCharacterCard";
import { getCharactersByRoomId } from "../../services/characterService";
import { getRoomById } from "../../services/roomService";
import "./masterRoomPage.css";

function MasterRoomPage() {
    const { roomId } = useParams();
    const [room, setRoom] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [loadingRoom, setLoadingRoom] = useState(true);
    const [loadingCharacters, setLoadingCharacters] = useState(true);

    useEffect(() => {
        if (!roomId) return;

        getRoomById(roomId)
            .then(setRoom)
            .catch(() => setRoom(null))
            .finally(() => setLoadingRoom(false));

        getCharactersByRoomId(roomId)
            .then(setCharacters)
            .catch(() => setCharacters([]))
            .finally(() => setLoadingCharacters(false));
    }, [roomId]);

    return (
        <div className="page-layout">
            <Header />
            <main className="page-main">
                <div className="master-room-content">

                    <div className="master-room-left">
                        {/* Reservado para conteúdo futuro da mesa */}
                    </div>

                    <div className="master-room-characters-panel">
                        <h2 className="master-room-panel-title">Personagens</h2>

                        {loadingCharacters ? (
                            <p className="master-room-empty">Carregando personagens...</p>
                        ) : characters.length === 0 ? (
                            <p className="master-room-empty">Nenhum personagem nesta mesa ainda.</p>
                        ) : (
                            <div className="master-room-characters-grid">
                                {characters.map((character) => (
                                    <MasterCharacterCard
                                        key={character.id}
                                        characterName={character.name}
                                        playerName={character.playerName}
                                        currentHp={character.currentHp}
                                        maxHp={character.maxHp}
                                        currentSanity={character.currentSanity}
                                        maxSanity={character.maxSanity}
                                        onClick={() => console.log("Abrir ficha de", character.name)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MasterRoomPage;