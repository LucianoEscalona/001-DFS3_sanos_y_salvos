import { getSMT } from "../../utils/apiHelper"
import { useEffect, useState } from "react"

import '../../styles/mascota.css'
import Mascota_agregar from "../../components/Mascota_agregar"

function Mascotas() {

    const [mascotas, setMascotas] = useState([])
    const [reportes, setReportes] = useState([])
    const [usuarios, setUsuarios] = useState([])

    const gls = ()=>{
        localStorage.setItem("mascotas_BDD", JSON.stringify(mascotas))
    }
/*
    useEffect(()=>{
        const fetch_DatosBDD = async() =>{
            try {
                const mascotasBDD = await getSMT("8081","listar")
                console.log(mascotasBDD)
                setMascotas(mascotasBDD)
                /*
                const reportesBDD = await getSMT("8082","reportes")
                console.log(reportesBDD)
                setReportes(reportesBDD)
                const usuariosBDD = await getSMT("8081","usuarios")
                console.log(usuariosBDD)
                setUsuarios(usuariosBDD)
                
            } catch(e) {
                console.error(e)
            }
        }
        fetch_DatosBDD()
        
    },[])
*/
    return(
        <>
        <div>
            <div className="color-testing mascota-banner">
                <img src="x" alt="TEMP MESSAGE" />
            </div>
            <div className="color-testing mascota-titulo">
                <p>Welcome to your pets!</p>
            </div>
            <div className="color-testing">
                <button onClick={gls}>get</button>
            </div>
            <div className="color-testing mascota-opciones">
                <p>Check for coincidences</p>
            </div>
            <p className="cuadrao">Mascotas</p>
            <Mascota_agregar/>
        </div>
        </>
    )
}
export default Mascotas