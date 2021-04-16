import { LOGIN_ERROR, LOGIN_EXITOSO, OBTENER_USUARIO, REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
                localStorage.setItem('token',action.payload.token);
                return {
                    ...state,
                    autenticado: true,
                    mensaje: null
                }
        case OBTENER_USUARIO:
                localStorage.setItem('token',action.payload.token);
                return {
                    ...state,
                    usuario: action.payload
                }
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                mensaje: action.payload
            }
    
        default:
            return state;
    }
}