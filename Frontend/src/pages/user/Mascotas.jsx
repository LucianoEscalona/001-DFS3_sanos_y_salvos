import { getSMT } from "../../utils/apiHelper"
import { useEffect, useState } from "react"

import '../../styles/mascota.css'

function Mascotas() {

    const [mascotas, setMascotas] = useState([])
    const [reportes, setReportes] = useState([])
    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        const fetch_DatosBDD = async() =>{
            try {
                const mascotasBDD = await getSMT("8080","mascotas")
                console.log(mascotasBDD)
                setMascotas(mascotasBDD)
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

    return(
        <>
        <div>
            <div className="color-testing mascota-banner">
                <img src="" alt="TEMP MESSAGE" />
            </div>
            <div className="color-testing mascota-titulo">
                <p>Welcome to your pets!</p>
            </div>
            <div className="color-testing">
                <div className="color-testing mascota-titulo">
                    <p>Your PETS</p>
                    <button className="btn-testing">Add PET</button>
                </div>
                <div className="color-testing mascota-ista row">
                <div className="col-4 p-3">
                    <div className="mascota-card p-3">
                        <p>ASD</p>
                        <button className="btn-testing">Contactar</button>
                    </div>
                </div>
                <div className="col-4 p-3">
                    <div className="mascota-card p-3">
                        <p>ASD</p>
                        <button className="btn-testing">Contactar</button>
                    </div>
                </div>
                <div className="col-4 p-3">
                    <div className="mascota-card p-3">
                        <p>ASD</p>
                        <button className="btn-testing">Contactar</button>
                    </div>
                </div>
                <div className="col-4 p-3">
                    <div className="mascota-card p-3">
                        <p>ASD</p>
                        <button className="btn-testing">Contactar</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="color-testing mascota-opciones">
                <p>Check for coincidences</p>
            </div>
            <p className="cuadrao">Mascotas</p>
            <div>
                {mascotas.map(m=>(
                    <p key={m.id}>{m.nombre}</p>
                ))
                }
            </div>
        </div>
        </>
    )
}
export default Mascotas