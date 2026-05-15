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

    const [resultados_c, setResultados_c] = useState([])
    const [res_u, setRes_u] = useState({})

    const [temp, setTemp] = useState("SSS")

    const [resGuardado, setResGuardado] = useState("")

    const searchTEST_01 = async()=>{
        try {
            const res_1 = await getSMT_ID("mascota","obtener",num_m)
            setMas_1(res_1)
            const res_2 = await getSMT_ID("mascota","obtener",num_b)
            setMas_2(res_2)
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
        const res_sap = res.filter(i=>i.idMascota !== i.idMascota_revisada) 
        setResultados_c(res_sap)
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
        <div className="b-gen">
            <p>temp</p>
            <p>id mascota</p>
            <input type="number" value={num_m} onChange={(e)=>setNum_m(e.target.value)}/>
            <p>id a buscar</p>
            <input type="number" value={num_b} onChange={(e)=>setNum_b(e.target.value)}/>
            <p>id reporte</p>
            <input type="number" value={num_r} onChange={(e)=>setNum_r(e.target.value)}/>
            <button onClick={()=>searchTEST_01()}>Generar concidencia</button>
            <button onClick={()=>mostrarResultados(num_r)}>Buscar concidencia</button>
            <button onClick={()=>console.log(num_r)}>p</button>
            
        </div>
        
        <Reporte_carousel id_rb={setNum_r}/>

        {resultados_c.map((r,i)=>(
            <Resultado_miniatura res={r} key={i}/>
        ))}
        
        <div className="row m-0 p-3">
            <div className="b-gen col-6 p-3">
                    <button onClick={()=>printRES()}>PRINT</button>
            </div>
            <div className="b-gen col-6 p-3">
                
            </div>
        </div>
        </>
    )
}
export default Motor_1