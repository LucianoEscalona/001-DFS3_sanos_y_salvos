import { useEffect, useState } from "react"
import { motor_v1_test } from "../../utils/motor_v1.0"
import { getSMT_ID, resultMotor, searchMotor } from "../../utils/apiHelper"

function Motor_1(){
    
    const [mas_1, setMas_1] = useState({})
    const [mas_2, setMas_2] = useState({})

    const [num_m, setNum_m] = useState(0)
    const [num_b, setNum_b] = useState(0)
    const [num_r, setNum_r] = useState(0)

    const [resultados_c, setResultados_c] = useState([])
    const [res_u, setRes_u] = useState({})

    const [temp, setTemp] = useState("SSS")

    const searchTEST_01 = async()=>{
        try {
            const res_1 = await getSMT_ID("mascota","obtener",num_m)
            setMas_1(res_1)
            const res_2 = await getSMT_ID("mascota","obtener",num_b)
            setMas_2(res_2)
            const res_3 = await searchMotor(num_m, num_r)
            const res_4 = await resultMotor(num_r)
            setResultados_c(res_4)
        } catch (error) {
            console.error(error)
        }
        
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
        

        <div className="b-gen card-mSize">
            <div className="row m-0">

                <div className="col-md-6 col-sm-12 p-4">
                    <h4>Coincidencias en la informacion general:</h4>
                    {res_u.nombre_coincide &&
                        <div className="d-flex gap-2">
                            <p>Nombre: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.nombre_coincide &&
                        <div className="d-flex gap-2">
                            <p>Nombre: </p><p>No coincide.</p>
                        </div>
                    }
                    {res_u.animal_coincide &&
                        <div className="d-flex gap-2">
                            <p>Especie: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.animal_coincide &&
                        <div className="d-flex gap-2">
                            <p>Especie: </p><p>No coincide!</p>
                        </div>
                    }
                    {res_u.raza_primaria_coincide &&
                        <>
                            {res_u.raza_secundaria_coincide &&
                                <>
                                <div className="d-flex gap-2">
                                    <p>Razas: </p><p>Coinciden!</p>
                                </div>
                                {!res_u.raza_es_segura &&
                                    <div className="d-flex gap-2">
                                        <p>Pero el usuario no esta seguro de las razas...</p>
                                    </div>   
                                }
                                </>
                                
                            }
                            {!res_u.raza_secundaria_coincide &&
                                <>
                                <div className="d-flex gap-2">
                                    <p>Razas: </p><p>Coincide, pero la raza con que es mezcla no.</p>
                                </div>
                                {!res_u.raza_es_segura &&
                                    <div className="d-flex gap-2">
                                        <p>Ademas, el usuario no esta seguro de las razas...</p>
                                    </div>
                                }
                                </>
                            }
                            
                        </>
                    }{!res_u.raza_primaria_coincide &&
                        <>
                            <div className="d-flex gap-2">
                                <p>Razas: </p><p>No coincide.</p>
                            </div>
                            {res_u.raza_es_segura &&
                                <></> 
                            }
                            {!res_u.raza_es_segura &&
                                <div className="d-flex gap-2">
                                    <p>Pero el usuario no esta seguro de las razas, posible coincidencia</p>
                                </div>   
                            }
                        </>
                    }
                    {res_u.genero_coincide &&
                        <>
                        <div className="d-flex gap-2">
                            <p>Genero: </p><p>Coincide!</p>
                        </div>
                        {res_u.genero_es_seguro &&
                            <></>
                        }
                        {!res_u.genero_es_seguro &&
                            <div className="d-flex gap-2">
                                <p>Pero el usuario no esta seguro del genero...</p>
                            </div>
                        }
                        </>
                        
                    }{!res_u.genero_coincide &&
                        <>
                        <div className="d-flex gap-2">
                            <p>Genero: </p><p>No coincide.</p>
                        </div>
                        {res_u.genero_es_seguro &&
                            <></>
                        }
                        {!res_u.genero_es_seguro &&
                            <div className="d-flex gap-2">
                                <p>Pero el usuario no esta seguro del genero, posible coincidencia.</p>
                            </div>
                        }
                        </>
                    }
                    {res_u.edad_coincide &&
                        <>
                        <div className="d-flex gap-2">
                            <p>Edad: </p><p>Coincide!</p>
                        </div>
                        {res_u.edad_coincide &&
                            <></>
                        }
                        {!res_u.edad_coincide &&
                            <><p>Pero el usuario no esta seguro de la edad...</p></>
                        }
                        </>
                    }{!res_u.edad_coincide &&
                        <>
                        <div className="d-flex gap-2">
                            <p>Edad: </p><p>No coincide.</p>
                        </div>
                        {res_u.edad_coincide &&
                            <></>
                        }
                        {!res_u.edad_coincide &&
                            <><p>Pero el usuario no esta seguro de la edad, posible coincidencia.</p></>
                        }
                        </>
                    }
                    <h4>Coincidencias en la aparencia:</h4>
                    {res_u.color_ojo_i_coincide &&
                        <div className="d-flex gap-2">
                            <p>Color del ojo izquierdo: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.color_ojo_i_coincide &&
                        <div className="d-flex gap-2">
                            <p>Color del ojo izquierdo: </p><p>No coincide.</p>
                        </div>
                    }
                    {res_u.color_ojo_d_coincide &&
                        <div className="d-flex gap-2">
                            <p>Color del ojo derecho: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.color_ojo_d_coincide &&
                        <div className="d-flex gap-2">
                            <p>Color del ojo derecho: </p><p>Coincide!</p>
                        </div>
                    }
                    {res_u.largo_pelaje_coincide &&
                        <div className="d-flex gap-2">
                            <p>Largo del pelaje: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.largo_pelaje_coincide &&
                        <div className="d-flex gap-2">
                            <p>Largo del pelaje: </p><p>No coincide.</p>
                        </div>
                    }
                    <p className="mt-3">Si quiere revisar, los detalles de la apariencia, o si el detalle de la condicion especial entre ambos animales, baje un poco para ver los datos de ambos animales</p>
                </div>
        
                <div className="col-md-6 col-sm-12 p-4">
                    <h4>Coincidencias del collar:</h4>
                    {res_u.tiene_collar &&
                        <div className="d-flex gap-2">
                            <p>Tenencia collar: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.tiene_collar &&
                        <div className="d-flex gap-2">
                            <p>Tiene collar: </p><p>No coincide.</p>
                        </div>
                    }
                    {res_u.color_collar_p_coincide &&
                        <><p>Color del collar: </p><p>Coincide!</p></>
                    }{!res_u.color_collar_p_coincide &&
                        <><p>Color del collar: </p><p>No coincide.</p></>
                    }
                    {res_u.color_collar_s_coincide &&
                        <><p>Color secundario del collar: </p><p>Coincide!</p></>
                    }{!res_u.color_collar_s_coincide &&
                        <><p>Color secundario del collar: </p><p>No coincide.</p></>
                    }
                    {res_u.material_collar_coincide &&
                        <><p>Material del collar: </p><p>Coincide!</p></>
                    }{!res_u.material_collar_coincide &&
                        <><p>Material del collar: </p><p>No coincide.</p></>
                    }
                    <p>Si quiere revisar la descripcion extra del collar, revise los datos de ambos animales mas abajo</p>
                    <h4>Coincidencia del chip:</h4>
                    {res_u.tiene_chip &&
                        <><p>Tenencia de chip: </p><p>Coincide!</p></>
                    }{!res_u.tiene_chip &&
                        <><p>Tenencia de chip: </p><p>No coincide!</p></>
                    }
                    {res_u.chip_ubi &&
                        <><p>Ubicacion del chip: </p><p>Coincide!</p></>
                    }{!res_u.chip_ubi &&
                        <><p>Ubicacion del chip: </p><p>No coincide!</p></>
                    }
                </div>

            </div>
                
                
        </div>
        <div className="row m-0 p-3">
            <div className="b-gen col-6 p-3">

            </div>
            <div className="b-gen col-6 p-3">
                
            </div>
        </div>
        </>
    )
}
export default Motor_1