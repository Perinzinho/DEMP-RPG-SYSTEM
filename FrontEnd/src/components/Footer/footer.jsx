import "./footer.css";

function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
                <p>DEMP RPG SYSTEM V26.6.5.2</p>
                <p>Desenvolvido por <a href="https://github.com/Perinzinho" target="_blank" rel="noopener noreferrer">Leonardo Perin</a> - 2026</p>
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