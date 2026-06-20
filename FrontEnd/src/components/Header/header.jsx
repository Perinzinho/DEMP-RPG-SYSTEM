import "./header.css";
import logo from "../../assets/images/DempLogo.png";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
    const { user } = useAuth();
    console.log("USER:", user);

    return (
        <header className="app-header">
            <div className="header-content">
                <div className="header-brand">
                    <img src={logo} alt="DEMP" className="header-logo" />
                    <div className="header-titles">
                        <h1 className="header-title">DEMP</h1>
                        <p className="header-subtitle">Departamento de Extermínio de Manifestações paranormais</p>
                    </div>
                </div>

                <div className="header-user">
                    <div className="header-avatar">?</div>
                    <div className="header-user-info">
                        <p className="header-user-name">{user?.userName || "Carregando..."}</p>
                        <p className="header-user-email">{user?.email || ""}</p>
                    </div>
                </div>
            </div>
            <div className="header-line"></div>
        </header>
    );
}

export default Header;