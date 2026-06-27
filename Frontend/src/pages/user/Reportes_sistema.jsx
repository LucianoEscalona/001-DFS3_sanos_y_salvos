import { useEffect, useState } from "react"
import { getSMT } from "../../utils/apiHelper"
import Reporte_agregar from "../../components/Reporte_agregar"
import Reporte_miniatura from "../../components/Reporte_miniatura"
import { useNavigate } from "react-router-dom"

function Reportes_sistema({}){

    const navegar = useNavigate()

    const [mos_agregar, setMos_agregar] = useState(false)
    const [reportes, setReportes] = useState([])
    const [sesion, setSesion] = useState({})

    const [sesionActiva, setSesionActiva] = useState(false)
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

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT("reporte","listar")
            setReportes(res)
        }
        obtenerData()
        const sesion_u = JSON.parse(localStorage.getItem("sesion"))
    },[])
    return(
        <>
            <div className="banner overflow-hidden position-relative">
                <img 
                    src="../../../public/img/banner_perdidos.png" 
                    alt="Where is everyone..."
                    className="w-100 h-100"/>  
                <div className="txt_fade_end_conf">
                    <h3 className="fade-in t-1">~Mascotas desaparecidas</h3>
                    {!sesionActiva &&
                    <>
                        <p className="fade-in t-2 mb-3">Consulta aqui todos los reportes de animales perdidos que se han subido a la pagina. Si necesitas subir tu propio reporte sobre alguna mascota perdida o animal encontrado, debes tener una sesion activa.</p>
                    </>
                    }
                    {sesionActiva &&
                    <>
                        <p className="fade-in t-2 mb-3">Consulta aqui todos los reportes de animales perdidos que se han subido a la pagina, y si lo necesitas, puedes subir tu propio reporte sobre alguna mascota perdida o animal encontrado.</p>
                        <button className="fade-in t-2 btn_hps me-3" onClick={()=>setMos_agregar(true)}>Crear reporte</button>
                        <button className="fade-in t-2 btn_hps" onClick={()=>navegar("/reportes")}>Ver mis reportes</button>
                    </>
                    }
                </div>            
            </div>
            <h3 className="ps-5 pt-4 pb-4 pe-5 m-0 m_t_style c-black">~ Reportes del sistema</h3>
            
            {mos_agregar &&
                <Reporte_agregar cerrar={()=>setMos_agregar(false)} naturaleza={"add"}/>
            }
            <div className="row m-0 w-bg pt-3 pb-3 b-gen brad-0">
                {reportes.map((r,i)=>(
                    <Reporte_miniatura id={r.id} key={i} naturaleza={"s_reportes"}/>
                ))
                }
            </div>
            
        </>
    )
}
export default Reportes_sistema