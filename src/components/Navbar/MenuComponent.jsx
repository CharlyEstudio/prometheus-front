import React from 'react';

// SCSS
import './MenuComponent.scss';

export const MenuComponent = () => {
    return (
        <div className="nav__menu" id="links">
            <ul>
                {/* <!-- SERVICES --> */}
                <li>
                    <a href="#services" id="menu1">servicios</a>
                </li>
                {/* <!-- PROJECTS --> */}
                <li>
                    <a href="#projects" id="menu2">proyectos</a>
                </li>
                {/* <!-- TECHNOLOGIES --> */}
                <li>
                    <a href="#technologies" id="menu3">tecnologías</a>
                </li>
                {/* <!-- COURSES --> */}
                <li>
                    <a href="#courses" id="menu4">cursos</a>
                </li>
                {/* <!-- CONTACT --> */}
                <li>
                    <a href="#contact" id="menu5">contacto</a>
                </li>
                {/* <!-- CURRICULUM FEDEVCODE --> */}
                <li>
                    <a href="http://cv.fedevcode.com" target="_blank" className="nav__links--blank" id="menu6" rel="noreferrer noopener external">resumen</a>
                </li>
            </ul>
        </div>
    )
}