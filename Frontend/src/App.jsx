import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/user/Home'
import Registrar from './pages/user/Registrar'
import Login from './pages/user/Login'
import Info_usuario from './pages/user/Info_usuario'
import Reportes from './pages/user/Reportes'
import Mascotas from './pages/user/Mascotas'
import Ingresar_reporte from './pages/user/Ingresar_reporte'

import Navbar from './pages/user/Navbar'

import './App.css'
import Mascota_detalle from './pages/user/Mascota_detalle'
import Reporte_detalle from './pages/user/Reporte_detalle'
import Reportes_sistema from './pages/user/Reportes_sistema'
import Mascotas_sistema from './pages/user/Mascotas_sistema'
import Motor_1 from './pages/user/Motor_1'
import Resultado_dettalle from './pages/user/Resultado_detalle'

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registarse" element={<Registrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info_cuenta" element={<Info_usuario />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/reportes_sistema" element={<Reportes_sistema />} />
          <Route path="/reporte_detalle" element={<Reporte_detalle />} />
          <Route path="/ingresar_reporte" element={<Ingresar_reporte />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascotas_sistema" element={<Mascotas_sistema />} />
          <Route path="/mascota_detalle" element={<Mascota_detalle />} />
          <Route path="/detalle_coincidencias" element={<Resultado_dettalle/>}/>

          <Route path="/motor_test" element={<Motor_1 />} />
        </Routes>
    </>
  )
}

export default App