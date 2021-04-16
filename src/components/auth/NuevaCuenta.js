import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const NuevaCuenta = (props) => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // extraer los valores del context auth
    const authContext = useContext(AuthContext);
    const { mensaje, autenticado ,registrarUsuario } = authContext;

    // en caso de que le usuario se haya autenticado o registrado osea un registro ducplicado

    useEffect(() => {

        if( autenticado ) {
            props.history.push('/proyectos');
        }

        if( mensaje ) {
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }
        
    }, [mensaje,autenticado,props.history]);

    const [usuario, guaradarUsuario] = useState({
        email: '',
        nombre: '',
        password: '',
        confirmar:''
    });

    const  { email, nombre, password, confirmar } = usuario;

    const onChange = e => {
        guaradarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitNuevaCuenta = e => {
        e.preventDefault();
        //  validar campos vacios

        if(
            nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === ''
        ) {
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        }

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser almenos de 6 caracteres', 'alerta-error');
            return;
        }
        
        // los dos password son iguales
        if(password !== confirmar) {
            mostrarAlerta('Las contraseña no son iguales', 'alerta-error');
            return;
        }

        // enviar al action
        registrarUsuario({
            nombre,
            email, 
            password
        });
    }

    return (
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmitNuevaCuenta}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Tu Nombre"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="nombre">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu Email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder=" Repite tu password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;