import React, { Fragment, useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {

    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitProyecto = e => {
        e.preventDefault();
    }

    // mostrar el formulario
    const onClick = () => {
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-primario btn-block"
                onClick={onClick}
            >Nuevo Proyecto</button>

            { formulario?
                (
                    <form 
                        action=""
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text" 
                            name="nombre"
                            placeholder="Nombre del Proyecto"
                            className="input-text"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit" 
                            className="btn btn-block btn-primario"
                            value="Agregar Producto"
                        />
                    </form>
                ): null            
            }

        </Fragment>
    );
}
 
export default NuevoProyecto;