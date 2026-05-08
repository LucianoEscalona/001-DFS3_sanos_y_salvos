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
            const res_1 = await getSMT_ID(8081,"mascota","obtener",num_m)
            setMas_1(res_1)
            const res_2 = await getSMT_ID(8081,"mascota","obtener",num_b)
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
            <div className="row m-0">
                <div className="col-4">
                    <h3>Mascota origen</h3>
                    <p>{mas_1.nombre}</p>
                    <p>{mas_1.animal}</p>
                    <p>{mas_1.raza_1}</p>
                    <p>{mas_1.raza_2}</p>
                    <p>{mas_1.raza_sg}</p>
                    <p>{mas_1.genero}</p>
                    <p>{mas_1.genero_seg}</p>
                    <p>{mas_1.edad}</p>
                    <p>{mas_1.edad_seg}</p>
                    <p>{mas_1.apariencia}</p>
                    <p>{mas_1.condicion}</p>
                    <p>{mas_1.collar}</p>
                    <p>{mas_1.collar_des}</p>
                    <p>{mas_1.chip}</p>
                    <p>{mas_1.chip_ubi}</p>
                    <p>{mas_1.ubicacion_res}</p>
                    <p>{mas_1.ubicacion_mos}</p>
                    <p>{mas_1.tipo}</p>
                    <p>{mas_1.estado}</p>
                    <p>{mas_1.rut_usuario}</p>
                </div>
                <div className="col-4">
                    <h3>Resultado busqueda</h3>
                    <h1>{res_u.ptje_res_coincidencia}</h1>
                    <p>{"nombre? - "+res_u.nombre_coincide}</p>
                    <p>{"animal? - "+res_u.animal_coincide}</p>
                    <p>{"raza_1? - "+res_u.raza_primaria_coincide}</p>
                    <p>{"raza_2? - "+res_u.raza_secundaria_coincide}</p>
                    <p>{"raza_seg? - "+res_u.raza_es_segura}</p>
                    <p>{"genero? - "+res_u.genero_coincide}</p>
                    <p>{"genero_seg? - "+res_u.genero_es_seguro}</p>
                    <p>{"edad? - "+res_u.edad_coincide}</p>
                    <p>{"edad_seg? - "+res_u.edad_es_segura}</p>
                    <p>{"color ojo I? - "+res_u.color_ojo_i_coincide}</p>
                    <p>{"color ojo D? - "+res_u.color_ojo_d_coincide}</p>
                    <p>{"largo pelaje? - "+res_u.largo_pelaje_coincide}</p>
                    <p>{"collar? - "+res_u.tiene_collar}</p>
                    <p>{"color collar 1? - "+res_u.color_collar_p_coincide}</p>
                    <p>{"color collar 2? - "+res_u.color_collar_s_coincide}</p>
                    <p>{"material? - "+res_u.material_collar_coincide}</p>
                    <p>{"chip? - "+res_u.tiene_chip}</p>
                    <p>{"chip_ubi? - "+res_u.ubicacion_chip_coincide}</p>
                    <p>{"ubicacion? - "+res_u.ubicacion_estadia_coincide}</p>
                    <p>{res_u.idMascota}</p>
                    <p>{res_u.idReporte}</p>
                    <p>{res_u.idMascota_revisada}</p>
                </div>
                <div className="col-4">
                    <h3>Mascota con la que se comparo</h3>
                    <p>{mas_2.nombre}</p>
                    <p>{mas_2.animal}</p>
                    <p>{mas_2.raza_1}</p>
                    <p>{mas_2.raza_2}</p>
                    <p>{mas_2.raza_sg}</p>
                    <p>{mas_2.genero}</p>
                    <p>{mas_2.genero_seg}</p>
                    <p>{mas_2.edad}</p>
                    <p>{mas_2.edad_seg}</p>
                    <p>{mas_2.apariencia}</p>
                    <p>{mas_2.condicion}</p>
                    <p>{mas_2.collar}</p>
                    <p>{mas_2.collar_des}</p>
                    <p>{mas_2.chip}</p>
                    <p>{mas_2.chip_ubi}</p>
                    <p>{mas_2.ubicacion_res}</p>
                    <p>{mas_2.ubicacion_mos}</p>
                    <p>{mas_2.tipo}</p>
                    <p>{mas_2.estado}</p>
                    <p>{mas_2.rut_usuario}</p>
                </div>
            </div>
        </div>
        <div className="b-gen mt-3">
            <h3>Resultados de la busqueda:</h3>
            
            <p>Nombre de:</p>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mas_1.nombre}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mas_2.nombre}</p>
                </div>
                {res_u.nombre_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong className="positive">Coincide!</strong>
                    </div>
                }
                {!res_u.nombre_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong>No hay coincidencia...</strong>
                    </div>
                }
            </div>

            <p>Especie de:</p>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mas_1.animal}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mas_2.animal}</p>
                </div>
                {res_u.animal_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong className="positive">Coincide!</strong>
                    </div>
                }
                {!res_u.animal_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong>No hay coincidencia...</strong>
                    </div>
                }
            </div>

            <p>Razas de los animales:</p>
            <em>falta mas detalle aqui</em>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mas_1.raza_1}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mas_2.raza_1}</p>
                </div>
                {res_u.raza_primaria_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong className="positive">Coincide!</strong>
                    </div>
                }
                {!res_u.raza_primaria_coincide &&
                    <div className="col-md-4 col-sm-12 mt-1">
                        <strong>No hay coincidencia...</strong>
                    </div>
                }
            </div>

            <p>Genero de:</p>
            <div className="row m-2">
                <div className="col-md-4 col-sm-6">
                    <p>Tu mascota: {mas_1.genero}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mas_2.genero}</p>
                </div>
                {res_u.genero_coincide &&
                    <>
                    {res_u.genero_es_seguro &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="positive">Coincide!</strong>
                        </div>
                    }
                    {!res_u.genero_es_seguro &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="maybe">Coincide!, pero el usuario no esta seguro del genero del animal...</strong>
                        </div>
                    }
                    </>
                    
                }
                {!res_u.genero_coincide &&
                    <>
                    {res_u.genero_es_seguro &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong>No hay coincidencia...</strong>
                        </div>
                    }
                    {!res_u.genero_es_seguro &&
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
                    <p>Tu mascota: {mas_1.edad}</p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <p>Animal comparado: {mas_2.edad}</p>
                </div>
                {res_u.edad_coincide &&
                    <>
                    {res_u.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="positive">Coincide!</strong>
                        </div>
                    }
                    {!res_u.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="maybe">Coincide!, pero el usuario no esta seguro de la edad del animal...</strong>
                        </div>
                    }
                    </>
                    
                }
                {!res_u.edad_coincide &&
                    <>
                    {res_u.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong>No hay coincidencia...</strong>
                        </div>
                    }
                    {!res_u.edad_es_segura &&
                        <div className="col-md-4 col-sm-12 mt-1">
                            <strong className="maybe">No hay coincidencia, pero el usuario no esta seguro de la edad del animal...</strong>
                        </div>
                    }
                    </>
                }
            </div>
        </div>

        <div className="b-gen">
                <h4>Coincidencias en la informacion general:</h4>
                {res_u.nombre_coincide &&
                    <><p>Nombre: </p><p>Coincide!</p></>
                }{!res_u.nombre_coincide &&
                    <><p>Nombre: </p><p>No coincide.</p></>
                }
                {res_u.animal_coincide &&
                    <><p>Especie: </p><p>Coincide!</p></>
                }{!res_u.animal_coincide &&
                    <><p>Especie: </p><p>No coincide!</p></>
                }
                {res_u.raza_primaria_coincide &&
                    <>
                        {res_u.raza_secundaria_coincide &&
                            <>
                            <p>Razas: </p><p>Coinciden!</p>
                            {!res_u.raza_es_segura &&
                                <>
                                <p>Pero el usuario no esta seguro de las razas...</p>
                                </>   
                            }
                            </>
                            
                        }
                        {!res_u.raza_secundaria_coincide &&
                            <>
                            <p>Razas: </p><p>Coincide, pero la raza con que es mezcla no.</p>
                            {!res_u.raza_es_segura &&
                                <>
                                <p>Ademas, el usuario no esta seguro de las razas...</p>
                                </>   
                            }
                            </>
                        }
                        
                    </>
                }
                {res_u.genero_coincide &&
                    <>
                    <p>Genero: </p><p>Coincide!</p>
                    {res_u.genero_es_seguro &&
                        <></>
                    }
                    {!res_u.genero_es_seguro &&
                        <><p>Pero el usuario no esta seguro del genero...</p></>
                    }
                    </>
                    
                }{!res_u.genero_coincide &&
                    <>
                    <p>Genero: </p><p>No coincide.</p>
                    {res_u.genero_es_seguro &&
                        <></>
                    }
                    {!res_u.genero_es_seguro &&
                        <><p>Pero el usuario no esta seguro del genero, posible coincidencia.</p></>
                    }
                    </>
                }
                {res_u.edad_coincide &&
                    <>
                    <p>Edad: </p><p>Coincide!</p>
                    {res_u.edad_coincide &&
                        <></>
                    }
                    {!res_u.edad_coincide &&
                        <><p>Pero el usuario no esta seguro de la edad...</p></>
                    }
                    </>
                }{!res_u.edad_coincide &&
                    <>
                    <p>Edad: </p><p>No coincide.</p>
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
                    <><p>Color del ojo izquierdo: </p><p>Coincide!</p></>
                }{!res_u.color_ojo_i_coincide &&
                    <><p>Color del ojo izquierdo: </p><p>No coincide.</p></>
                }
                {res_u.color_ojo_d_coincide &&
                    <><p>Color del ojo derecho: </p><p>Coincide!</p></>
                }{!res_u.color_ojo_d_coincide &&
                    <><p>Color del ojo derecho: </p><p>No coincide.</p></>
                }
                {res_u.largo_pelaje_coincide &&
                    <><p>Largo del pelaje: </p><p>Coincide!</p></>
                }{!res_u.largo_pelaje_coincide &&
                    <><p>Largo del pelaje: </p><p>No coincide.</p></>
                }
                <p>Si quiere revisar, los detalles de la apariencia, o si el detalle de la condicion especial entre ambos animales, baje un poco para ver los datos de ambos animales</p>
                <h4>Coincidencias del collar:</h4>
                {res_u.tiene_collar &&
                    <><p>Tiene collar: </p><p>Coincide!</p></>
                }{!res_u.tiene_collar &&
                    <><p>Tiene collar: </p><p>No coincide.</p></>
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