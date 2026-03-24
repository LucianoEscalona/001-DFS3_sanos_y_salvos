import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Sanos y Salvos</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Contacto</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Mascotas
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/mascotas">Mascotas</Link></li>
                        <li><Link className="dropdown-item" to="/ingresar_mascota">Registrar mascota</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Reportes de mascotas
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/reportes">Reportes de mascotas</Link></li>
                        <li><Link className="dropdown-item" to="/ingresar_reporte">Realizar un reporte</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sesion
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/info_cuenta">Mi cuenta</Link></li>
                        <li><Link className="dropdown-item" to="#">Cerrar sesion</Link></li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}
export default Navbar