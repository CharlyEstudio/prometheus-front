import React from 'react';

// SCSS
import './LogoComponent.scss'

// PNG
import logo from '../../assets/images/png/asset 0.png';

export const LogoComponent = () => {
  return (
    <div className='nav__logo'>
      <a href="#home">
        <img className='nav__img' alt='logo'src={ logo } />
      </a>
    </div>
  )
}
