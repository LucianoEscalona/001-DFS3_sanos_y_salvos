import { getSMT } from "../../utils/apiHelper"
import { useEffect, useState } from "react"

import '../../styles/mascota.css'
import Mascota_agregar from "../../components/Mascota_agregar"
import Mascota_miniatura from "../../components/Mascota_miniatura"

function Mascotas() {

    const [mascotas, setMascotas] = useState([])
        const [mascotas_r, setMascotas_r] = useState([])
        const [animales_v, setAnimales_v] = useState([])
    const [reportes, setReportes] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [mostrar_agregar, setMostrar_agregar] = useState(false)

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT(8081,"mascota","listar")
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
            }else{
                av.push(m)
            }
        })
        setMascotas_r(mr)
        setAnimales_v(av)
    },[mascotas])

    return(
        <>
        <div>
            <div className="color-testing mascota-banner">
                <div className="img-sim"></div>
            </div>
            <div className="row m-0 p-3">
                <div className="col-xl-9 col-lg-8 col-md-6 col-sm-12">
                    <div className="p-4">
                        <h1>Bienvenido a la seccion de mascotas!</h1>
                        <p>Aqui puedes las mascotas que has registrado en el sistema, y si no tienen ninguna mascota registrada, puedes registrar una de tus mascotas!</p>
                        <p>Tambien puedes ingresar animales que hayas visto en algun lado (por ejemplo: animales que parezcan perdidos)</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="p-4">
                        <div className="img-sim"></div>
                    </div>
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
                        <Mascota_miniatura key={i} id={m.id}/>
                    ))}
                </div>
                <h2 className="p-4 m-0 m_t_style">Animales vistos</h2>
                <div className="row m-0 w-bg pt-3 pb-3">
                    {animales_v.map((a, i)=>(
                        <Mascota_miniatura key={i} id={a.id}/>
                    ))}
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Mascotas