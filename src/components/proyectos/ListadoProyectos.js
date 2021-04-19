import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, mensaje, obtenerProyectos } = proyectosContext;
    
    const alertacontext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertacontext;

    useEffect(() => {

        if(mensaje) {
            mostrarAlerta(mensaje.msg,mensaje.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje])

    if( proyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            {alerta?( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ):null}
            <TransitionGroup>
                {
                proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={300}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={proyecto} 
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;