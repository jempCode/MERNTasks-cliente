import React, { useReducer } from 'react';
import { ACTUALIZAR_TAREA, AGREGAR_TAREA, ELIMINAR_TAREA, LIMPIAR_TAREA, TAREAS_PROYECTO, TAREA_ACTUAL, VALIDAR_TAREA } from '../../types';
import TareaReducer from './tareaReducer';
import TareaContext from './tareasContext';
import clienteAxios from '../../config/axios';
;
const TareaState = props => {
    const initialState= {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null 
    };

    // crear distpatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // crear las funciones

    // Obtener las tareas de un Proyecto
    const obtenerTareas = async proyecto => {
       try {
        const resultado = await clienteAxios.get('/api/tareas',{params: {proyecto}});
        console.log(resultado.data);
        dispatch({
            type: TAREAS_PROYECTO,
            payload: resultado.data.tareas
        })
       } catch (error) {
           console.log(error);
       }
    }

    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado);

            dispatch({
                type: AGREGAR_TAREA,
                payload: resultado.data.tarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    // valida y muestra error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }


    const eliminarTarea = async (id,proyecto) => {
        try {

            await clienteAxios.delete(`/api/tareas/${id}`,{params: { proyecto }});

            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    }

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    const actualizarTarea = async tarea => {
        try {
            console.log(tarea);
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`,tarea);

            console.log(resultado);

            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea, 
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState; 
