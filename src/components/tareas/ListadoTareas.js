import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareasContext';
import Tarea from './Tarea';

const ListadoTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;

    // si no hay proyecto seleccionado, muestra mensaje
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el pryecto actual
    const [proyectoActual] = proyecto;


    const onClickEliminarProyecto = () => {
        eliminarProyecto(proyectoActual._id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">         
                {
                    tareasproyecto.length === 0 
                    ?<li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                    :
                    <TransitionGroup>
                        {
                            tareasproyecto.map( tarea => (
                                <CSSTransition 
                                    key={tarea._id}
                                    timeout={200} 
                                    classNames="tarea"
                                >
                                    <Tarea
                                        tarea={tarea} 
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>

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