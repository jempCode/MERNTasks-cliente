import React, { Fragment } from 'react'
import Tarea from './Tarea';

const ListadoTarea = () => {

    const tareasProyectos = [
        { nombre:' Elegir plataforma', estado: true },
        { nombre:' Elegir colores', estado: false },
        { nombre:' Elegir plataforma de pago', estado: false },
        { nombre:' Elegir hosting', estado: true },
    ]

    return (
        <Fragment>
            <h2>Proyecto: Tienda virtual</h2>
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
            >Eliminar Proyecto&times;</button>
        </Fragment>
    );
}
 
export default ListadoTarea;