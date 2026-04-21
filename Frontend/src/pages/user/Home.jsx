import '../../App.css'
import Reporte_p from '../../components/Reporte_p'
import { insert_ls, motor_demo } from '../../utils/test'

function Home() {
    return(
        <div className='container-fluid p-0'>


        <div>
            <div className='img-sim'></div>
        </div>

        <div className='row g-0'>
            <div className='col-lg-8 col-md-6 col-sm-12 p-4'>
                <h3>Bienvenido!</h3>
                <p>Bienvenido a la pagina web de sanos y salvos!</p>
                <p>Aqui puedes encotrar herramientas que te ayudaran a recuperar a tu querida mascota, o a informar sobre algun animal que pueda estar perdido!</p>
                <p>Consulta los reportes mas recientes aqui, o mira todos los reportes activos hasta la fecha aqui:</p>
                <button>Todos los reportes</button>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4'>
                <div className='img-sim'></div>
            </div>
        </div>

        <div>
            <p className='p-3'></p>
            <div className='p-4'>
                <h4>Reportes de mascotas recientes:</h4>
            </div>
            <div className='row m-0'>
                <div className='col-lg-3 col-md-4 col-sm-6'><Reporte_p/></div>
                <div className='col-lg-3 col-md-4 col-sm-6'><Reporte_p/></div>
                <div className='col-lg-3 col-md-4 col-sm-6'><Reporte_p/></div>
            </div>
        </div>
        
        <div>
            <div className='row g-0'>
            <p className='p-4'></p>
            <div className='col-lg-8 col-md-6 col-sm-12 p-4'>
                <h3>Has perdido o encontrado algun animal recientemente?</h3>
                <p>Ingresa un reporte en nuestro sistema para mostrarle a todos informacion sobre tu mascota desaparecida.</p>
                <p>O puedes reportar sobre un animal que parece perdido tambien</p>
                <button>Ingresar reporte</button>
                <button onClick={insert_ls}>TEST ls</button>
                <button onClick={motor_demo}>TEST motor</button>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 p-4'>
                <div className='img-sim'></div>
            </div>
        </div>
        </div>
        

        </div>
    )
}
export default Home