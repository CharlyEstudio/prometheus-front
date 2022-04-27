import React, { Component } from 'react';

// SCSS
import './TecnologiaContainer.scss';

// Components
import Tecnologias from '../../components/Tecnologias/Tecnologias';

export default class TecnologiaContainer extends Component {
    render() {
        return (
            <div className='tecnologia-container'>
                <Tecnologias />
            </div>
        )
    }
}