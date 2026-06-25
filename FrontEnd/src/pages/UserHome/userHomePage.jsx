import { useState,useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import CharacterCard from "../../components/CharacterCard/characterCard";
import RoomCard from "../../components/RoomCard/roomCard";
import JoinRoomModal from "../../components/JoinRoomModal/joinRoomModal";
import { joinRoom, getRoomsByUserId } from "../../services/roomService";
import { getCharactersByUserId } from "../../services/characterService";
import { useAuth } from "../../contexts/AuthContext";
import "./userHomePage.css";

// O useReducer foi usado aqui como uma otimização de legibilidade no lugar do useState.
// A função redutora `(prev, next) => next` ignora o estado anterior e apenas assume o novo valor.
// Isso otimiza o código assíncrono do useEffect abaixo, permitindo passar o atualizador
// diretamente nos callbacks das Promises (ex: `.then(setCharacters)`), limpando a sintaxe
// e eliminando a necessidade de criar funções anônimas como `.then(data => setCharacters(data))`.

function UserHomePage() {
    const [activeTab, setActiveTab] = useReducer((_, value) => value, "characters");
    const [roomSubTab, setRoomSubTab] = useReducer((_, value) => value, "mastering");
    const [showJoinModal, setShowJoinModal] = useReducer((_, value) => value, false);
    const [characters, setCharacters] = useReducer((prev, next) => next, []);//Faz com que 
    const [loadingCharacters, setLoadingCharacters] = useReducer((prev, next) => next, true);
    const [rooms, setRooms] = useReducer((prev, next) => next, []);
    const [loadingRooms, setLoadingRooms] = useReducer((prev, next) => next, true);
    const navigate = useNavigate();
    const { userId } = useAuth();

    useEffect(() => {
        if (!userId) return;

        getCharactersByUserId(userId)
            .then(setCharacters)
            .catch(() => setCharacters([]))
            .finally(() => setLoadingCharacters(false));

        getRoomsByUserId()
            .then(setRooms)
            .catch(() => setRooms([]))
            .finally(() => setLoadingRooms(false));
    }, [userId]);

    async function handleJoinRoom(roomCode) {
        const room = await joinRoom(roomCode);
        setShowJoinModal(false);
        navigate(`/room/${room.id}`);
    }

    const masteringRooms = rooms.filter((room) => room.masterId === userId);
    const playingRooms = rooms.filter((room) => room.masterId !== userId);
    const visibleRooms = roomSubTab === "mastering" ? masteringRooms : playingRooms;

    return (
        <div className="page-layout">
            <Header />
            <main className="page-main">
                <div className="home-content">

                    <div className="home-tabs-row">
                        <div className="home-tabs">
                            <button
                                className={`home-tab ${activeTab === "characters" ? "active" : ""}`}
                                onClick={() => setActiveTab("characters")} type="button"
                            >
                                Investigadores
                            </button>
                            <button
                                className={`home-tab ${activeTab === "rooms" ? "active" : ""}`}
                                onClick={() => setActiveTab("rooms")} type="button"
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
                                            onClick={() => navigate(`/character/${character.id}`)} type="button"
                                        />
                                    ))}
                                </div>
                            )}

                            <button className="home-create-button" onClick={() => console.log("Criar investigador")} type="button">
                                Criar investigador
                            </button>
                            <p className="home-create-hint">Disponível em breve — entre em uma mesa primeiro</p>
                        </>
                    )}

                    {activeTab === "rooms" && (
                        <>
                            <div className="home-subtabs">
                                <button
                                    className={`home-subtab ${roomSubTab === "mastering" ? "active" : ""}`}
                                    onClick={() => setRoomSubTab("mastering")} type="button"
                                >
                                    Mestrando
                                </button>
                                <button
                                    className={`home-subtab ${roomSubTab === "playing" ? "active" : ""}`}
                                    onClick={() => setRoomSubTab("playing")}
                                >
                                    Participando
                                </button>
                            </div>

                            {loadingRooms ? (
                                <p className="home-empty-state">Carregando mesas...</p>
                            ) : visibleRooms.length === 0 ? (
                                <p className="home-empty-state">
                                    {roomSubTab === "mastering"
                                        ? "Você ainda não mestra nenhuma mesa."
                                        : "Você ainda não participa de nenhuma mesa como jogador."}
                                </p>
                            ) : (
                                <div className="character-grid">
                                    {visibleRooms.map((room) => (
                                        <RoomCard
                                            key={room.id}
                                            name={room.name}
                                            masterName={room.masterName}
                                            playerCount={room.playerCount}
                                            onClick={() => {
                                                const isMaster = room.masterId === userId;
                                                navigate(isMaster ? `/master/room/${room.id}` : `/room/${room.id}`);
                                            }} type="button"
                                        />
                                    ))}
                                </div>
                            )}

                            <button className="home-create-button" onClick={() => navigate("/user/create/room")}>
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