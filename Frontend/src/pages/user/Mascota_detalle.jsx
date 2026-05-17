import { use, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteSMT_auth, getSMT_ID } from "../../utils/apiHelper"
import { capTxt, formato_apariencia, formato_collar, formato_raza } from "../../utils/FunFuns"
import Mascota_agregar from "../../components/Mascota_agregar"

function Mascota_detalle(){

    const navegar = useNavigate()

    const [data, setData] = useState({})

    const [tipo, setTipo]               = useState("")
    const [nombre, setNombre]           = useState("")
    const [animal, setAnimal]           = useState("")
    const [razas, setRazas]             = useState("")
    const [genero, setGenero]           = useState("")
    const [edad, setEdad]               = useState("")
    const [apariencia, setApariencia]   = useState("")
    const [condicion, setCondicion]     = useState("")
    const [collar_des, setCollar_des]   = useState("")
    const [chip, setChip]               = useState("")
    const [ubicacion, setUbicacion]     = useState("")
    const [estado, setEstado]           = useState("")
    const [rut_temp, setRut_temp]       = useState("")

    const [mostrar_agregar, setMostrar_agregar] = useState(false)

    const id = localStorage.getItem("id_m")

    const origen_red = localStorage.getItem("operdmd")
    var sesion = JSON.parse(localStorage.getItem("sesion")) || null

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT_ID("mascota","obtener",id)
            setData(res)
        }
        obtenerData()
        console.log(sesion)
    },[])
    useEffect(()=>{

        var t_txt_t = ""
        setRut_temp(data.rut_usuario)

        if(data.tipo=="mascota"){
            t_txt_t="Mascota"
        }else if(data.tipo=="lo_vi"){
            t_txt_t="Animal visto/perdido"
        }

        setTipo(t_txt_t)

        if(data.nombre == ""){
            setNombre("Sin nombre")
        }else{
            setNombre(capTxt(data.nombre))
        }
        
        var t_a = data.animal || ""
        setAnimal(`${capTxt(t_a)}, `)

        setRazas(formato_raza(data.raza_1, data.raza_2))

        if(data.genero_seg){
            setGenero(capTxt(data.genero))
        }

        else{
            setGenero(`${capTxt(data.genero)}, no se esta seguro`)
        }

        if(data.edad_seg){
            setEdad(data.edad)
        }else{
            setEdad(`${data.edad} (no es seguro)`)
        }

        setApariencia(formato_apariencia(data.apariencia))

        if(data.condicion != "" && data.condicion != undefined){
            setCondicion(capTxt(data.condicion))
            if(animal.condicion == "NONE"){
                setCondicion("No posee ninguna condicion especial")
            }
        }else{
            setCondicion("No posee ninguna condicion especial")
        }

        setCollar_des(formato_collar(data.collar_des, data.collar))

        if(data.chip){
            setChip(`Con chip, ubicado en ${data.chip_ubi}`)
        }else{
            setChip(`Sin chip`)
        }

        if(data.ubicacion_mos){
            setUbicacion(data.ubicacion_res)
        }

        var t_txt_f = ""

        if(data.estado=="con_duenio"){
            t_txt_f="Con su dueño"
        }else if(data.estado=="perdido"){
            t_txt_f="PERDIDO"
        }

        setEstado(t_txt_f)


    },[data])

    const mascota = ()=>{
        navegar(origen_red)
    }
    const retirar = ()=>{
        if(confirm("Estas seguro de retirar la mascota del sistema?")){
            deleteSMT_auth("mascota","retirar_sis",data.id)
        }
    }

    return(
        <>
            <div className="centrado_tarjetas z-pos-bottom">
            <div className="b-gen mw-fra p-4">
                <div className="row m-0">
                    <div className="col-md-6 p-3">
                        <h5><strong>Informacion general:</strong></h5>
                        <div className="img-sim mt-3 mb-2 shadow"></div>
                        <p className="mt-3">
                            <strong>Tipo de animal: </strong>{tipo}
                        </p>
                        <p className="mt-2">
                            <strong>Nombre: </strong>{nombre}
                        </p>
                        <p className="mt-2">
                            <strong>Especie: </strong>{animal}{razas}
                        </p>
                        <p className="mt-2">
                            <strong>Genero: </strong>{genero}
                        </p>
                        <p className="mt-2">
                            <strong>Edad: </strong>{edad}
                        </p>
                        
                    </div>
                    <div className="col-md-6 p-3">
                        <h5><strong>Descripcion especifica:</strong></h5>
                        <p className="mt-3">
                            <strong>Apariencia: </strong>{apariencia}
                        </p>
                        <p className="mt-2">
                            <strong>Condicion especial: </strong>{condicion}
                        </p>
                        <p className="mt-2">
                            <strong>Collar: </strong>{collar_des}
                        </p>
                        <p className="mt-2">
                            <strong>Chip: </strong>{chip}
                        </p>
                        <p className="mt-2">
                            <strong>Vive en: </strong>{ubicacion}
                        </p>
                        <p className="mt-2"><em>{estado}</em></p>
                        <p className="mt-2"><em>RUT: {rut_temp}</em></p>
                        
                        <div className="row m-0">
                            <div className="col-12 p-0">
                                <button onClick={()=>mascota()}>Regresar</button>
                                {sesion != null && rut_temp == sesion.rut &&
                                    <>
                                        <button onClick={()=>setMostrar_agregar(true)} className="ms-3 m-3">Modificar</button>
                                        <button onClick={()=>retirar()} className="btn-red">Retirar del sistema</button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    {sesion != null && rut_temp == sesion.rut &&
                        <button className="btn-red">Reportar como desaparecido</button>
                    }
                </div>
            </div>
            </div>
            {mostrar_agregar &&
                <Mascota_agregar cerrar={()=>setMostrar_agregar(false)} naturaleza={"mod"} id_mod={data.id}/>
            }
        </>
    )
}
export default Mascota_detalle