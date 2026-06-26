import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postSMT } from "../../utils/apiHelper"
import { validate, formate } from "rut.js"

function Registrar() {

    const navegar = useNavigate()

    const [u_nombre, u_setNombre]           = useState("")
    const [u_apellido_p, u_setApellido_p]   = useState("")
    const [u_apellido_m, u_setApellido_m]   = useState("")
    const [u_correo, u_setCorreo]           = useState("")
    const [u_passwd, u_setPasswd]           = useState("")
    const [u_rut, u_setRut]                 = useState("")
    const [u_telefono, u_setTelefono]       = useState("")

    const login = ()=>{
        navegar("/login")
    }

    const valdidarInfo = ()=>{

        const may = (u_passwd.match(/\d/g)    || []).length
        const num = (u_passwd.match(/[A-Z]/g) || []).length

        if(validate(u_rut)) {

            if(u_correo.endsWith("@gmail.com")){

                if(num>=3 && may>=3){

                    const usuario_g = {
                        nombre: u_nombre,
                        apellido_p: u_apellido_p,
                        apellido_m: u_apellido_m,
                        correo: u_correo,
                        contrasenia: u_passwd,
                        telefono: u_telefono,
                        rut: u_rut,
                        tipo_usuario: "usuario_ddm"
                    }
                    console.log(usuario_g)
                    try {
                        postSMT("usuario","guardar",usuario_g)
                        alert("Cuenta creada correctamente!")
                        navegar("/login")
                    } catch (error) {
                        alert("No se pudo crear la cuenta!")
                    }

                }else{
                    alert("Contraseña invalida")
                }
            }else{
                alert("Correo invalido")
            }
        }else{
            alert("RUT invalido")
        }
    }

    const guardar = (e)=>{
        e.preventDefault()
        valdidarInfo()
    }

    return(
        <>
        <div className="centrado_tarjetas z-pos-bottom">
            <div className="p-4 b-gen mw-reglog">
                <form className="row m-0 p-2" onSubmit={guardar}>
                    <div className="d-flex justify-content-center">
                        <h4 className="p-0 ">- Crear cuenta -</h4>
                    </div>
                    <p className="p-0 mt-2">Correo:</p>
                    <input id="dv_correo"
                        required
                        placeholder="Debe contener '@gmail.com'"
                        minLength={9}
                        maxLength={35}
                        type="text" 
                        value={u_correo}
                        onChange={(e)=>u_setCorreo(e.target.value)}/>
                    <p className="p-0 mt-2">Contraseña:</p>
                    <input id="dv_contrasenia"
                        required
                        placeholder="Solo 1-9 a-z y A-Z, sin simbolos"
                        minLength={10}
                        maxLength={20}
                        type="password" 
                        value={u_passwd}
                        onChange={(e)=>u_setPasswd(e.target.value)}/>
                    <p className="p-0 mt-2">Nombre:</p>
                    <input id="dv_nombre"
                        required
                        minLength={3}
                        maxLength={30}
                        type="text" 
                        value={u_nombre}
                        onChange={(e)=>u_setNombre(e.target.value)}/>
                    <p className="p-0 mt-2">Apellido paterno:</p>
                    <input id="dv_apellido_p"
                        required
                        minLength={3}
                        maxLength={30}
                        type="text"  
                        value={u_apellido_p}
                        onChange={(e)=>u_setApellido_p(e.target.value)}/>
                    <p className="p-0 mt-2">Apellido materno:</p>
                    <input id="dv_apellido_m"
                        required
                        minLength={3}
                        maxLength={30}
                        type="text"  
                        value={u_apellido_m}
                        onChange={(e)=>u_setApellido_m(e.target.value)}/>
                    <p className="p-0 mt-2">RUT:</p>
                    <input id="dv_rut"
                        required
                        placeholder="Su RUT (50500500-5)"
                        minLength={10}
                        maxLength={12}
                        type="text"  
                        value={u_rut}
                        onChange={(e)=>u_setRut(e.target.value)}/>
                    <p className="p-0 mt-2">Telefono:</p>
                    <input id="dv_telefono"
                        required
                        placeholder="Su numero de telefono"
                        minLength={5}
                        maxLength={14}
                        type="text"  
                        value={u_telefono}
                        onChange={(e)=>u_setTelefono(e.target.value)}/>
                    <button type="submit" id="btn_registro" className="mt-4">Registrarme</button>
                    <a className="link-gen t-a-c mt-2" onClick={()=>login()}>Volver al login</a>
                </form>
            </div>
        </div>
        </>
    )
}
export default Registrar