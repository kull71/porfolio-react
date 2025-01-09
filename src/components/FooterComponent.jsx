import "./FooterComponent.css"

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>Contacto</h3>
                <p>Nombre: Antonio Ferrer</p>
                <p>Email: juan.perez@example.com</p>
                <p>Teléfono: +123 456 789</p>
            </div>

            <div className="footer-column">
                <h3>Redes Sociales</h3>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>

            <div className="footer-column">
                <h3>Proyectos</h3>
                <a href="https://github.com/proyecto1">Proyecto 1</a>
                <a href="https://github.com/proyecto2">Proyecto 2</a>
                <a href="#proyecto3">Proyecto 3</a>
            </div>
        </footer>
    )
}

export default FooterComponent;