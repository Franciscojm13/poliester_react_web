import React from 'react'

const NavBar = () => {
    return (
        <><header id="header">

            <div className="d-flex justify-content-center mx-auto mt-3">
                <a className="brand " href="index.html"><h1 className=" display-5">Poliéster</h1></a>
            </div>

            <nav className="navbar navbar-expand-md contenedor navbar-light m-3">
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto d-block d-sm-block d-md-none" href="#">Menu</a>
                    <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className=" navbar-nav  list-unstyled text-center">
                            <li className="nav-item px-4"><a className="nav-link" href="index.html">Inicio</a></li>
                            <li className="nav-item px-4"><a className="nav-link" href="./html/collage.html">Collage</a></li>
                            <li className="nav-item px-4"><a className="nav-link" href="./html/galletas_toyota.html">Galletas Toyota</a></li>
                            <li className="nav-item px-4"><a className="nav-link" href="./html/sonidos.html">Sonidos</a></li>
                            <li className="nav-item px-4"><a className="nav-link" href="./html/sobre_mi.html">Sobre mi</a></li>
                            <li className="nav-item px-4"><a className="nav-link" href="./html/contacto.html">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default NavBar




