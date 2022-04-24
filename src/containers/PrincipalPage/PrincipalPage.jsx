import React, { Component } from 'react';

// SCSS
import './PrincipalPage.scss';

// Containers
import ServiciosContainer from '../ServiciosContainer/ServiciosContainer';

export default class PrincipalPage extends Component {
  render() {
    return (
      <div className='principal-page'>
        <header>
          Nav
        </header>
        <div className='main'>
          <ServiciosContainer />
        </div>
        <footer>
          Footer
        </footer>
      </div>
    )
  }
}
