import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function HomePage() {
    return (
        <div className="page-layout">
            <Header />
            <main className="page-main">
                {/* conteúdo da página */}
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;