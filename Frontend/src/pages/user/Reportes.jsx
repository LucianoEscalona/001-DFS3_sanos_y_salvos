import { useEffect, useState } from "react"
import Reporte_agregar from "../../components/Reporte_agregar"
import Reporte_miniatura from "../../components/Reporte_miniatura"
import { getSMT } from "../../utils/apiHelper"
import { useNavigate } from "react-router-dom"

function Reportes() {

    const navegar = useNavigate()
    const [mos_agregar, setMos_agregar] = useState(false)

    const [reportes, setReportes] = useState([])
    const [sesion, setSesion] = useState({})

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT("reporte","listar")

            const sesion_u = JSON.parse(localStorage.getItem("sesion"))
            let ls_reportes_u = []
            try {
                res.forEach(r=>{
                    if(r.id_usuario == sesion_u.id){
                        ls_reportes_u.push(r)
                    }
                })
                setReportes(ls_reportes_u)
            } catch (error) {
                console.log("en REPORTES |",error)
            }
        }
        obtenerData()
        
    },[])

    return(
        <>
            <div className="banner overflow-hidden position-relative">
                <img 
                    src="../../../public/img/banner_perdidos.png" 
                    alt="Where is everyone..."
                    className="w-100 h-100"/>   
                <div className="txt_fade_end_conf">
                    <h3 className="fade-in t-1">~Mis reportes</h3>
                    <p className="fade-in t-2 mb-3">Consulta todos los reportes que hayas subido a la pagina, tambien puedes ingresar uno nuevo si lo necesitas.</p>
                    <button className="fade-in t-2 btn_hps me-3" onClick={()=>setMos_agregar(true)}>Crear reporte</button>
                    <button className="fade-in t-2 btn_hps" onClick={()=>navegar("/reportes_sistema")}>Ver todos reportes</button>
                </div>            
            </div>
            {mos_agregar &&
                <Reporte_agregar cerrar={()=>setMos_agregar(false)} naturaleza={"add"}/>
            }
            <div className="row m-0">
                {reportes.map((r,i)=>(
                    <Reporte_miniatura id={r.id} key={i} naturaleza={"m_reportes"}/>
                ))
                }
            </div>
            
        </>
    )
}
export default Reportes