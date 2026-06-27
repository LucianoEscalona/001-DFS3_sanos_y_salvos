import { getSMT } from "../../utils/apiHelper"
import { useEffect, useState } from "react"

import '../../styles/mascota.css'
import Mascota_agregar from "../../components/Mascota_agregar"
import Mascota_miniatura from "../../components/Mascota_miniatura"
import { useNavigate } from "react-router-dom"

function Mascotas_sistema(){

    const navegar = useNavigate()

    const [mascotas, setMascotas] = useState([])
        const [mascotas_r, setMascotas_r] = useState([])
        const [animales_v, setAnimales_v] = useState([])
    const [mostrar_agregar, setMostrar_agregar] = useState(false)

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
            const res = await getSMT("mascota","listar")
            setMascotas(res)
        }
        obtenerData()
    },[])
    useEffect(()=>{
        const mr = []
        const av = []
        mascotas.forEach(m => {
            if(m.tipo == "mascota"){
                mr.push(m)
            }else if(m.tipo == "lo_vi"){
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
                    <h3 className="fade-in t-1">~Mascotas</h3>
                    <p className="fade-in t-2 mb-3">Consulta todas las mascotas y animales encontrados que se han registrado en el sistema.</p>        
                    {!sesionActiva &&
                    <>
                        <p className="fade-in t-2 mb-3">Si necesitas ingresar una Mascota o Animal en nuestro sistema, debes tener una sesion activa.</p>   
                    </>
                    }
                    {sesionActiva &&
                    <>
                        <p className="fade-in t-2 mb-3">Si es necesario, puedes ingresar una Mascota o Animal en nuestro sistema.</p>                    
                        <button className="fade-in t-2 btn_hps me-3" onClick={()=>setMostrar_agregar(true)}>Ingresar Mascota</button>
                        <button className="fade-in t-2 btn_hps" onClick={()=>navegar("/mascotas")}>Ver mis Mascotas</button>
                    </>
                    }
                </div>            
            </div>
            <div className="">
                {mostrar_agregar &&
                    <Mascota_agregar cerrar={()=>setMostrar_agregar(false)} naturaleza={"add"}/>
                }                
                <h3 className="ps-5 pt-4 pb-4 pe-5 m-0 m_t_style c-black">~ Mascotas registradas</h3>
                <div className="row m-0 w-bg pt-3 pb-3 b-gen brad-0">
                    {mascotas_r.map((m, i)=>(
                        <Mascota_miniatura key={i} id={m.id} naturaleza={"ver_detalle"} origen={"/mascotas_sistema"}/>
                    ))}
                </div>
                <h3 className="ps-5 pt-4 pb-4 pe-5 m-0 m_t_style c-black">~ Animales vistos</h3>
                <div className="row m-0 w-bg pt-3 pb-3 b-gen brad-0">
                    {animales_v.map((a, i)=>(
                        <Mascota_miniatura key={i} id={a.id} naturaleza={"ver_detalle"} origen={"/mascotas_sistema"}/>
                    ))}
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Mascotas_sistema