import React, { useReducer } from 'react'
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTOS } from '../../types'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import * as uuid from 'uuid';

const ProyectoState = props => {

    const proyectos= [
        { id: 1, nombre: 'Teinda Virtual'},
        { id: 2, nombre: 'Intranet'},
        { id: 3, nombre: 'Diseño de sitio Web'}
    ]; 
    
    const initialState = {
        proyectos:[],
        formulario: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // sereie de funciones para el CRUD de proyectos

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();

        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        });
    }

    return(
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState
