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
        <div className="b-gen p-5 mw-fra mb-3">
            <h4>Resultado de Busqueda N° {res.id}</h4>
            <strong>Puntaje de coincidencia: {res.ptje_res_coincidencia}</strong>
            <p>Se compararon los siguientes animales:</p>
            <div className="row m-0">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={m1.temp_imagen} className="img-size" alt="img animal" />
                    <p>{m1.nombre} ({m1.tipo})</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={m2.temp_imagen} className="img-size" alt="img animal" />
                    <p>{m2.nombre} ({m2.tipo})</p>
                </div>
            </div>
            <button onClick={()=>detalle_res()}>Ver detalles</button>
        </div>
        </>
    )
}
export default Resultado_miniatura