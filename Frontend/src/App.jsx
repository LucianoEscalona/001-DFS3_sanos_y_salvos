import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/user/Home'
import Registrar from './pages/user/Registrar'
import Login from './pages/user/Login'
import Info_usuario from './pages/user/Info_usuario'
import Reportes from './pages/user/Reportes'
import Mascotas from './pages/user/Mascotas'
import Ingresar_reporte from './pages/user/Ingresar_reporte'
import Ingresar_mascota from './pages/user/Ingresar_mascota'
import Navbar from './pages/user/Navbar'

import './App.css'
import Mascota_detalle from './pages/user/Mascota_detalle'

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
          <Route path="/ingresar_reporte" element={<Ingresar_reporte />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/mascota_detalle" element={<Mascota_detalle />} />
        </Routes>
    </>
  )
}

export default App