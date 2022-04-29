import React, { Component } from 'react';

// SCSS
import './PrincipalPage.scss';

// Containers
import ServiciosContainer from '../ServiciosContainer/ServiciosContainer';
import NavBarContainer from '../NavbarContainer/NavbarContainer';

export default class PrincipalPage extends Component {
  render() {
    return (
      <div className='principal-page'>
        <header className='header-nav'>
          <NavBarContainer />
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
