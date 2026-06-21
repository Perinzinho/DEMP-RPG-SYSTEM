import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import CharacterInfoStep from "../../components/CharacterInfoStep/CharacterInfoStep";
import CharacterAttributesStep from "../../components/CharacterAttributeStep/CharacterAttributeStep";
import CharacterSkillsStep from "../../components/CharacterSkillStep/CharacterSkillStep";
import { createCharacter } from "../../services/characterService";
import { createCharacterStats } from "../../services/characterStatsService";
import { createCharacterSkillsModern } from "../../services/characterSkillsModernService";
import { useAuth } from "../../contexts/AuthContext";
import "./createCharacterPage.css";

const INITIAL_INFO = {
    name: "",
    gender: "",
    occupation: 14,
    residence: "",
    age: 25,
};

const INITIAL_STATS = {
    strength: 50,
    constitution: 50,
    size: 50,
    dexterity: 50,
    appearance: 50,
    intelligence: 50,
    power: 50,
    education: 50,
    hitPoints: 10,
    sanity: 50,
    magicPoints: 10,
};

function CreateCharacterPage() {
    const { roomId } = useParams();
    const { userId } = useAuth();
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [info, setInfo] = useState(INITIAL_INFO);
    const [stats, setStats] = useState(INITIAL_STATS);
    const [skills, setSkills] = useState({});
    const [error, setError] = useState("");
    const [saving, setSaving] = useState(false);

    function handleInfoChange(field, value) {
        setInfo((prev) => ({ ...prev, [field]: value }));
    }

    function handleStatsChange(field, value) {
        setStats((prev) => ({ ...prev, [field]: value }));
    }

    function handleSkillsChange(field, value) {
        setSkills((prev) => ({ ...prev, [field]: value }));
    }

    async function handleCreate() {
        setError("");
        setSaving(true);

        try {

            const character = await createCharacter({
                userId,
                roomId,
                name: info.name,
                gender: info.gender,
                occupation: info.occupation,
                residence: info.residence,
                age: info.age,
                annotations: "",
                itemIds: [],
            });


            const characterStats = await createCharacterStats({
                characterId: character.id,
                strength: stats.strength,
                constitution: stats.constitution,
                size: stats.size,
                dexterity: stats.dexterity,
                appearance: stats.appearance,
                intelligence: stats.intelligence,
                power: stats.power,
                education: stats.education,
                hitPoints: stats.hitPoints,
                currentHp: stats.hitPoints,
                sanity: stats.sanity,
                currentSanity: stats.sanity,
                luck: 50,
                move: 8,
                build: 0,
                dodge: Math.floor(stats.dexterity / 2),
            });


            const characterSkills = await createCharacterSkillsModern({
                characterId: character.id,
                characterStatsId: characterStats.id,
                ...skills,
            });


            navigate(`/character/${character.id}`);
        } catch (err) {
            console.log("ERRO capturado:", err);
            setError("Erro ao criar personagem.");
        } finally {
            setSaving(false);
        }
    }

    function handleNext() {
        if (currentStep < 3) {
            setCurrentStep((prev) => prev + 1);
            return;
        }
        handleCreate();
    }

    function handleBack() {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    }

    return (
        <div className="page-layout">
            <Header />
            <main className="page-main">
                <div className="create-character-content">

                    <h1 className="create-character-title">Criar Investigador</h1>

                    <StepIndicator currentStep={currentStep} />

                    {currentStep === 1 && (
                        <CharacterInfoStep data={info} onChange={handleInfoChange} />
                    )}

                    {currentStep === 2 && (
                        <CharacterAttributesStep stats={stats} onChange={handleStatsChange} />
                    )}

                    {currentStep === 3 && (
                        <CharacterSkillsStep skills={skills} onChange={handleSkillsChange} />
                    )}

                    {error && <p className="create-character-error">{error}</p>}

                    <div className="create-character-nav">
                        <button
                            className="create-character-back-button"
                            onClick={handleBack}
                            style={{ visibility: currentStep === 1 ? "hidden" : "visible" }}
                            disabled={saving}
                        >
                            Voltar
                        </button>
                        <button className="create-character-next-button" onClick={handleNext} disabled={saving}>
                            {saving ? "Criando..." : currentStep === 3 ? "Criar Personagem" : "Próximo"}
                        </button>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CreateCharacterPage;