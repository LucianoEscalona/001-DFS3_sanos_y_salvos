import { useEffect, useState } from 'react'
import '../../App.css'
import Reporte_miniatura from '../../components/Reporte_miniatura'
import { insert_ls, motor_demo } from '../../utils/test'
import { getSMT } from '../../utils/apiHelper'
import '../../otrocsspqyamucho.css'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navegar = useNavigate()

    const [sesionActiva, setSesionActiva] = useState(false)
    useEffect(()=>{
        try {
            if(JSON.parse(localStorage.getItem("sesion"))){
                setSesionActiva(true)
            }else{
                setSesionActiva(false)
            }
        } catch (error) {
            setSesionActiva(false)
        }
    },[])

    return(
        <div className='container-fluid p-0'>
            <div className="black_filter">
            </div>
            <img 
                src="../../../public/img/home_page.jpg" 
                alt="Is anybody there...?" 
                className="img-home_page"/>
            <div className='txt_fade_top'>
                <h3 className='fade-in t-1 txt_c margin_top_cs'>~Sanos y Salvos</h3>
                <p className='fade-in t-2 txt_c'>Ayudando a los animales de Chile a volver con sus deuños.</p>
                <p className='fade-in t-3 txt_c mt-4 mb-3'>En nuestra pagina web, puedes encontrar reportes de mascotas extraviadas, o crear uno tu mismo. Tambien puedes consultar la informacion de las Mascotas registradas, y si quieres, puedes ingresar una a nuestro sistema. (Necesitas tener una cuenta para poder ingresar informacion en la pagina)</p>
                <button 
                    id="dv_btn_h_reportes"
                    onClick={()=>navegar("/reportes")}
                    className="fade-in t-3 btn_hps">Reportes</button>
                <button 
                    id="dv_btn_h_mascotas"
                    onClick={()=>navegar("/mascotas")}
                    className="fade-in t-3 btn_hps ms-3 me-3">Mascotas</button>
                {!sesionActiva &&
                <>
                    <button 
                        onClick={()=>navegar("/login")}
                        className="fade-in t-3 btn_hps">Iniciar sesion</button>
                </>
                }
            </div>
        </div>
    )
}
export default Home