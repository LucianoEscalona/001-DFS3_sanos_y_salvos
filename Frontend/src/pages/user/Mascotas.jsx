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
                <img src="x" alt="TEMP MESSAGE" />
            </div>
            <div className="color-testing mascota-titulo">
                <p>Welcome to your pets!</p>
            </div>

            <div className="color-testing mascota-opciones">
                <p>Check for coincidences</p>
            </div>
            <button onClick={()=>setMostrar_agregar(true)}>Registrar mascota</button>
            <p className="cuadrao">Mascotas</p>
            {mostrar_agregar &&
                <Mascota_agregar cerrar={()=>setMostrar_agregar(false)}/>
            }
            <h1 className="p-4">MASCOTAS</h1>
            <div className="row m-0">
                {mascotas_r.map((m, i)=>(
                    <Mascota_miniatura Key={i} id={m.id}/>
                ))}
            </div>
            <h1 className="p-4">VISTOS</h1>
            <div className="row m-0">
                {animales_v.map((a, i)=>(
                    <Mascota_miniatura Key={i} id={a.id}/>
                ))}
            </div>
            
        </div>
        </>
    )
}
export default Mascotas