package Lizarus.ms_gestionMascotas.service;

import Lizarus.ms_gestionMascotas.entity.mascota;
import Lizarus.ms_gestionMascotas.repository.mascotaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class mascotaService {
    
    @Autowired
    private mascotaRepository rep;

//______________________________________________________________________________
    
    public mascota guardarMascota(mascota m){
        return rep.save(m);
    }

//______________________________________________________________________________
    
    public List<mascota> obtenerMascotas(){
        return rep.findAll();
    }
    
    public mascota obtenerMascota_ID(Integer id){
        return rep.findById(id).orElse(null);
    }

//______________________________________________________________________________
    
    public mascota modificarMascota(mascota m){
        mascota mod = rep.findById(m.getId()).orElse(null);
        
        mod.setNombre(m.getNombre());
        mod.setRaza(m.getRaza());
        mod.setEstado(m.getEstado());
        mod.setEdad(m.getEdad());
        mod.setDuenio(m.getDuenio());
        mod.setDescripcion(m.getDescripcion());
        mod.setColor_01(m.getColor_01());
        mod.setColor_02(m.getColor_02());
        mod.setColor_03(m.getColor_03());
        mod.setEspecie(m.getEspecie());
        mod.setTiene_chip(m.getTiene_chip());
        mod.setTiene_collar(m.getTiene_collar());
        mod.setDescripcion_collar(m.getDescripcion_collar());
        mod.setUbicacion_residencia(m.getUbicacion_residencia());
        
        return rep.save(mod);
    }
    
//______________________________________________________________________________    
    
    public String borrarMascota(Integer id){
        rep.deleteById(id);
        return "Mascota retirada del sistema";
    }
    
//______________________________________________________________________________    
}
