import { useNavigate } from "react-router-dom"
import { getSMT_ID } from "../../utils/apiHelper"
import { useState } from "react"

function Login() {

    const navegar = useNavigate()

    const [cor, setCor] = useState("")
    const [pas, setPas] = useState("")

    const registrar = ()=>{
        navegar("/registarse")
    }
    const home = ()=>{
        navegar("/")
    }

    const iniciar_sesion = async(correo,passwd)=>{
        const u = await getSMT_ID("usuario","login",correo) || {}
        if(u.contrasenia == passwd){
            localStorage.setItem("sesion",JSON.stringify(u))
            alert("Inicio de sesion exitosa")
            navegar("/")
            window.location.reload()
        }else{
            console.log(u.contrasenia,"|",passwd)
            console.log(u.correo,"|",correo)
        }
    }

    return(
        <>
        <div className="centrado_tarjetas z-pos-bottom">
            <div className="p-4 b-gen mw-reglog">
                <div className="row m-0 p-2">
                    <div className="d-flex justify-content-center">
                        <h4 className="p-0 ">- Iniciar sesion -</h4>
                    </div>
                    <p className="p-0 mt-2">Correo:</p>
                    <input type="text" 
                        value={cor}
                        onChange={(e)=>setCor(e.target.value)}/>
                    <p className="p-0 mt-2">Constraseña:</p>
                    <input type="text" 
                        value={pas}
                        onChange={(e)=>setPas(e.target.value)}/>
                    <button className="mt-4" onClick={()=>iniciar_sesion(cor,pas)}>Iniciar sesion</button>
                    <div className="d-flex justify-content-center mt-2 p-0">
                        <p className="p-0 me-2"> No tienes una cuenta?,</p>
                        <a className="link-gen" onClick={()=>registrar()}>crea una aqui</a>
                    </div>
                    <div className="d-flex justify-content-center mt-2 p-0">
                        <a className="link-gen" onClick={()=>home()}>volver al inicio</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login