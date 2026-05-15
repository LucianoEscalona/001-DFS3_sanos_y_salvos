import { useEffect, useState } from "react"
import { getSMT } from "../utils/apiHelper"
import Reporte_miniatura from "./Reporte_miniatura"

function Reporte_carousel ({id_rb}) {
    
    const [reportes, setReportes] = useState([])

    useEffect(()=>{
        const sesion = JSON.parse(localStorage.getItem("sesion"))
        const obtenerData = async()=>{
            const res = await getSMT("reporte","listar")
            const res_filter = res.filter(r=>r.id_usuario == sesion.id)
            setReportes(res_filter)
            console.log(res)
            console.log(res_filter)
        }
        obtenerData()
    },[])

    return(
        <>
        <div className="mw-car-reportes b-gen p-2">
            <div className="mw-car-reportes-interno">
                {reportes.map((r,i)=>(
                    <Reporte_miniatura id={r.id} key={i} naturaleza={"sel_motor"} id_rep={id_rb}/>
                ))}
            </div>
        </div>
        </>
    )
}   
export default Reporte_carousel