
import "./ProyectoComponent.css"
function ProyectoComponent() {
    const proyectos = [
        { nombre: "Proyecto 1", descripcion: "Descripción breve", enlace: "https://github.com/proyecto1" },
        { nombre: "Proyecto 2", descripcion: "Descripción breve", enlace: "https://github.com/proyecto2" }
    ];
    return (
        <section id="proyectos" className="proyectos-section">
            <h2 className="proyectos-title">Mis Proyectos</h2>
            <ul className="proyectos-list">
                {proyectos.map((proyecto, index) => (
                    <li key={index} className="proyecto-item">
                        <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
                        <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                        <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="proyecto-enlace">Ver Proyecto</a> </li>))}
            </ul>
        </section>
    )
}

export default ProyectoComponent
