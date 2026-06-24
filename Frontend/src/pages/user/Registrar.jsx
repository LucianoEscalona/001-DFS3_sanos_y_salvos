import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postSMT } from "../../utils/apiHelper"

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

    const guardar = ()=>{
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
    }

    return(
        <>
        <div className="centrado_tarjetas z-pos-bottom">
            <div className="p-4 b-gen mw-reglog">
                <div className="row m-0 p-2">
                    <div className="d-flex justify-content-center">
                        <h4 className="p-0 ">- Crear cuenta -</h4>
                    </div>
                    <p className="p-0 mt-2">Correo:</p>
                    <input id="dv_correo"
                        type="text" 
                        value={u_correo}
                        onChange={(e)=>u_setCorreo(e.target.value)}/>
                    <p className="p-0 mt-2">Contraseña:</p>
                    <input id="dv_contrasenia"
                        type="text" 
                        value={u_passwd}
                        onChange={(e)=>u_setPasswd(e.target.value)}/>
                    <p className="p-0 mt-2">Nombre:</p>
                    <input id="dv_nombre"
                        type="text" 
                        value={u_nombre}
                        onChange={(e)=>u_setNombre(e.target.value)}/>
                    <p className="p-0 mt-2">Apellido paterno:</p>
                    <input id="dv_apellido_p"
                        type="text"  
                        value={u_apellido_p}
                        onChange={(e)=>u_setApellido_p(e.target.value)}/>
                    <p className="p-0 mt-2">Apellido materno:</p>
                    <input id="dv_apellido_m"
                        type="text"  
                        value={u_apellido_m}
                        onChange={(e)=>u_setApellido_m(e.target.value)}/>
                    <p className="p-0 mt-2">RUT:</p>
                    <input id="dv_rut"
                        type="text"  
                        value={u_rut}
                        onChange={(e)=>u_setRut(e.target.value)}/>
                    <p className="p-0 mt-2">Telefono:</p>
                    <input id="dv_telefono"
                        type="text"  
                        value={u_telefono}
                        onChange={(e)=>u_setTelefono(e.target.value)}/>
                    <button id="btn_registro" className="mt-4" onClick={()=>guardar()}>Registrarme</button>
                    <a className="link-gen t-a-c mt-2" onClick={()=>login()}>Volver al login</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Registrar