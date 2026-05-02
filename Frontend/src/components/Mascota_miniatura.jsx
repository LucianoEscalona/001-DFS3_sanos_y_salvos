import { useEffect, useState } from "react"
import { getSMT_ID } from "../utils/apiHelper"
import { capTxt, formato_collar, formato_raza } from "../utils/FunFuns"
import { useNavigate } from "react-router-dom"

function Mascota_miniatura({id, naturaleza, cerrar, id_ani, origen}){

    const navegar = useNavigate()

    const [data, setData] = useState({})
    const [nombre, setNombre] = useState("")
    const [animal, setAnimal] = useState("")
    const [razas, setRazas] = useState("")
    const [genero, setGenero] = useState("")
    const [edad, setEdad] = useState("")
    const [collar_des_f, setCollar_des_f] = useState("")
    const [chip, setChip] = useState("")
    const [res, setRes] = useState("")
    const [tipo_a, setTipo_a] = useState("")

    const detalle = (id)=>{
        navegar("/mascota_detalle")
        localStorage.setItem("id_m", id)
    }

    const guardar_cerrar = ()=>{
        id_ani(data.id)
        cerrar(false)
    }

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT_ID(8081,"mascota","obtener",id)
            setData(res)
        }
        obtenerData()
    },[id])

    useEffect(()=>{
        
        localStorage.setItem("operdmd", origen)

        if(data.nombre == ""){
            setNombre("Sin nombre")
        }else{
            setNombre(`${capTxt(data.nombre)}`)
        }

        var t_animal = data.animal || ""
        setAnimal(`${capTxt(t_animal)}, `)

        setRazas(formato_raza(data.raza_1, data.raza_2))
        
        if(data.genero_seg){
            setGenero(`${capTxt(data.genero)}`)
        }else{
            setGenero(`${capTxt(data.genero)}, (no se esta seguro)`)
        }

        if(data.edad_seg){
            setEdad(data.edad)
        }else{
            setEdad(`${data.edad} (no es seguro)`)
        }

        setCollar_des_f(formato_collar(data.collar_des, data.collar))

        if(data.chip){
            setChip(`Con chip`)
        }else{
            setChip(`Sin chip`)
        }

        if(data.ubicacion_mos){
            setRes(`Vive en: ${data.ubicacion_res}`)
        }

        var ls_apariencia = data.apariencia?.split("-") || []

        var tipo = data.tipo
        if(tipo == "lo_vi"){
            tipo = "Visto por mi"
        }
        setTipo_a(tipo)

    },[data])

    return(
        <>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ps-4 pe-4 pt-3 pb-3">
            <div className="pb-4 ps-4 pe-4 pt-2 b-gen shadow">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="cc-st mb-2" src="../../public/img/Red-Pin.png" alt="NOT FOUND" />
                </div>
                <div className="img-sim shadow"></div>
                {naturaleza=="ver_detalle" &&
                    <h4 className="mt-4">{nombre}</h4>
                }
                {naturaleza=="sel_reporte" &&
                    <h4 className="mt-4">{nombre} ({tipo_a})</h4>
                }
                <p className="mt-2">{`${animal}${razas}`}</p>
                <p className="mt-2">{genero}</p>
                <p className="mt-2">{edad}</p>
                <p className="mt-2">{collar_des_f}</p>
                <p className="mt-2">{chip}</p>
                <p className="mt-2">{res}</p>
                {naturaleza=="ver_detalle"&&
                    <button onClick={()=>detalle(id)} className="mt-3">Ver detalles</button>
                }
                {naturaleza=="sel_reporte" &&
                    <button onClick={()=>guardar_cerrar()} className="mt-3">Seleccionar</button>
                }
            </div>
        </div>
        </>
    )
}
export default Mascota_miniatura