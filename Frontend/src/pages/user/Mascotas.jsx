import { getSMT } from "../../utils/apiHelper"
import { useEffect, useState } from "react"

function Mascotas() {

    const [mascotas, setMascotas] = useState([])

    useEffect(()=>{
        const fetch_DatosBDD = async() =>{
            try {
                const mascotasBDD = await getSMT("mascotas")
                console.log(mascotasBDD)
                setMascotas(mascotasBDD)
            } catch(e) {
                console.error(e)
            }
        }
        fetch_DatosBDD()
    },[])

    return(
        <>
        <p className="cuadrao">Mascotas</p>
        <div>
            {mascotas.map(m=>(
                <p key={m.id}>{m.nombre}</p>
            ))
            }
        </div>
        </>
    )
}
export default Mascotas