import { useEffect, useState } from "react"
import { motor_v1_test } from "../../utils/motor_v1.0"
import { getSMT, getSMT_ID, resultMotor, searchMotor } from "../../utils/apiHelper"
import Resultado_dettalle from "./Resultado_detalle"
import Resultado_miniatura from "../../components/Resultado_miniatura"
import Reporte_carousel from "../../components/Reporte_carousel"

function Motor_1(){
    
    const [mas_1, setMas_1] = useState({})
    const [mas_2, setMas_2] = useState({})

    const [num_m, setNum_m] = useState(0)
    const [num_b, setNum_b] = useState(0)
    const [num_r, setNum_r] = useState(0)
    const [nombre_a, setNombre_a] = useState("")
    const [titulo_r, setTitulo_r] = useState("")

    const [resultados_c, setResultados_c] = useState([])
    const [res_u, setRes_u] = useState({})

    const [temp, setTemp] = useState("SSS")

    const [resGuardado, setResGuardado] = useState("")

    const searchTEST_01 = async()=>{
        try {
            const res_1 = await getSMT_ID("mascota","obtener",num_m)
            setMas_1(res_1)
            const res_3 = await searchMotor(num_m, num_r)
            setResGuardado(res_3)
        } catch (error) {
            console.error(error)
        }
        
    }
    const printRES = ()=>{
        console.log(resGuardado)
    }
    const mostrarResultados = async(nr)=>{
        const res = await resultMotor(nr)
        console.log("RESULTADO RES CON NUMERO DE REPORTE:",res)
        setResultados_c(res)
        console.log(res_sap)
    }

    useEffect(()=>{
        resultados_c.forEach(r => {
            if(r.idMascota == mas_1.id && r.idMascota_revisada == mas_2.id){
                setRes_u(r)
            }
        })
    },[resultados_c])

    return(
        <>
        <div className="b-gen p-4">
            <h3 className="c-black">Reporte y animal seleccionado:</h3>
            <p className="mb-3">{titulo_r}, {nombre_a}</p>
            <button onClick={()=>searchTEST_01()}>Buscar coincidencias</button>
            <button className="ms-2" onClick={()=>mostrarResultados(num_r)}>Mostrar resutlados</button>
            
        </div>
        
        <Reporte_carousel id_rb={setNum_r} id_mb={setNum_m} nombre_mb={setNombre_a} titulo_rb={setTitulo_r}/>

        {resultados_c.map((r,i)=>(
            <Resultado_miniatura res={r} key={i}/>
        ))}
        </>
    )
}
export default Motor_1