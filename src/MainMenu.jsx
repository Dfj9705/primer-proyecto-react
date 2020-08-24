import React from "react"
import {NavLink, Link} from "react-router-dom"
const MainMenu = () =>(
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <Link to="/">
                    <img src="https://ed.team/static/images/logo.svg" alt="logo" className="main-logo"/>
                </Link>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink exact activeClassName="activo" to="/">Inicio</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/cursos">Cursos</NavLink></li>
                        <li><NavLink activeClassName="activo" to="/formulario">Formulario</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l">

                </div>
            </div>
        </div>
    </header>
)

export default MainMenu