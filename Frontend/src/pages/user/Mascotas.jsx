import { getSMT } from "../../utils/apiHelper"
import { useEffect, useState } from "react"

import '../../styles/mascota.css'
import Mascota_agregar from "../../components/Mascota_agregar"
import Mascota_miniatura from "../../components/Mascota_miniatura"
import { useNavigate } from "react-router-dom"

function Mascotas() {

    const navegar = useNavigate()

    const [mascotas, setMascotas] = useState([])
        const [mascotas_r, setMascotas_r] = useState([])
        const [animales_v, setAnimales_v] = useState([])
    const [mostrar_agregar, setMostrar_agregar] = useState(false)

    const sesion = JSON.parse(localStorage.getItem("sesion"))

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT("mascota","listar")
            setMascotas(res)
        }
        obtenerData()
    },[])
    useEffect(()=>{
        const mr = []
        const av = []
        mascotas.forEach(m => {
            if(m.tipo == "mascota" && m.rut_usuario == sesion.rut){
                mr.push(m)
            }else if(m.tipo == "lo_vi" && m.rut_usuario == sesion.rut){
                av.push(m)
            }
        })
        setMascotas_r(mr)
        setAnimales_v(av)
    },[mascotas])

    return(
        <>
        <div>
            <div className="banner overflow-hidden position-relative">
                <img 
                    src="../../../public/img/mascota_banner_2.png" 
                    alt="Where is everyone..."
                    className="w-100 h-100"/>   
                <div className="txt_fade_end_conf">
                    <h3 className="fade-in t-1">~Mis Mascotas</h3>
                    <p className="fade-in t-2 mb-3">Consulta las mascotas que has TU registrado en el sistema, y si no tienes ninguna registrada, puedes ingresar una de tus mascotas.</p>
                    <p className="fade-in t-2 mb-3">Tambien puedes ingresar animales que hayas visto en algun lado (por ejemplo: animales que parezcan perdidos)</p>
                    <button className="fade-in t-2 btn_hps me-3" onClick={()=>setMostrar_agregar(true)}>Ingresar Mascota</button>
                    <button className="fade-in t-2 btn_hps" onClick={()=>navegar("/mascotas_sistema")}>Ver todas las Mascotas</button>
                </div>            
            </div>

            <div className="color-testing mascota-opciones p-4">
                <p>Check for coincidences</p>
            </div>
            <button onClick={()=>setMostrar_agregar(true)}>Registrar mascota</button>
            <p className="cuadrao">Mascotas</p>
            <div className="">
                {mostrar_agregar &&
                    <Mascota_agregar cerrar={()=>setMostrar_agregar(false)} naturaleza={"add"}/>
                }                
                <h2 className="p-4 m-0 m_t_style">Mascotas registradas</h2>
                <div className="row m-0 w-bg pt-3 pb-3">
                    {mascotas_r.map((m, i)=>(
                        <Mascota_miniatura key={i} id={m.id} naturaleza={"ver_detalle"} origen={"/mascotas"}/>
                    ))}
                </div>
                <h2 className="p-4 m-0 m_t_style">Animales vistos</h2>
                <div className="row m-0 w-bg pt-3 pb-3">
                    {animales_v.map((a, i)=>(
                        <Mascota_miniatura key={i} id={a.id} naturaleza={"ver_detalle"} origen={"/mascotas"}/>
                    ))}
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Mascotas