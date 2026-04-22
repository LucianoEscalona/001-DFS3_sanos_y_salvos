import { useEffect, useState } from "react"
/* demasiadas razas y tipos de gatos =_=, asi que pondre algunas nomas, ya que es un proyecto ficticio */

function Mascota_agregar({cerrar}) {

    const [nombre, setNombre] = useState("")
    const [especie, setEspecie] = useState("perro")
    const [raza_p, setRaza_p] = useState("")
    const [raza_s, setRaza_s] = useState("")
    const [mezcla, setMezcla] = useState(false)

    const [genero, setGenero] = useState("macho")
    const [genero_seguro, setGenero_seguro] = useState(false)

    const [edad, setEdad] = useState("")
    const [edad_segura, setEdad_segura] = useState(false)

    const [con_collar, setCon_collar] = useState(false)
    const [des_collar, setDes_collar] = useState("")
        const [cll_c1, setCll_c1] = useState("")
        const [cll_c2, setCll_c2] = useState("")
        const [cll_mt, setCll_mt] = useState("")
        const [cll_ds, setCll_ds] = useState("")
    const [con_chip, setCon_chip] = useState(false)
    const [ubi_chip, setUbi_chip] = useState("")

    const [des_animal, setDes_animal] = useState("")
        const [da_coi, setDa_coi] = useState("verde")
        const [da_cod, setDa_cod] = useState("verde")
        const [da_lpj, setDa_lpj] = useState("corto")
        const [da_dsa, setDa_dsa] = useState("")
    const [con_animal, setCon_animal] = useState("")

    const [ubi_residencia, setUbi_residencia] = useState("")
    const [mos_residencia, setMos_residencia] = useState(false)

    const [tipo, setTipo] = useState("mascota")
    const [estado, setEstado] = useState("con_duenio")

    const print_info = ()=>{
        setDes_collar(`${cll_c1}-${cll_c2}-${cll_mt}-${cll_ds}`)
        setDes_animal(`${da_coi}-${da_cod}-${da_lpj}-${da_dsa}`)
        if(!mezcla){setRaza_s("NONE")}
        if(!con_collar){setDes_collar("NONE")}
        if(!con_chip){setUbi_chip("NONE")}
        const animal_g = {
            a_nombre: nombre,
            a_especie: especie,
            a_raza_01: raza_p,
            a_raza_02: raza_s,
            a_mezcla: mezcla,
            a_genero: genero,
            a_genero_s: genero_seguro,
            a_edad: edad,
            a_edad_s: edad_segura,
            a_collar: con_collar,
            a_collar_d: des_collar,
            a_chip: con_chip,
            a_chip_u: ubi_chip,
            a_desc: des_animal,
            a_cond: con_animal,
            a_res_u: ubi_residencia,
            a_res_m: mos_residencia,
            a_tipo: tipo,
            a_estado: estado
        }
        console.log(animal_g)
    }

    return (
        <>
            <div>
            <div className="p-4 b-gen mw-fra">
                <div className="row m-0">
                    <div className="col-md-6 col-sm-12">
                        <div className="img-sim"></div>
                        <p className="mt-4 mb-3 pt-3 fw-bold">Descripcion General:</p>
                        <p className="mt-3">Nombre animal:</p>
                        <input type="text" id="nombre" name="nombre"
                            value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}/>


                        <div className="d-flex gap-3 mt-4">
                            <p>Especie:</p>
                            <select name="animal" id="animal" 
                                value={especie} 
                                onChange={(e) => setEspecie(e.target.value)}>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                            </select>
                        </div>

                        {especie == "perro" &&
                            <>
                                <div className="pt-3 mt-3 b-sep-t">
                                    <p>Raza:</p>
                                    <select name="raza_1" id="raza_1"
                                        value={raza_p}
                                        onChange={(e)=>setRaza_p(e.target.value)}>
                                        <option value="" disabled defaultValue={""} hidden>Raza de perro</option>
                                        <option value="pastor_aleman">Pastor alemán</option>
                                        <option value="golder_retriever">Golder retriever</option>
                                        <option value="bulldog">Bulldog</option>
                                        <option value="husky">Husky</option>
                                        <option value="labrador">Labrador</option>
                                        <option value="chihuahua">Chihuahua</option>
                                        <option value="yorkshire">Yorkshire</option>
                                        <option value="poodle">Poodle</option>
                                        <option value="beagle">Beagle</option>
                                        <option value="gran_danes">Gran danes</option>
                                        <option value="bull_terrier">Bull terrier</option>
                                        <option value="pug">Pug</option>
                                        <option value="dachshund">Dachshund / Salchicha</option>
                                        <option value="mestizo">Mestizo</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    {mezcla &&
                                        <>
                                            <p className="mt-2">Segunda raza:</p>
                                            <select name="raza_2" id="raza_2"
                                                value={raza_s} 
                                                onChange={(e) => setRaza_s(e.target.value)}>
                                                <option value="" disabled defaultValue={""} hidden>mezcla con</option>
                                                <option value="pastor_aleman">Pastor alemán</option>
                                                <option value="golder_retriever">Golder retriever</option>
                                                <option value="bulldog">Bulldog</option>
                                                <option value="husky">Husky</option>
                                                <option value="labrador">Labrador</option>
                                                <option value="chihuahua">Chihuahua</option>
                                                <option value="yorkshire">Yorkshire</option>
                                                <option value="poodle">Poodle</option>
                                                <option value="beagle">Beagle</option>
                                                <option value="gran_danes">Gran danes</option>
                                                <option value="bull_terrier">Bull terrier</option>
                                                <option value="pug">Pug</option>
                                                <option value="dachshund">Dachshund / Salchicha</option>
                                                <option value="mestizo">Mestizo</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </>
                                    }
                                </div>
                                <div className="d-flex gap-3 mt-2">
                                    <p>Es mezcla?</p>
                                    <label>
                                        <input type="checkbox" checked={mezcla} onChange={(e) => setMezcla(e.target.checked)} />
                                    </label>
                                </div>
                            </>
                        }
                        {especie == "gato" &&
                            <>

                                <div className="pt-3 mt-3 b-sep-t">
                                    <p>Tipo de gato:</p>
                                    <select name="raza_1" id="raza_1"
                                        value={raza_p}
                                        onChange={(e)=>setRaza_p(e.target.value)}>
                                        <option value="" disabled defaultValue={""} hidden>Tipo de gato</option>
                                        <option value="naranjo">Naranjo</option>
                                        <option value="negro">Negro</option>
                                        <option value="gris">Gris</option>
                                        <option value="blanco">Blanco</option>
                                        <option value="atigrado">Atigrado</option>
                                        <option value="tuxedo">Tuxedo</option>
                                        <option value="calico">Calico</option>
                                        <option value="cafe">Cafe</option>
                                        <option value="egipcio">Egipcio / calvo</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    {mezcla &&
                                        <>
                                            <p className="mt-2">Segundo tipo:</p>
                                            <select name="raza_2" id="raza_2"
                                                value={raza_s} 
                                                onChange={(e) => setRaza_s(e.target.value)}>
                                                <option value="" disabled defaultValue={""} hidden>mezcla con</option>
                                                <option value="naranjo">Naranjo</option>
                                                <option value="negro">Negro</option>
                                                <option value="gris">Gris</option>
                                                <option value="blanco">Blanco</option>
                                                <option value="atigrado">Atigrado</option>
                                                <option value="tuxedo">Tuxedo</option>
                                                <option value="calico">Calico</option>
                                                <option value="cafe">Cafe</option>
                                                <option value="egipcio">Egipcio / calvo</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </>
                                    }
                                </div>
                                <div className="d-flex gap-3 mt-2">
                                    <p>Es mezcla?</p>
                                    <label>
                                        <input type="checkbox" checked={mezcla} onChange={(e) => setMezcla(e.target.checked)} />
                                    </label>
                                </div>
                            </>
                        }

                        <div className="d-flex gap-3 pt-3 mt-3 b-sep-t">
                            <p>Genero:</p>
                            <select name="genero" id="genero"
                            value={genero} 
                            onChange={(e) => setGenero(e.target.value)}>
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                            </select>
                        </div>
                        <div className="d-flex gap-3 mt-2">
                            <p>Estas seguro del genero?</p>
                            <label>
                                <input type="checkbox" checked={genero_seguro} onChange={(e) => setGenero_seguro(e.target.checked)} />
                            </label>
                        </div>

                        <div className="d-flex gap-3 pt-3 mt-3 b-sep-t">
                            <p>Edad:</p>
                            <input type="text" id="edad" name="edad" 
                            value={edad} 
                            onChange={(e) => setEdad(e.target.value)}/>
                        </div>
                        <div className="d-flex gap-3 mt-2">
                            <p>Estas seguro de la edad?</p>
                            <label>
                                <input type="checkbox" checked={edad_segura} onChange={(e) => setEdad_segura(e.target.checked)} />
                            </label>
                        </div>
                        <p className="mt-4 mb-3 pt-3 b-sep-t fw-bold">Collar y Chip:</p>
                        <div className="d-flex gap-3">    
                            <p>Tiene collar?</p>
                            <label>
                                <input type="checkbox" checked={con_collar} onChange={(e) => setCon_collar(e.target.checked)} />
                            </label>
                        </div>
                        {con_collar &&
                            <>
                            <div>
                                <select name="c_collar_1" id="c_collar_1" className="w-e mt-3"
                                    value={cll_c1}
                                    onChange={(e)=>setCll_c1(e.target.value)}>
                                    <option value="" disabled defaultValue={""} hidden>Color principal</option>
                                    <option value="rojo">Rojo</option>
                                    <option value="amarillo">Amarillo</option>
                                    <option value="negro">Negro</option>
                                    <option value="UNKNOWN">No sabria decir</option>
                                </select>
                                <select name="c_collar_2" id="c_collar_2" className="w-e mt-2"
                                    value={cll_c2}
                                    onChange={(e)=>setCll_c2(e.target.value)}>
                                    <option value="" disabled defaultValue={""} hidden>Color secundario</option>
                                    <option value="rojo">Rojo</option>
                                    <option value="amarillo">Amarillo</option>
                                    <option value="negro">Negro</option>
                                    <option value="UNKNOWN">No sabria decir</option>
                                </select>
                                <select name="m_collar" id="m_collar" className="w-e mt-2"
                                    value={cll_mt}
                                    onChange={(e)=>setCll_mt(e.target.value)}>
                                    <option value="" disabled defaultValue={""} hidden>Material</option>
                                    <option value="cuero">Cuero</option>
                                    <option value="goma">Goma</option>
                                    <option value="plastico">Plastico</option>
                                    <option value="UNKNOWN">No sabria decir</option>
                                </select>
                                <p className="mt-3">Descripcion:</p>
                                <input type="text" id="c_desc" name="c_desc" className="w-e"
                                    value={cll_ds}
                                    onChange={(e)=>setCll_ds(e.target.value)}/>
                            </div>
                            </>
                        }

                        <div className="d-flex gap-3 pt-3 mt-3 b-sep-t">    
                            <p>Tiene chip?</p>
                            <label>
                                <input type="checkbox" checked={con_chip} onChange={(e) => setCon_chip(e.target.checked)} />
                            </label>
                        </div>
                        
                        {con_chip &&
                            <>
                            <div className="d-flex gap-3 mt-2">
                                <p>Ubicacion del chip:</p>
                                <select name="u_chip" id="u_chip"
                                    value={ubi_chip}
                                    onChange={(e)=>setUbi_chip(e.target.value)}>
                                    <option value="espalda_alta">Espalda alta</option>
                                    <option value="lado_izquierdo_del_cuello">Lado izquierdo del cuello</option>
                                    <option value="espina_dorsal">Espina dorsal</option>
                                    <option value="oreja_izquierda">Oreja izquierda</option>
                                    <option value="oreja_derecha">Oreja derecha</option>
                                </select>
                            </div>
                            </>
                        }

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <p className="mt-4 mb-4 pt-3 b-sep-t fw-bold">Descripion especifica:</p>
                        <div className="d-flex gap-3 mt-2">
                            <p>Color de ojos</p>
                            <select name="ojo_i" id="ojo_i"
                                value={da_coi}
                                onChange={(e)=>setDa_coi(e.target.value)}>
                                <option value="" disabled defaultValue={""} hidden>Izquierdo</option>
                                <option value="verde">Verde</option>
                                <option value="amarillo">Amarillo</option>
                                <option value="azul">Azul</option>
                                <option value="gris">Gris</option>
                                <option value="cafe">Cafe</option>
                                <option value="UNKNOWN">No se</option>
                            </select>
                            <select name="ojo_d" id="ojo_d"
                                value={da_cod}
                                onChange={(e)=>setDa_cod(e.target.value)}>
                                <option value="" disabled defaultValue={""} hidden>Derecho</option>
                                <option value="verde">Verde</option>
                                <option value="amarillo">Amarillo</option>
                                <option value="azul">Azul</option>
                                <option value="gris">Gris</option>
                                <option value="cafe">Cafe</option>
                                <option value="UNKNOWN">No se</option>
                            </select>
                        </div>
                        <div className="d-flex gap-3 mt-4">
                            <p>Largo del pelaje:</p>
                            <select name="l_pelaje" id="l_pelaje"
                                value={da_lpj}
                                onChange={(e)=>setDa_lpj(e.target.value)}>
                                <option value="corto">Corto</option>
                                <option value="medio">Medio</option>
                                <option value="largo">Largo</option>
                                <option value="pelado">Pelado</option>
                                <option value="UNKNOWN">No sabria decir</option>
                            </select>
                        </div>

                        <p className="mt-4">Detalles sobre la apariencia:</p>
                        <textarea id="ap_des" name="ap_des" className="w-e"
                            value={da_dsa}
                            onChange={(e)=>setDa_dsa(e.target.value)}/>

                        <p className="mt-2">Posee una condicion especial?:</p>
                        <textarea id="co_esp" name="co_esp" className="w-e"
                            value={con_animal}
                            onChange={(e)=>setCon_animal(e.target.value)}/>
                        <p className="mt-2">Lugar de residencia del animal:</p>
                        <input type="text" id="residencia" name="residencia" className="w-e"
                            value={ubi_residencia}
                            onChange={(e)=>setUbi_residencia(e.target.value)}/>
                        

                        <div className="d-flex gap-3 mt-2">
                            <p>Mostrar ubicacion?</p>    
                            <label>
                                <input type="checkbox" checked={mos_residencia} onChange={(e) => setMos_residencia(e.target.checked)} />
                            </label>
                        </div>
                        <div className="d-flex gap-3 mt-4 pt-3 b-sep-t">    
                            <p>Tipo de animal:</p>
                            <select name="tipo" id="tipo" 
                                value={tipo} 
                                onChange={(e)=>setTipo(e.target.value)}>
                                <option value="mascota">Mascota</option>
                                <option value="lo_vi">Lo vi por ahi</option>
                                <option value="adopcion">Adopcion</option>
                            </select>
                        </div>

                        {tipo == "mascota" &&
                            <>
                                <div className="d-flex gap-3 mt-3">
                                    <p>Estado:</p>
                                    <select name="estado" id="estado"
                                        value={estado} 
                                        onChange={(e)=>setEstado(e.target.value)}>
                                        <option value="con_duenio">Con su dueño</option>
                                        <option value="perdido">Perdido</option>
                                    </select>
                                </div>
                            </>
                        }
                        <button onClick={print_info}>print</button>
                        <button onClick={cerrar}>Cerrar</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Mascota_agregar
