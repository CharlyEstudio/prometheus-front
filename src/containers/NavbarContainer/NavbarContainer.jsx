import React, { Component } from 'react';

// SCSS
import './NavbarContainer.scss';

// Components
import { LogoComponent } from '../../components/Navbar/LogoComponent';
import { MenuComponent } from '../../components/Navbar/MenuComponent';


export default class NavBarContainer extends Component {
    render() {
        return (
            <div className='nav'>
                <div>
                    <LogoComponent />
                </div>
                <div>
                    <MenuComponent />
                </div>
            </div>
        )
    }
}