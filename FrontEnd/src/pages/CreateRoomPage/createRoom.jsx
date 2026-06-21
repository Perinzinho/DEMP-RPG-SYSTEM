import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { createRoom } from "../../services/roomService";
import { useAuth } from "../../contexts/AuthContext";
import "./createRoom.css";

function CreateRoomPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { userId } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const room = await createRoom(userId, name, description);
            navigate(`/master/room/${room.id}`);
        } catch (err) {
            setError('Erro ao criar mesa');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="create-room-layout">
            <Header />
            <main className="create-room-main">
                <div className="create-room-content">
                    <h1 className="create-room-title">Crie sua mesa</h1>
                    <form className="create-room-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome da mesa</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Descrição</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        {error && <p className="error">{error}</p>}

                        <button type="submit" disabled={loading}>
                            {loading ? 'Criando...' : 'Criar mesa'}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CreateRoomPage;