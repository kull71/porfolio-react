import BotonComponent from "./BotonComponent"
import "./InicioComponent.css"
import decorativa from "../assets/images/decorativa.jpg";

function InicioComponent() {
    return (
        <section id="inicio">

            <div className="inicio-content">
                <h1>¡Hola! Soy Antonio Ferrer Mingorance</h1>
                <p>
                    Desarrollador web apasionado por crear soluciones innovadoras que
                    transformen ideas en realidad. Explora mis proyectos y conoce más sobre mí.
                </p>
                <BotonComponent></BotonComponent>
            </div>
            <div className="inicio-image">
                <img src={decorativa} alt="Decoración de inicio" className="decorative-img" />
            </div>
        </section>
    )
}

export default InicioComponent
