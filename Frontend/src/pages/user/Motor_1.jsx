import { useEffect, useState } from "react"
import { motor_v1_test } from "../../utils/motor_v1.0"
import { getSMT_ID, resultMotor, searchMotor } from "../../utils/apiHelper"
import Resultado_dettalle from "../../components/Resultado_detalle"

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
            const res_4 = await resultMotor(num_r)
            setResultados_c(res_4)
        } catch (error) {
            console.error(error)
        }
        
    }
    const printRES = ()=>{
        console.log(resGuardado)
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
            <button onClick={()=>searchTEST_01()}>Buscar concidencia</button>
            
        </div>
        
        <Resultado_dettalle id_ru={res_u.id}/>
        
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