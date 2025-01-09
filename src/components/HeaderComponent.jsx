import logo from '../assets/images/logo2.png';
import "./HeaderComponent.css"
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from '../../node_modules/react-icons/fa';


function HeaderComponent() {
    return (
        <header>
            <nav>
                <div className="logo-container">
                    <img src={logo} alt="Logo Personalizado" className="logo" />
                </div>
                <ul className="nav-list">
                    <li><a href="#inicio" className="nav-link">Inicio</a></li>
                    <li><a href="#sobre-mi" className="nav-link">Sobre mí</a></li>
                    <li><a href="#proyectos" className="nav-link">Proyectos</a></li>
                    <li><a href="#contacto" className="nav-link">Contacto</a></li>
                </ul>
                <div className="social-icons">
                    <a href="https://www.facebook.com" className="social-link"><FaFacebook /></a>
                    <a href="https://www.twitter.com" className="social-link"><FaTwitter /></a>
                    <a href="https://www.linkedin.com" className="social-link"><FaLinkedin /></a>
                    <a href="https://www.github.com" className="social-link"><FaGithub /></a>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent;