import * as React from "react";
import logo from "../../assets/DempLogo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/userAuth";

function Header({}) {
    const { user } = useAuth();
    const navigate = useNavigate();
    return(
        <header className="bg-[#010101] flex items-center px-6 py-2">
            <div className="ml-8" onClick={() => navigate("/user/home")} style={{ cursor: "pointer" }}>
                <img src={logo} alt="Demp Logo" className="h-24" />
            </div>

            <div className="flex-col ml-4">
                <h1 className="text-white text-2xl font-bold leading-none m-0">DEMP</h1>
                <p className="text-gray-300">Departamento de Extermínio de Manifestações paranormais</p>
            </div>

                <div className="flex items-center gap-[0.7vw] border border-[#063343] rounded w-[clamp(190px,15.5vw,275px)] h-[clamp(48px,7vh,78px)] px-[0.85vw] box-border ml-auto">
                <div className="w-[clamp(34px,3.3vw,60px)] h-[clamp(34px,3.3vw,60px)] border border-[#063343] my-[-1.5vh] rounded flex-shrink-0 flex items-center justify-center text-[clamp(16px,1.6vw,28px)] text-[#063343]">
                    ?
                </div>
                <div className="flex flex-col overflow-hidden">
                    <p className="text-[clamp(13px,1.3vw,22px)] text-[#f0f0f0] mx-[0.5vw] my-0 whitespace-nowrap overflow-hidden text-ellipsis">
                        {user?.username || "Carregando..."}
                    </p>
                    <p className="text-[clamp(9px,0.85vw,14px)] text-[#f0f0f0] italic mx-[0.5vw] mt-[0.2vh] mb-0 whitespace-nowrap overflow-hidden text-ellipsis">
                        {user?.email || ""}
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;