import React, { Fragment, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from './Tarea';

const ListadoTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // si no hay proyecto seleccionado, muestra mensaje
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el pryecto actual
    const [proyectoActual] = proyecto;

    const tareasProyectos = [
        { nombre:' Elegir plataforma', estado: true },
        { nombre:' Elegir colores', estado: false },
        { nombre:' Elegir plataforma de pago', estado: false },
        { nombre:' Elegir hosting', estado: true },
    ]

    const onClickEliminarProyecto = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">         
                {
                    tareasProyectos.length === 0 
                    ?<li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                    :tareasProyectos.map( tarea => (<Tarea key={tarea.nombre} tarea={tarea} />))

                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminarProyecto}
            >Eliminar Proyecto&times;</button>
        </Fragment>
    );
}
 
export default ListadoTarea;