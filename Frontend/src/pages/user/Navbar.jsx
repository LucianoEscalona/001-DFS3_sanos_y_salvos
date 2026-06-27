import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {

    const [sesionActiva, setSesionActiva] = useState(false)
    const navegar = useNavigate()

    const cerrar_sesion = ()=>{
        if(confirm("Desea cerras sesion?")){
            localStorage.removeItem("sesion")
            setSesionActiva(false)
            navegar("/")
            window.location.reload()
        }
    }

    useEffect(()=>{
        try {
            if(JSON.parse(localStorage.getItem("sesion"))){
                setSesionActiva(true)
            }else{
                setSesionActiva(false)
            }
        } catch (error) {
            setSesionActiva(false)
        }
    },[])
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
                    <Link className="nav-link active" aria-current="page" to="/motor_test">Motor</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                {sesionActiva &&
                    <>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mascotas
                        </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/mascotas">Mis mascotas</Link></li>
                                <li><Link className="dropdown-item" to="/mascotas_sistema">Mascotas en el sistema</Link></li>
                            </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Reportes
                        </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/reportes">Mis reportes</Link></li>
                                <li><Link className="dropdown-item" to="/reportes_sistema">Reportes en el sistema</Link></li>
                            </ul>
                    </li>

                    </>
                }
                {!sesionActiva &&
                    <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/reportes_sistema">Reportes del sistema</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/mascotas_sistema">Mascotas del sistema</Link>
                    </li>
                    </>
                }
                {sesionActiva &&
                /*
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sesion
                        </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Ver sesion</Link></li>
                                <li><Link className="dropdown-item" to="/" onClick={()=>cerrar_sesion()}>Cerrar sesion</Link></li>
                            </ul>
                    </li>*/
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/" onClick={()=>cerrar_sesion()}>Cerrar sesion</Link>
                    </li>
                }
                {!sesionActiva &&
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/login">Ir al login</Link>
                    </li>
                }
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}
export default Navbar