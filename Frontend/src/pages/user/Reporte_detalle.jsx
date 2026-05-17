import { useEffect, useState } from "react"
import { deleteSMT_auth, getSMT_ID, resultMotor, searchMotor } from "../../utils/apiHelper"
import { capTxt, formato_apariencia, formato_collar, formato_raza } from "../../utils/FunFuns"
import { useNavigate } from "react-router-dom"
import Reporte_agregar from "../../components/Reporte_agregar"

function Reporte_detalle({id}) {

    const [reporte, setReporte] = useState({})
    const [animal,   setAnimal] = useState({})
    const [usuario, setUsuario] = useState({})

    const [sesion,   setSesion] = useState({})

    const [tipo, setTipo]               = useState("")
    const [nombre, setNombre]           = useState("")
    const [especie, setEspecie]         = useState("")
    const [razas, setRazas]             = useState("")
    const [genero, setGenero]           = useState("")
    const [edad, setEdad]               = useState("")
    const [apariencia, setApariencia]   = useState("")
    const [condicion, setCondicion]     = useState("")
    const [collar_des, setCollar_des]   = useState("")
    const [chip, setChip]               = useState("")
    const [ubicacion, setUbicacion]     = useState("")
    const [estado, setEstado]           = useState("")

    const [origen_red, setOrigen_red]   = useState("")

    const [modificando, setModificando] = useState(false)

    const [resReportes, setResReportes] = useState([])

    const navegar = useNavigate()

    const retirar = ()=>{
        if(confirm("Estas seguro de quitar el reporte del sistema?")){
            deleteSMT_auth("reporte","retirar_sis",reporte.id)
        }
    }
    const buscar_coincidencias = async(id_m, id_r)=>{
        const res = await searchMotor(id_m, id_r)
        const res_2 = await resultMotor(id_r)
        setResReportes(res_2)
    }
    const printResultados = ()=>{
        console.log(resReportes)
    }

    useEffect(()=>{

        const sesion_u = JSON.parse(localStorage.getItem("sesion"))
        setSesion(sesion_u)

        id = JSON.parse(localStorage.getItem("id_rs"))

        const obtenerReporte = async() => {
            const res = await getSMT_ID("reporte","obtener",id)
            setReporte(res)
        }
        obtenerReporte()
        setOrigen_red(localStorage.getItem("operdrd"))
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
    useEffect(()=>{

        var t_txt_t = ""

        if(animal.tipo=="mascota"){
            t_txt_t="Mascota"
        }else if(animal.tipo=="lo_vi"){
            t_txt_t="Animal visto/perdido"
        }

        setTipo(t_txt_t)

        if(animal.nombre == ""){
            setNombre("Sin nombre")
        }else{
            setNombre(capTxt(animal.nombre))
        }
        
        var t_a = animal.animal || ""
        setEspecie(`${capTxt(t_a)}, `)

        setRazas(formato_raza(animal.raza_1, animal.raza_2))

        if(animal.genero_seg){
            setGenero(capTxt(animal.genero))
        }

        else{
            setGenero(`${capTxt(animal.genero)}, no se esta seguro`)
        }

        if(animal.edad_seg){
            setEdad(animal.edad)
        }else{
            setEdad(`${animal.edad} (no es seguro)`)
        }

        setApariencia(formato_apariencia(animal.apariencia))

        if(animal.condicion != "" && animal.condicion != undefined){
            setCondicion(capTxt(animal.condicion))
            if(animal.condicion == "NONE"){
                setCondicion("No posee ninguna condicion especial")
            }
        }else{
            setCondicion("No posee ninguna condicion especial")
        }

        setCollar_des(formato_collar(animal.collar_des, animal.collar))

        if(animal.chip){
            setChip(`Con chip, ubicado en ${animal.chip_ubi}`)
        }else{
            setChip(`Sin chip`)
        }

        if(animal.ubicacion_mos){
            setUbicacion(animal.ubicacion_res)
        }

        var t_txt_f = ""

        if(animal.estado=="con_duenio"){
            t_txt_f="Con su dueño"
        }else if(animal.estado=="perdido"){
            t_txt_f="PERDIDO"
        }

        setEstado(t_txt_f)

    },[animal])

    return(
        <>
        <div className="p-4 b-gen"> 
            <h2>TIPO REPORTE</h2>
            <div className="img-sim min-h"></div>
            <div className="p-3">
                <p className="mt-2">{tipo}</p>
                <p className="mt-2">{nombre}</p>
                <p className="mt-2">{especie}{razas}</p>
                <p className="mt-2">{genero}</p>
                <p className="mt-2">{edad}</p>
                <p className="mt-2">{apariencia}</p>
                <p className="mt-2">{condicion}</p>
                <p className="mt-2">{collar_des}</p>
                <p className="mt-2">{chip}</p>
                <p className="mt-2">{ubicacion}</p>
                <p className="mt-2"><em>{estado}</em></p>
                <p>--------------------------</p>
                <p className="mt-2">{reporte.titulo}</p>
                <p className="mt-2">{reporte.descripcion}</p>
                <p className="mt-2">{reporte.consideracion_e}</p>
                <p className="mt-2">{reporte.tiempo_uvv}</p>
                <p className="mt-2">{reporte.ubicacion_uvv}</p>
                <p>--------------------------</p>
                {animal.tipo == "mascota" &&
                    <>
                        <p className="mt-2">Si lo ve, contactese con {usuario.nombre} {usuario.appelido_p}</p>
                        <h3 className="mt-2 b-gen p-3">{usuario.telefono}</h3>
                    </>
                }
                {animal.tipo == "lo_vi" &&
                    <>
                        <p className="mt-2">Si es suyo, contacte con {usuario.nombre} {usuario.appelido_p}</p>
                        <h3 className="mt-2 b-gen p-3">{usuario.telefono}</h3>
                    </>
                }
                {origen_red == "m_reportes" &&
                    <button onClick={()=>navegar("/reportes")}>Regresar</button>
                }
                {origen_red == "s_reportes" &&
                    <button onClick={()=>navegar("/reportes_sistema")}>Regresar</button>
                }
                {origen_red == "home" &&
                    <button onClick={()=>navegar("/")}>Regresar</button>
                }
                {sesion != undefined && sesion.id == reporte.id_usuario &&
                    <>
                        <button onClick={()=>setModificando(true)}>Modificar</button>
                        <button onClick={()=>retirar()}>Quitar reporte</button>
                    </>
                }
                <p>-Probando el motor-</p>
                <button onClick={()=>buscar_coincidencias(reporte.id_mascota, reporte.id)}>Buscar coincidencias</button>
                <button onClick={()=>printResultados()}>PRINT</button>
            </div>
        </div>
        {modificando &&
            <Reporte_agregar cerrar={()=>setModificando(false)} naturaleza={"mod"} id_mod={reporte.id}/>
        }
        </>
    )
}
export default Reporte_detalle