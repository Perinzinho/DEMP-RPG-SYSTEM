import "./footer.css";

function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
                <p>DEMP RPG SYSTEM V26.6.5</p>
                <p>Desenvolvido por Leonardo Perin - 2026</p>
                <p>
                    Encontrou algum problema? Ou tem uma ideia de sugestão{' '}
                    <a href="https://forms.gle/jjdWPYQYPupFcY8K6" target="_blank" rel="noopener noreferrer">
                        Clique aqui
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;