import "./registerForm.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


function RegisterForm() {
    const[username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);

        try{
            await register(username, email, password);
            navigate('/login');
        }catch (err) {
            setError('Erro ao registrar usuário');
        }        finally {
            setLoading(false);
        }
    }


    return(<div className="register-container">
        <div className="register-card">
            <h1 className="register-title">Criar conta</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nome de usuário</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit" className="register-button" disabled={loading}>
                    {loading ? "Criando conta..." : "Criar conta"}
                </button>

                <div className="register-footer">
                    <p>
                        Já tem uma conta?{' '}
                        <Link to="/login" className="login-link">Entrar</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
    );



}

export default RegisterForm;