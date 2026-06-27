import { useEffect, useState } from "react"
import { getSMT_ID } from "../utils/apiHelper"
import { useNavigate } from "react-router-dom"

function Reporte_miniatura({id, naturaleza, id_rep}) {

    const [reporte, setReporte] = useState({})
    const [animal,   setAnimal] = useState({})
    const [usuario, setUsuario] = useState({})

    const navegar = useNavigate()

    const ir_detalle = ()=>{
        navegar("/reporte_detalle")
        localStorage.setItem("id_rs", id)
    }
    const setId_buscar = ()=>{
        id_rep(reporte.id)
    }

    useEffect(()=>{
        const obtenerReporte = async() => {
            const res = await getSMT_ID("reporte","obtener",id)
            setReporte(res)
        }
        obtenerReporte()
        localStorage.setItem("operdrd", naturaleza)
    },[])
    useEffect(()=>{
        if(reporte.id_mascota != undefined){
            try {
                const obtener_animal = async() => {
                    const res = await getSMT_ID("mascota","obtener",reporte.id_mascota)
                    setAnimal(res)
                }
                obtener_animal()
  
            } catch (error) {
                console.log(error)
            }
        }
        if(reporte.id_usuario != undefined){
            try {
                const obtener_usuario = async() => {
                    const res = await getSMT_ID("usuario","obtener",reporte.id_usuario)
                    setUsuario(res)
                }
                obtener_usuario()
    
            } catch (error) {
                console.log(error)
            }
        }
    },[reporte])

    return(
        <>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="b-gen p-4"> 
                <h2>{animal.animal} PERDIDO</h2>
                <div className="ps-4 pe-4 pt-3 pb-3">
                    <div className="img-sim"></div>
                </div>
                <div className="ps-4 pe-4 pt-1 pb-3">
                    <p>{animal.nombre}</p>
                    <p>{animal.animal} {animal.genero} {animal.raza_1}, de {animal.edad}.</p>
                    <p>{reporte.descripcion}</p>
                    <p>Desaparecio el {reporte.tiempo_uvv}, en {reporte.ubicacion_uvv}</p>
                    <p>si lo ve porfavor, llame al:</p>
                </div>
                <div className="b-gen p-2 mb-3 nphone_color">
                    <h3>({usuario.telefono})</h3>
                </div>
                {naturaleza != "sel_motor" &&
                    <button onClick={()=>ir_detalle()}>Ver detalles</button>
                }
                {naturaleza == "sel_motor" &&
                    <button onClick={()=>setId_buscar()}>Seleccionar</button>
                }
            </div>
        </div>
        </>
    )
}
export default Reporte_miniatura