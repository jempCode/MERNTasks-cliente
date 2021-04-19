import { CERRAR_SESION, LOGIN_ERROR, LOGIN_EXITOSO, OBTENER_USUARIO, REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token',action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false,
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
                cargando: false,
            }
        case CERRAR_SESION:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                mensaje: action.payload,
                usuario: null,
                autenticado: null,
                cargando: false
            }
    
        default:
            return state;
    }
}