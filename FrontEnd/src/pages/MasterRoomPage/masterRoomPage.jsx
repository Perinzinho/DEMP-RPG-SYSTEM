import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import MasterCharacterCard from "../../components/MasterCharacterCard/masterCharacterCard";
import { getCharactersByRoomId } from "../../services/characterService";
import { getCharacterStatsByCharacterId } from "../../services/characterStatsService";
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

        async function loadCharactersWithStats() {
            try {
                const baseCharacters = await getCharactersByRoomId(roomId);

                const charactersWithStats = await Promise.all(
                    baseCharacters.map(async (character) => {
                        try {
                            const stats = await getCharacterStatsByCharacterId(character.id);
                            return {
                                ...character,
                                currentHp: stats.currentHp,
                                maxHp: stats.hitPoints,
                                currentSanity: stats.currentSanity,
                                maxSanity: stats.sanity,
                            };
                        } catch {
                            return { ...character, currentHp: 0, maxHp: 0, currentSanity: 0, maxSanity: 0 };
                        }
                    })
                );

                setCharacters(charactersWithStats);
            } catch {
                setCharacters([]);
            } finally {
                setLoadingCharacters(false);
            }
        }

        loadCharactersWithStats();
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