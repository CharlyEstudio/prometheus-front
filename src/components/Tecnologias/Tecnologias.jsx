import React from 'react';
import { useSelector } from 'react-redux';

// SCSS
import './Tecnologias.scss';

// Components
import LogoTec from './LogoTec';

const Tecnologia = ({tec}) => {
    return(
       // <div className='tecnologia__zone'>
        <div className='tecnologia__dominio__tec'>
            <LogoTec tec={tec.tec} estilos="tecnologia__dominio__tec__svg" />
            <p key={tec.id}>{tec.tecnologia}</p>
        </div>
       // </div>
        
    );
};

export default function Tecnologias() {
   const { session } = useSelector(state => state);
   const { data } = session;
   const { tecnologias } = data;

    return (
        <div className='tecnologia'>
            <h2 className='tecnologia__title-h2'>Tecnologías<span>.</span></h2>
            {
                tecnologias.length > 0
                ? tecnologias.map((t, k) => {
                    return(
                        //<div className='tecnologia_zone'>
                        <div key={k} className='tecnologia__dominio'>
                            {
                                t.map( tec => <Tecnologia key={tec.id} tec={tec} />)
                            }
                        </div>
                        //</div>
                    
                    );
                })
                : <h3>No hay tecnologías</h3>
            }
        </div>
        
    );
}
