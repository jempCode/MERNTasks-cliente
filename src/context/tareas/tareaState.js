import React, { useReducer } from 'react';
import { ACTUALIZAR_TAREA, AGREGAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREAS_PROYECTO, TAREA_ACTUAL, VALIDAR_TAREA } from '../../types';
import TareaReducer from './tareaReducer';
import TareaContext from './tareasContext';

const TareaState = props => {
    const initialState= {
        tareas:[
            { id: 0,nombre:' Elegir plataforma', estado: true, proyectoId: 1},
            { id: 2,nombre:' Elegir colores', estado: false, proyectoId: 2},
            { id: 3,nombre:' Elegir plataforma de pago', estado: false, proyectoId: 3},
            { id: 4,nombre:' Elegir hosting', estado: true, proyectoId: 4},
            { id: 5,nombre:' Elegir plataforma', estado: true, proyectoId: 1},
            { id: 6,nombre:' Elegir colores', estado: false, proyectoId: 2},
            { id: 7,nombre:' Elegir plataforma de pago', estado: false, proyectoId: 3},
            { id: 8,nombre:' Elegir plataforma', estado: true, proyectoId: 4},
            { id: 9,nombre:' Elegir colores', estado: false, proyectoId: 1},
            { id: 10,nombre:' Elegir plataforma de pago', estado: false, proyectoId: 2},
            { id: 11,nombre:' Elegir plataforma', estado: true, proyectoId: 3},
            { id: 12,nombre:' Elegir colores', estado: false, proyectoId: 4},
            { id: 13,nombre:' Elegir plataforma de pago', estado: false, proyectoId: 3},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null 
    };

    // crear distpatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // crear las funciones

    // Obtener las tareas de un Proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    }

    // valida y muestra error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    }

    const eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        });
    }

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea, 
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState; 
