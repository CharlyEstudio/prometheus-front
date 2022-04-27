import React from 'react';
import { useSelector } from 'react-redux';

// SCSS
import './Tecnologias.scss';

// SVG
import { ReactComponent as Html } from '../../assets/images/svg/asset 20.svg';
import { ReactComponent as Css } from '../../assets/images/svg/asset 21.svg';
import { ReactComponent as Sass } from '../../assets/images/svg/asset 22.svg';
import { ReactComponent as Js } from '../../assets/images/svg/asset 23.svg';
import { ReactComponent as Jquery } from '../../assets/images/svg/asset 24.svg';
import { ReactComponent as Bootstrap4 } from '../../assets/images/svg/asset 25.svg';
import { ReactComponent as Git } from '../../assets/images/svg/asset 26.svg';
import { ReactComponent as Wordpress } from '../../assets/images/svg/asset 27.svg';





// PNG

export default function Tecnologias() {
   // const { Tecnologi } = useSelector(state => state);
   // const { data } = Tecnologia;

    return (
        <div className='Tecnologia'>
            <h2 className='Tecnologia__title-h2'>Tecnologías<span>.</span></h2> 
            <div className='Tecnologia__logo-top'>
                <div className='Tecnologia_zone'>
                    
                    <Html className='servicios__row__column__card__title__svg' />
                    <p>HTML</p> 
                    <div className='Tecnologia_zone'></div> 
                    <Css className='servicios__row__column__card__title__svg' /> 
                    <p>CSS</p> 
                    <div className='Tecnologia_zone'></div>
                    <Sass className='servicios__row__column__card__title__svg' /> 
                    <p>Sass</p> 
                    <Js className='servicios__row__column__card__title__svg' />  
                    <p>JavaScript</p> 
                    <Jquery className='servicios__row__column__card__title__svg' /> 
                    <p>jQuery</p> 
                </div>
            </div> 
            <div className='Tecnologia__logos-bot'> 
                <Bootstrap4 className='servicios__row__column__card__title__svg' />
                <p>Bootstrap4</p> 
                <Git className='servicios__row__column__card__title__svg' />
                <p>Git</p> 
                <Wordpress className='servicios__row__column__card__title__svg' />
                <p>Wordpress</p>  
            </div>
        </div>
    );
    
}
