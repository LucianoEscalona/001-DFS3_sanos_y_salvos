import { useEffect, useState } from "react"
import { getSMT_ID } from "../utils/apiHelper"
import { capTxt } from "../utils/FunFuns"

function Mascota_miniatura({id}){

    const [data, setData] = useState({})
    const [nombre, setNombre] = useState("")
    const [animal, setAnimal] = useState("")
    const [razas, setRazas] = useState("")
    const [genero, setGenero] = useState("")
    const [edad, setEdad] = useState("")
    const [collar_des_f, setCollar_des_f] = useState("")
    const [chip, setChip] = useState("")
    const [res, setRes] = useState("")

    useEffect(()=>{
        const obtenerData = async() => {
            const res = await getSMT_ID(8081,"mascota","obtener",id)
            setData(res)
        }
        obtenerData()
    },[id])

    useEffect(()=>{
        var x = true

        if(data.nombre == ""){
            setNombre("Sin nombre")
        }else{setNombre(`${capTxt(data.nombre)}`)}

        var t_animal = data.animal || ""
        setAnimal(`${capTxt(t_animal)}, `)

        if(!data.raza_2 == "" && !data.raza_2 == "NONE"){
            var r1 = (data.raza_1 || "").replace("_"," ")
            var r2 = (data.raza_2 || "").replace("_"," ")
            setRazas(`${capTxt(r1)} mezcla ${capTxt(r2)}`)
        }else{
            var r1 = (data.raza_1 || "").replace("_"," ")
            setRazas(`${capTxt(r1)}`)
        }

        if(data.genero_seg){
            setGenero(`${capTxt(data.genero)}`)
        }else{
            setGenero(`${capTxt(data.genero)}, (no se esta seguro)`)
        }
        if(data.edad_seg){setEdad(data.edad)}else{setEdad(`${data.edad} (no es seguro)`)}

        if(data.collar){
            var ls_collar = data.collar_des?.split("-") || []
    
            var t_c1 = ls_collar[0]
            var t_c2 = ls_collar[1]
            var t_cm = ls_collar[2]
            var t_cd = ls_collar[3]

            var txt = "Con un collar"
            
            // Formateo de la descripcion del collar, para que sea entendible para las personas
            if(!t_c1 == "" && !t_c1 == "UNKNOWN"){
                txt = txt + ` de color ${t_c1}`
                if(!t_c2 == "" && !t_c2 == "UNKNOWN"){
                    txt = txt + ` y ${t_c2}`
                }
            }else{
                txt = txt + ", no estoy seguro de que color"
            }
            if(!t_cm == "" && !t_cm == "UNKNOWN"){
                txt = txt + `, echo de ${t_cm}`
            }else{
                txt = txt + ", no se de que material"
            }
            if(!t_cd == "" && !t_cd == "UNKNOWN"){
                txt = txt + `, ${t_cd}`
            }
            txt = txt + "."
            setCollar_des_f(txt)
        }else{
            setCollar_des_f("Sin collar")
        }

        if(data.chip){setChip(`Con chip`)}else{setChip(`Sin chip`)}
        if(data.ubicacion_mos){setRes(`Vive en: ${data.ubicacion_res}`)}

        var ls_apariencia = data.apariencia?.split("-") || []

    },[data])

    return(
        <>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="p-4 b-gen">
                <div className="img-sim"></div>
                <h4 className="mt-4">{nombre}</h4>
                <p className="mt-2">{`${animal}${razas}`}</p>
                <p className="mt-2">{genero}</p>
                <p className="mt-2">{edad}</p>
                <p className="mt-2">{collar_des_f}</p>
                <p className="mt-2">{chip}</p>
                <p className="mt-2">{res}</p>
            </div>
        </div>
        </>
    )
}
export default Mascota_miniatura