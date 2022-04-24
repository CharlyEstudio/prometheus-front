import React, { Component } from 'react';

// SCSS
import './ServiciosContainer.scss';

// Components
import Servicios from '../../components/Servicios/Servicios';

export default class ServiciosContainer extends Component {
    render() {
        return (
            <div className='servicios-container'>
                <Servicios />
            </div>
        )
    }
}
