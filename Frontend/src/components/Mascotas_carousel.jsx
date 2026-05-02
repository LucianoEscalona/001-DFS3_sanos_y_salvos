import { useEffect, useState } from "react"
import Mascota_miniatura from "./Mascota_miniatura"
import { getSMT } from "../utils/apiHelper"

function Mascotas_carousel({cerrar, id_ani}){

    const [animales, setAnimales] = useState([])

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT(8081,"mascota","listar")
            setAnimales(res)
        }
        obtenerData()
    },[])
    useEffect(()=>{
        
    },[animales])

    return(
        <>
        <div className="mw-car-animales b-gen p-4">
            <button onClick={cerrar}>cerrar</button>
            <div className="mw-car-animales-interno row m-0">
                {animales.map((m,i)=>(
                    <Mascota_miniatura key={i} id={m.id} naturaleza={"sel_reporte"} cerrar={cerrar} id_ani={id_ani}/>
                ))}
            </div>
        </div>
        </>
    )
}
export default Mascotas_carousel