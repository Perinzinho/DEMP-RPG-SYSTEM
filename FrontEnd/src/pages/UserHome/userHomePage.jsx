import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import RoomCard from "../../components/RoomCard/RoomCard";
import JoinRoomModal from "../../components/JoinRoomModal/joinRoomModal";
import { joinRoom } from "../../services/roomService";
import "./userHomePage.css";

function UserHomePage() {
    const [activeTab, setActiveTab] = useState("characters");
    const [showJoinModal, setShowJoinModal] = useState(false);
    const navigate = useNavigate();

    const characters = [
        { id: 1, name: "Eleanor Wade", age: 36, occupation: "Atleta", roomName: "DEMP" },
        { id: 2, name: "Jonathan Crane", age: 42, occupation: "Detetive", roomName: "O Farol Negro" },
        { id: 3, name: "Margaret Soto", age: 29, occupation: "Jornalista", roomName: "Sussurros em Arkham" },
    ];

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