import { useEffect, useState } from "react"
import Reporte_agregar from "../../components/Reporte_agregar"
import Reporte_miniatura from "../../components/Reporte_miniatura"
import { getSMT } from "../../utils/apiHelper"

function Reportes() {

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
            <p className="cuadrao">Reportes</p>
            <h3>Mis reportes</h3>
            <button onClick={()=>setMos_agregar(true)}>Agregar reporte</button>
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