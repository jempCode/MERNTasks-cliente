import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

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

        // Password minimo de 6 caracteres

        // los dos password son iguales

        // enviar al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onsubmit={onSubmitNuevaCuenta}
                >
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