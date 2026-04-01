package Lizarus.ms_gestionReportes.service;

import Lizarus.ms_gestionReportes.entity.reporte;
import Lizarus.ms_gestionReportes.repository.reporteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class reporteService {
    
    @Autowired
    private reporteRepository rep;

//______________________________________________________________________________

    public reporte guardarReporte(reporte r){
        return rep.save(r);
    }
        
//______________________________________________________________________________

    public List<reporte> obtenerReportes(){
        return rep.findAll();
    }
    
    public reporte obtenerReporte_ID(Integer id){
        return rep.findById(id).orElse(null);
    }
    
//______________________________________________________________________________
    
    public reporte modificarReporte(reporte r){
        reporte mod = rep.findById(r.getId()).orElse(null);
        
        mod.setDescripcion_reporte(r.getDescripcion_reporte());
        mod.setFecha_encontrado(r.getFecha_encontrado());
        mod.setFecha_perdido(r.getFecha_perdido());
        mod.setId_duenio(r.getId_duenio());
        mod.setLista_mascotas(r.getLista_mascotas());
        mod.setPos_color_01(r.getPos_color_01());
        mod.setPos_color_02(r.getPos_color_02());
        mod.setPos_color_03(r.getPos_color_03());
        mod.setPos_desc_collar(r.getPos_desc_collar());
        mod.setPos_edad(r.getPos_edad());
        mod.setPos_especie(r.getPos_especie());
        mod.setPos_raza(r.getPos_raza());
        mod.setPos_tiene_chip(r.getPos_tiene_chip());
        mod.setPos_tiene_collar(r.getPos_tiene_collar());
        mod.setTipo_reporte(r.getTipo_reporte());
        mod.setUbicacion_encontrado(r.getUbicacion_encontrado());
        mod.setUbicacion_ult_vez(r.getUbicacion_ult_vez());
        
        return rep.save(mod);
    }
    
//______________________________________________________________________________
    
    public String borrarUsuario(Integer id){
        rep.deleteById(id);
        return "Reporte eliminado del sistema";
    }
}
