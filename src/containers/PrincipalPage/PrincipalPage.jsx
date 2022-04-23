import React, { Component } from 'react';

// SCSS
import './PrincipalPage.scss';

export default class PrincipalPage extends Component {
  render() {
    return (
      <div className='principal-page'>
        <header>
          Nav
        </header>
        <div>
          Contenido/Cuerpo
        </div>
        <footer>
          Footer
        </footer>
      </div>
    )
  }
}
