import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareasContext';


const Proyecto = ({proyecto}) => {

    // obteniendo el state del proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // onteniendo el state de tareas
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } =  tareasContext;


    const seleccionarProyecto = proyectoId => {
        proyectoActual(proyectoId); // fijar el pryecto actual
        obtenerTareas(proyectoId);// Filtrar las tareas cuando se da click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;