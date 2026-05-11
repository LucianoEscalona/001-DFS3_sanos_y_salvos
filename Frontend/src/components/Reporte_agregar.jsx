import { useEffect, useState } from "react"
import Mascotas_carousel from "./Mascotas_carousel"
import { getSMT, getSMT_ID, postSMT, putSMT } from "../utils/apiHelper"
import Mascota_agregar from "./Mascota_agregar"

function Reporte_agregar({cerrar, naturaleza, id_mod}) {

    const [animales,               setAnimales] = useState([])
    const [a_seleccionado,   setA_seleccionado] = useState({})
    const [is_seleccionado, setIs_seleccionado] = useState(false)
    
    const [seleccionar, setSeleccionar] = useState(false)
    const [ingresar,       setIngresar] = useState(false)

    const [id_m, setId_m] = useState(0)
    const [id_u, setId_u] = useState(0)

    const [titulo,                   setTitulo] = useState("")
    const [descripcion,         setDescripcion] = useState("")
    const [consideracion,     setConsideracion] = useState("")
    const [tiempo_visto,       setTiempo_visto] = useState("")
    const [ubicacion_visto, setUbicacion_visto] = useState("")

    const [id_seleccion_rep, setId_seleccion_rep] = useState(0)

    const [sesion, setSesion] = useState({})

    const [dataMod, setDataMod] = useState({})

    const animal_seleccionado = (id_seleccionado)=>{
        if(id_seleccionado!=0){
            const animal_reporte = animales.find(a=>a.id==id_seleccionado)
            setA_seleccionado(animal_reporte)
            setIs_seleccionado(true)
        }
    }
    const cerrar_agregar = ()=>{
        setIs_seleccionado(false)
        setId_seleccion_rep(0)
        cerrar(false)
    }
    const print_info_r = ()=>{
        const reporte_g = {
            id_mascota: id_seleccion_rep,
            id_usuario: sesion.id,
            titulo: titulo,
            descripcion: descripcion,
            consideracion_e: consideracion,
            tiempo_uvv: tiempo_visto,
            ubicacion_uvv: ubicacion_visto
        }
        if(naturaleza == "add"){
            postSMT("reporte","guardar",reporte_g)
            cerrar_agregar()
        }
        if(naturaleza == "mod"){
            putSMT("reporte","mod_rep",reporte_g,id_mod)
            cerrar_agregar()
        }
        
    }

    useEffect(()=>{
        setSesion(JSON.parse(localStorage.getItem("sesion")))
        const obtenerData = async() => {
            const res = await getSMT("mascota","listar")
            setAnimales(res)
        }
        obtenerData()
        if(naturaleza == "mod"){
            const obtenerData = async() => {
                const res = await getSMT_ID("reporte","obtener",id_mod)
                setDataMod(res)
            }
            obtenerData()
        }
    },[])

    useEffect(()=>{
        console.log(dataMod)
        setId_seleccion_rep(dataMod.id_mascota)
        setId_u(dataMod.id_usuario)

        setTitulo(dataMod.titulo)
        setDescripcion(dataMod.descripcion)
        setConsideracion(dataMod.consideracion_e)
        setTiempo_visto(dataMod.tiempo_uvv)
        setUbicacion_visto(dataMod.ubicacion_uvv)

        if(dataMod.id_mascota != undefined && id_mod != undefined){
            animal_seleccionado(dataMod.id_mascota)
        }
    },[dataMod])

    useEffect(()=>{
        try {
            animal_seleccionado(id_seleccion_rep)
        } catch (error) {
            console.error("aasdasd")
        }
    },[id_seleccion_rep])
    
    return(
        <>
            <div className="fondo_opaco_tarjetas">
                <div className="mw-fra b-gen p-5">
                    <h4>Animal asociado al reporte</h4>
                    <button onClick={()=>setSeleccionar(true)}>Seleccionar</button>
                    <button onClick={()=>setIngresar(true)}>Ingresar</button>
                    {is_seleccionado && a_seleccionado != undefined &&
                        <p>{a_seleccionado.nombre}</p>
                    }
                    <h4>Ingresar datos del reporte</h4>
                    <p>Titulo del reporte:</p>
                    <input value={titulo} onChange={(e)=>setTitulo(e.target.value)} className="w-e mb-2" type="text" />
                    <p>Descripcion del reporte:</p>
                    <textarea value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} className="w-e mb-2" name="" id=""></textarea>
                    <p>Consideracion especial:</p>
                    <textarea value={consideracion} onChange={(e)=>setConsideracion(e.target.value)} className="w-e mb-2" name="" id=""></textarea>
                    <p>Cuando vio al animal?</p>
                    <input value={tiempo_visto} onChange={(e)=>setTiempo_visto(e.target.value)} className="w-e mb-2" type="datetime-local" />
                    <p>Donde vio al animal?</p>
                    <input value={ubicacion_visto} onChange={(e)=>setUbicacion_visto(e.target.value)} className="w-e mb-2" type="text" />
                    {naturaleza == "add" &&
                        <button onClick={()=>print_info_r()}>Subir reporte</button>
                    }
                    {naturaleza == "mod" &&
                        <button onClick={()=>print_info_r()}>Guardar cambios</button>
                    }
                    
                    <button onClick={()=>cerrar_agregar()}>Cerrar</button>
                </div>
                {seleccionar &&
                    <Mascotas_carousel cerrar={()=>setSeleccionar(false)} id_ani={setId_seleccion_rep}/>
                }
                {ingresar &&
                    <Mascota_agregar cerrar={()=>setIngresar(false)} id_ani={setId_seleccion_rep} naturaleza={"ag_reporte"}/>
                }
            </div>
        </>
    )
}
export default Reporte_agregar