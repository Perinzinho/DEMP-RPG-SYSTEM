import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import CharacterSheetHeader from "../../components/CharacterSheetHeader/characterSheetHeader";
import AttributesPanel from "../../components/AttributesPanel/attribuesPanel";
import ResourcesPanel from "../../components/ResourcesPanel/resourcesPanel";
import AboutPanel from "../../components/AboutPanel/aboutPanel";
import SkillsPanel from "../../components/SkillsPanel/skillsPanel";
import { getCharacterById, updateCharacter } from "../../services/characterService";
import { getCharacterStatsByCharacterId, updateCharacterStats } from "../../services/characterStatsService";
import { getCharacterSkillsByCharacterId, updateCharacterSkills } from "../../services/characterSkillsModernService";
import { OCCUPATIONS } from "../../utils/occupations";
import "./characterSheetPage.css";

function CharacterSheetPage() {
    const { characterId } = useParams();

    const [character, setCharacter] = useState(null);
    const [stats, setStats] = useState(null);
    const [skills, setSkills] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!characterId) return;

        async function loadAll() {
            try {
                const [characterData, statsData, skillsData] = await Promise.all([
                    getCharacterById(characterId),
                    getCharacterStatsByCharacterId(characterId),
                    getCharacterSkillsByCharacterId(characterId),
                ]);
                setCharacter(characterData);
                setStats(statsData);
                setSkills(skillsData);
            } catch (err) {
                setError("Não foi possível carregar a ficha.");
            } finally {
                setLoading(false);
            }
        }

        loadAll();
    }, [characterId]);

    function handleCharacterField(field, value) {
        setCharacter((prev) => ({ ...prev, [field]: value }));
    }

    function handleStatField(field, value) {
        setStats((prev) => ({ ...prev, [field]: value }));
    }

    function handleSkillField(field, value) {
        setSkills((prev) => ({ ...prev, [field]: value }));
    }

async function handleSave() {
    try {
        const occupationValue = typeof character.occupation === "number"
            ? character.occupation
            : OCCUPATIONS.find(o => o.label === character.occupation)?.value ?? Number(character.occupation);

        console.log("occupation raw:", character.occupation);
        console.log("occupation type:", typeof character.occupation);
        console.log("occupation value enviado:", occupationValue);

        await Promise.all([
            updateCharacter(character.id, {
                name: character.name,
                gender: character.gender,
                occupation: occupationValue,
                residence: character.residence,
                age: character.age,
                annotations: character.annotations,
            }),
            updateCharacterStats(stats.id, stats),
            updateCharacterSkills(skills.id, skills),
        ]);
        setError("");
    } catch (err) {
        setError("Erro ao salvar a ficha.");
    }
}

    const occupationLabel = OCCUPATIONS.find(o => o.value === character?.occupation)?.label ?? "";

    if (loading) {
        return (
            <div className="page-layout">
                <Header />
                <main className="page-main">
                    <p className="sheet-loading">Carregando ficha...</p>
                </main>
                <Footer />
            </div>
        );
    }

    if (!character || !stats || !skills) {
        return (
            <div className="page-layout">
                <Header />
                <main className="page-main">
                    <p className="sheet-loading">Ficha não encontrada.</p>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="page-layout">
            <Header />
            <main className="page-main">
                <div className="sheet-content">

                    <CharacterSheetHeader
                        name={character.name}
                        onNameChange={(v) => handleCharacterField("name", v)}
                        occupation={occupationLabel}
                        age={character.age}
                    />

                    <div className="sheet-top-grid">
                        <AttributesPanel stats={stats} onChange={handleStatField} />
                        <ResourcesPanel stats={stats} onChange={handleStatField} />
                        <AboutPanel
                            annotations={character.annotations}
                            onChange={(v) => handleCharacterField("annotations", v)}
                        />
                    </div>

                    <SkillsPanel skills={skills} onChange={handleSkillField} />

                    {error && <p className="sheet-error">{error}</p>}

                    <div className="sheet-save-row">
                        <button className="sheet-save-button" onClick={handleSave}>
                            Salvar Ficha
                        </button>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CharacterSheetPage;