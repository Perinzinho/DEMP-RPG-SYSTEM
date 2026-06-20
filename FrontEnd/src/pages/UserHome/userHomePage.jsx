import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CharacterCard from "../../components/CharacterCard/characterCard";
import RoomCard from "../../components/RoomCard/roomCard";
import JoinRoomModal from "../../components/JoinRoomModal/joinRoomModal";
import { joinRoom } from "../../services/roomService";
import { getCharactersByUserId } from "../../services/characterService";
import { useAuth } from "../../contexts/AuthContext";
import "./userHomePage.css";

function UserHomePage() {
    const [activeTab, setActiveTab] = useState("characters");
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [loadingCharacters, setLoadingCharacters] = useState(true);
    const navigate = useNavigate();
    const { userId } = useAuth();

    useEffect(() => {
        if (!userId) return;

        getCharactersByUserId(userId)
            .then(setCharacters)
            .catch(() => setCharacters([]))
            .finally(() => setLoadingCharacters(false));
    }, [userId]);

    const rooms = [
        { id: 1, name: "Sussurros em Arkham", masterName: "Henrique", playerCount: 4 },
        { id: 2, name: "O Farol Negro", masterName: "Henrique", playerCount: 3 },
    ];

    async function handleJoinRoom(roomCode) {
        const room = await joinRoom(roomCode);
        setShowJoinModal(false);
        navigate(`/room/${room.id}`);
    }

    return (
        <div className="page-layout">
            <Header />
            <main className="page-main">
                <div className="home-content">

                    <div className="home-tabs-row">
                        <div className="home-tabs">
                            <button
                                className={`home-tab ${activeTab === "characters" ? "active" : ""}`}
                                onClick={() => setActiveTab("characters")}
                            >
                                Investigadores
                            </button>
                            <button
                                className={`home-tab ${activeTab === "rooms" ? "active" : ""}`}
                                onClick={() => setActiveTab("rooms")}
                            >
                                Mesas
                            </button>
                        </div>

                        {activeTab === "rooms" && (
                            <button className="home-join-button" onClick={() => setShowJoinModal(true)}>
                                Entrar em mesa
                            </button>
                        )}
                    </div>

                    {activeTab === "characters" && (
                        <>
                            {loadingCharacters ? (
                                <p className="home-empty-state">Carregando investigadores...</p>
                            ) : characters.length === 0 ? (
                                <p className="home-empty-state">Você ainda não tem nenhum investigador.</p>
                            ) : (
                                <div className="character-grid">
                                    {characters.map((character) => (
                                        <CharacterCard
                                            key={character.id}
                                            name={character.name}
                                            age={character.age}
                                            occupation={character.occupation}
                                            roomName={character.roomName}
                                            onClick={() => console.log("Abrir ficha de", character.name)}
                                        />
                                    ))}
                                </div>
                            )}

                            <button className="home-create-button" onClick={() => console.log("Criar investigador")}>
                                Criar investigador
                            </button>
                        </>
                    )}

                    {activeTab === "rooms" && (
                        <>
                            <div className="character-grid">
                                {rooms.map((room) => (
                                    <RoomCard
                                        key={room.id}
                                        name={room.name}
                                        masterName={room.masterName}
                                        playerCount={room.playerCount}
                                        onClick={() => console.log("Abrir mesa", room.name)}
                                    />
                                ))}
                            </div>

                            <button className="home-create-button" onClick={() => console.log("Criar mesa")}>
                                Criar mesa
                            </button>
                        </>
                    )}

                </div>
            </main>
            <Footer />

            {showJoinModal && (
                <JoinRoomModal
                    onClose={() => setShowJoinModal(false)}
                    onJoin={handleJoinRoom}
                />
            )}
        </div>
    );
}

export default UserHomePage;