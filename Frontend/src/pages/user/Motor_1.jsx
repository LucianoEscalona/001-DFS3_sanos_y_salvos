import { useEffect, useState } from "react"
import { motor_v1_test } from "../../utils/motor_v1.0"
import { getSMT_ID, resultMotor, searchMotor } from "../../utils/apiHelper"

function Motor_1(){
    
    const [mascota_01, setMascota_01] = useState({})
    const [mascota_02, setMascota_02] = useState({})

    const [num_m, setNum_m] = useState(0)
    const [num_b, setNum_b] = useState(0)
    const [num_r, setNum_r] = useState(0)

    const [resultados_c, setResultados_c] = useState([])
    const [resultado_unico, setResultado_unico] = useState({})

    const [temp, setTemp] = useState("SSS")

    const searchTEST_01 = async()=>{
        try {
            const res_1 = await getSMT_ID(8081,"mascota","obtener",num_m)
            setMascota_01(res_1)
            const res_2 = await getSMT_ID(8081,"mascota","obtener",num_b)
            setMascota_02(res_2)
            const res_3 = await searchMotor(num_m, num_r)
            const res_4 = await resultMotor(num_r)
            setResultados_c(res_4)
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(()=>{
        resultados_c.forEach(r => {
            if(r.idMascota == mascota_01.id && r.idMascota_revisada == mascota_02.id){
                setResultado_unico(r)
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
            <div className="row m-0">
                <div className="col-4">
                    <h3>Mascota origen</h3>
                    <p>{mascota_01.nombre}</p>
                    <p>{mascota_01.animal}</p>
                    <p>{mascota_01.raza_1}</p>
                    <p>{mascota_01.raza_2}</p>
                    <p>{mascota_01.raza_sg}</p>
                    <p>{mascota_01.genero}</p>
                    <p>{mascota_01.genero_seg}</p>
                    <p>{mascota_01.edad}</p>
                    <p>{mascota_01.edad_seg}</p>
                    <p>{mascota_01.apariencia}</p>
                    <p>{mascota_01.condicion}</p>
                    <p>{mascota_01.collar}</p>
                    <p>{mascota_01.collar_des}</p>
                    <p>{mascota_01.chip}</p>
                    <p>{mascota_01.chip_ubi}</p>
                    <p>{mascota_01.ubicacion_res}</p>
                    <p>{mascota_01.ubicacion_mos}</p>
                    <p>{mascota_01.tipo}</p>
                    <p>{mascota_01.estado}</p>
                    <p>{mascota_01.rut_usuario}</p>
                </div>
                <div className="col-4">
                    <h3>Resultado busqueda</h3>
                    <h1>{resultado_unico.ptje_res_coincidencia}</h1>
                    <p>{"nombre? - "+resultado_unico.nombre_coincide}</p>
                    <p>{"animal? - "+resultado_unico.animal_coincide}</p>
                    <p>{"raza_1? - "+resultado_unico.raza_primaria_coincide}</p>
                    <p>{"raza_2? - "+resultado_unico.raza_secundaria_coincide}</p>
                    <p>{"raza_seg? - "+resultado_unico.raza_es_segura}</p>
                    <p>{"genero? - "+resultado_unico.genero_coincide}</p>
                    <p>{"genero_seg? - "+resultado_unico.genero_es_seguro}</p>
                    <p>{"edad? - "+resultado_unico.edad_coincide}</p>
                    <p>{"edad_seg? - "+resultado_unico.edad_es_segura}</p>
                    <p>{"color ojo I? - "+resultado_unico.color_ojo_i_coincide}</p>
                    <p>{"color ojo D? - "+resultado_unico.color_ojo_d_coincide}</p>
                    <p>{"largo pelaje? - "+resultado_unico.largo_pelaje_coincide}</p>
                    <p>{"collar? - "+resultado_unico.tiene_collar}</p>
                    <p>{"color collar 1? - "+resultado_unico.color_collar_p_coincide}</p>
                    <p>{"color collar 2? - "+resultado_unico.color_collar_s_coincide}</p>
                    <p>{"material? - "+resultado_unico.material_collar_coincide}</p>
                    <p>{"chip? - "+resultado_unico.tiene_chip}</p>
                    <p>{"chip_ubi? - "+resultado_unico.ubicacion_chip_coincide}</p>
                    <p>{"ubicacion? - "+resultado_unico.ubicacion_estadia_coincide}</p>
                    <p>{resultado_unico.idMascota}</p>
                    <p>{resultado_unico.idReporte}</p>
                    <p>{resultado_unico.idMascota_revisada}</p>
                </div>
                <div className="col-4">
                    <h3>Mascota con la que se comparo</h3>
                    <p>{mascota_02.nombre}</p>
                    <p>{mascota_02.animal}</p>
                    <p>{mascota_02.raza_1}</p>
                    <p>{mascota_02.raza_2}</p>
                    <p>{mascota_02.raza_sg}</p>
                    <p>{mascota_02.genero}</p>
                    <p>{mascota_02.genero_seg}</p>
                    <p>{mascota_02.edad}</p>
                    <p>{mascota_02.edad_seg}</p>
                    <p>{mascota_02.apariencia}</p>
                    <p>{mascota_02.condicion}</p>
                    <p>{mascota_02.collar}</p>
                    <p>{mascota_02.collar_des}</p>
                    <p>{mascota_02.chip}</p>
                    <p>{mascota_02.chip_ubi}</p>
                    <p>{mascota_02.ubicacion_res}</p>
                    <p>{mascota_02.ubicacion_mos}</p>
                    <p>{mascota_02.tipo}</p>
                    <p>{mascota_02.estado}</p>
                    <p>{mascota_02.rut_usuario}</p>
                </div>
            </div>
        </div>
        <div className="b-gen mt-3">
            <h3>Resultados de la busqueda:</h3>
            
            <p>Nombre de:</p>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mascota_01.nombre}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mascota_02.nombre}</p>
                </div>
                {resultado_unico.nombre_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong className="positive">Coincide!</strong>
                    </div>
                }
                {!resultado_unico.nombre_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong>No hay coincidencia...</strong>
                    </div>
                }
            </div>

            <p>Especie de:</p>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mascota_01.animal}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mascota_02.animal}</p>
                </div>
                {resultado_unico.animal_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong className="positive">Coincide!</strong>
                    </div>
                }
                {!resultado_unico.animal_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong>No hay coincidencia...</strong>
                    </div>
                }
            </div>

            <p>Razas de los animales:</p>
            <em>falta mas detalle aqui</em>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mascota_01.raza_1}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mascota_02.raza_1}</p>
                </div>
                {resultado_unico.raza_primaria_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong className="positive">Coincide!</strong>
                    </div>
                }
                {!resultado_unico.raza_primaria_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong>No hay coincidencia...</strong>
                    </div>
                }
            </div>

            <p>Genero de:</p>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mascota_01.genero}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mascota_02.genero}</p>
                </div>
                {resultado_unico.genero_coincide &&
                    <>
                    {resultado_unico.genero_es_seguro &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="positive">Coincide!</strong>
                        </div>
                    }
                    {!resultado_unico.genero_es_seguro &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="maybe">Coincide!, pero el usuario no esta seguro del genero del animal...</strong>
                        </div>
                    }
                    </>
                    
                }
                {!resultado_unico.genero_coincide &&
                    <>
                    {resultado_unico.genero_es_seguro &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong>No hay coincidencia...</strong>
                        </div>
                    }
                    {!resultado_unico.genero_es_seguro &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="maybe">No hay coincidencia, pero el usuario no esta seguro del genero...</strong>
                        </div>
                    }
                    </>
                }
            </div>

            <p>Edad de:</p>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mascota_01.edad}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mascota_02.edad}</p>
                </div>
                {resultado_unico.edad_coincide &&
                    <>
                    {resultado_unico.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="positive">Coincide!</strong>
                        </div>
                    }
                    {!resultado_unico.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="maybe">Coincide!, pero el usuario no esta seguro de la edad del animal...</strong>
                        </div>
                    }
                    </>
                    
                }
                {!resultado_unico.edad_coincide &&
                    <>
                    {resultado_unico.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong>No hay coincidencia...</strong>
                        </div>
                    }
                    {!resultado_unico.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="maybe">No hay coincidencia, pero el usuario no esta seguro de la edad del animal...</strong>
                        </div>
                    }
                    </>
                }
            </div>

            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
            <div className="row m-0">
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
                <div className="col-4">{temp}</div>
            </div>
        </div>
        </>
    )
}
export default Motor_1