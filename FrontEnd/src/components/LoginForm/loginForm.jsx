import "./loginForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Entrar na conta</h1>
                <form className="login-form">
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

                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? "Entrando..." : "Entrar"}
                    </button>

                    <div className="login-footer">
                        <p>
                            Não tem uma conta?{' '}
                            <Link to="/register" className="register-link">Cadastre-se</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;