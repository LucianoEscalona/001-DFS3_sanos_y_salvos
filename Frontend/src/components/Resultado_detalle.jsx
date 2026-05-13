import { useEffect, useState } from "react"
import { resultMotor } from "../utils/apiHelper"

function Resultado_dettalle(id_ru){

    const [res_u, setRes_u] = useState({})

    const getResultad0 = async()=>{
        const res = await resultMotor(id_ru)
        setRes_u(res)
    }

    useEffect(()=>{

    },[])

    return(
        <>
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
                    <h4 className="mt-3">Coincidencias en la aparencia:</h4>
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
                        <div className="d-flex gap-2">
                            <p>Color del collar: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.color_collar_p_coincide &&
                        <div className="d-flex gap-2">
                            <p>Color del collar: </p><p>No coincide.</p>
                        </div>
                    }
                    {res_u.color_collar_s_coincide &&
                        <div className="d-flex gap-2">
                            <p>Color secundario del collar: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.color_collar_s_coincide &&
                        <div className="d-flex gap-2">
                            <p>Color secundario del collar: </p><p>No coincide.</p>
                        </div>
                    }
                    {res_u.material_collar_coincide &&
                        <div className="d-flex gap-2">
                            <p>Material del collar: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.material_collar_coincide &&
                        <div className="d-flex gap-2">
                            <p>Material del collar: </p><p>No coincide.</p>
                        </div>
                    }
                    <p>Si quiere revisar la descripcion extra del collar, revise los datos de ambos animales mas abajo</p>
                    <h4 className="mt-3">Coincidencia del chip:</h4>
                    {res_u.tiene_chip &&
                        <div className="d-flex gap-2">
                            <p>Tenencia de chip: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.tiene_chip &&
                        <div className="d-flex gap-2">
                            <p>Tenencia de chip: </p><p>No coincide!</p>
                        </div>
                    }
                    {res_u.chip_ubi &&
                        <div className="d-flex gap-2">
                            <p>Ubicacion del chip: </p><p>Coincide!</p>
                        </div>
                    }{!res_u.chip_ubi &&
                        <div className="d-flex gap-2">
                            <p>Ubicacion del chip: </p><p>No coincide!</p>
                        </div>
                    }
                </div>

            </div>
                
                
        </div>
        </>
    )

}
export default Resultado_dettalle