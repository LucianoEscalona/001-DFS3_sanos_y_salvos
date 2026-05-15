import { useEffect, useState } from "react"
import { getSMT_ID } from "../utils/apiHelper"
import { useNavigate } from "react-router-dom"

function Resultado_miniatura ({res}) {

    const [m1, setM1] = useState([])
    const [m2, setM2] = useState([])

    const navigate = useNavigate()

    const obtener_mascotas = async()=>{
        try {
            if(res.idMascota != null && res.idMascota != undefined){
                const res1 = await getSMT_ID("mascota","obtener",res.idMascota)
                setM1(res1)
            }
            if(res.idMascota_revisada != null && res.idMascota_revisada != undefined){
                const res2 = await getSMT_ID("mascota","obtener",res.idMascota_revisada)
                setM2(res2)
            }
        } catch (error) {
            
        }
        
    }
    const detalle_res = ()=>{
        localStorage.setItem("id_detalle_res", res.id)
        navigate("/detalle_coincidencias")
    }

    useEffect(()=>{
        console.log(res)

        obtener_mascotas()
    },[])

    return(
        <>
        <div className="b-gen">
            <h4>Resultado de Busqueda N° {res.id}</h4>
            <strong>Puntaje de coincidencia: {res.ptje_res_coincidencia}</strong>
            <p>Se compararon los siguientes animales:</p>
            <div className="row m-0">
                <div className="col-md-6 col-sm-12">
                    <div className="img-sim"></div>
                    <p>{m1.nombre} ({m1.tipo})</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="img-sim"></div>
                    <p>{m2.nombre} ({m2.tipo})</p>
                </div>
            </div>
            <button onClick={()=>navigate("/detalle_coincidencias")}>Ver detalles</button>
        </div>
        </>
    )
}
export default Resultado_miniatura