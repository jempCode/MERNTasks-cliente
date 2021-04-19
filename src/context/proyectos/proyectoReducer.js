import { AGREGAR_PROYECTOS, ELIMINAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTOS, PROYECTO_ACTUAL, PROYECTO_ERROR, VALIDAR_FORMULARIO } from "../../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return({
                ...state,
                formulario: true
            });
        case OBTENER_PROYECTOS:
            return({
                ...state,
                proyectos: action.payload
            });
        case AGREGAR_PROYECTOS:
            return({
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorFormulario: false
            });
        case VALIDAR_FORMULARIO:
            return({
                ...state,
                errorFormulario: true
            });
        case PROYECTO_ACTUAL:
            return({
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload)
            });
        case ELIMINAR_PROYECTO:
            return({
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
                proyecto: null
            });
        case PROYECTO_ERROR:
            return({
                ...state,
                mensaje: action.payload
            });
        default:
            return state;
    }
}