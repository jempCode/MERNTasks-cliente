import React, { useContext, useEffect, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareasContext';

const FormTarea = () => {

    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(TareaContext);
    const { agregarTarea, tareaseleccionada, errortarea, validarTarea, obtenerTareas, actualizarTarea } = tareasContext;

    useEffect(() => {
        if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);
    
    const [tarea, guardarTarea] = useState({
        nombre:'',
    });

    const { nombre } = tarea;
    
    if(!proyecto) return null;

    const [proyectoActual] =  proyecto;

    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        if( tareaseleccionada === null) {
            // agregar la nueva tarea
            tarea.proyectoId = proyectoActual.id
            tarea.estado =  false;
            agregarTarea(tarea);
        } else {
            actualizarTarea(tarea);
        }
        
        obtenerTareas(proyectoActual.id); 
        // reiniciar el form
        guardarTarea({
            nombre:''
        });
    }

    return (
        <div className="formulario">
            <form 
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada?'Editar Tarea':'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea?<p className="mensaje error">El nombre de la tarea es obligatorio</p>:null}
        </div>
    );
}
 
export default FormTarea;