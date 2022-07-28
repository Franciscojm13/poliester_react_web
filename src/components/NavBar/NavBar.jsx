import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
        <header id="header">

            

            <div className="d-flex justify-content-center mx-auto mt-3">
                <Link to={'/'} style={{ textDecoration: 'none' }}><h1 className=" display-5">Poliéster</h1></Link>
                
            </div>

            <nav className="navbar navbar-expand-md contenedor navbar-light m-3">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto d-block d-sm-block d-md-none" href="#">Menu</a>
                    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className=" navbar-nav  list-unstyled text-center">
                            <Link to={'/'} style={{ textDecoration: 'none' }}><li className="nav-item nav-link px-4"> Inicio </li></Link>
                            <li className="nav-item nav-link px-4">Collage</li>
                            <li className="nav-item nav-link px-4">Galletas Toyota</li>
                            <li className="nav-item nav-link px-4">Sonidos</li>
                            <li className="nav-item nav-link px-4">Sobre mi</li>
                            <li className="nav-item nav-link px-4">Contacto</li>
                            <Link to={'/Cart'}><li className="nav-item nav-link px-4">  <CartWidget/> </li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default NavBar




