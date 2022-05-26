import React from 'react';
import { useSelector } from 'react-redux';

// SCSS
import './Servicios.scss';

// SVG
import { ReactComponent as Code } from '../../assets/images/svg/asset 16.svg';
import { ReactComponent as Page } from '../../assets/images/svg/asset 17.svg';

// PNG
import sphere from '../../assets/images/png/asset 2.png';

export default function Servicios() {
    const { session } = useSelector(state => state);
    const { data } = session;
    const { services } = data;

    return (
        <div className='servicios'>
            {/*
            <div className='servicios__parallax'>
                <div className='servicios__parallax__element1'>
                    <img src={sphere} alt="Esfera" />
                </div>
            </div>
            */}
            <h2 className='servicios__title-h2'>Servicios<span>.</span></h2>
            <div className='servicios__row'>
                <div className='servicios__row__column'>
                    <div className='servicios__row__column__card'>
                        <div className='servicios__row__column__card__title'>
                            <h3>{services.card1.title}</h3>
                            <Code className='servicios__row__column__card__title__svg' />
                        </div>
                        <p className='servicios__row__column__card__description'>
                            {services.card1.text}
                        </p>
                        <a href='/' className='servicios__row__column__card__enlace'>
                            {services.card1.quantity}
                        </a>
                    </div>
                    <div className='servicios__row__column__card'>
                        <div className='servicios__row__column__card__title'>
                        <h3>{services.card2.title}</h3>
                            <Page className='servicios__row__column__card__title__svg' />
                        </div>
                        <p className='servicios__row__column__card__description'>
                            {services.card2.text}
                        </p>
                        <a href='/' className='servicios__row__column__card__enlace'>
                            {services.card2.quantity}
                        </a>
                    </div>
                </div>
                <div className='servicios__row__column'>
                    <div className='servicios__row__column__about'>
                        <h3 className='servicios__row__column__about__title'>Sobre Mi</h3>
                        <p className='servicios__row__column__about__name'>{data.name}</p>
                        <p className='servicios__row__column__about__description'>{services.sobremi.description}</p>
                        <p className='servicios__row__column__about__message'>{services.sobremi.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
