import { useEffect, useState } from "react"
import { getSMT } from "../../utils/apiHelper"
import Reporte_agregar from "../../components/Reporte_agregar"
import Reporte_miniatura from "../../components/Reporte_miniatura"

function Reportes_sistema({}){

    const [reportes, setReportes] = useState([])
    const [sesion, setSesion] = useState({})

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT(8083,"reporte","listar")
            setReportes(res)
        }
        obtenerData()
        const sesion_u = JSON.parse(localStorage.getItem("sesion"))
    },[])
    return(
        <>
            <p className="cuadrao">Reportes</p>
            <h3>Reportes en el sistema</h3>

            <div className="row m-0">
                {reportes.map((r,i)=>(
                    <Reporte_miniatura id={r.id} key={i} naturaleza={"s_reportes"}/>
                ))
                }
            </div>
            
        </>
    )
}
export default Reportes_sistema