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
    
    public mascota modificarMascota(mascota mod_m){
        mascota mod = rep.findById(mod_m.getId()).orElse(null);
        
        mod.setNombre(mod_m.getNombre());
        mod.setRaza(mod_m.getRaza());
        mod.setEstado(mod_m.getEstado());
        mod.setEdad(mod_m.getEdad());
        mod.setDueño(mod_m.getDueño());
        mod.setDescripcion(mod_m.getDescripcion());
        mod.setColor_01(mod_m.getColor_01());
        mod.setColor_02(mod_m.getColor_02());
        
        return rep.save(mod);
    }
    
//______________________________________________________________________________    
    
    public String borrarMascota(Integer id){
        rep.deleteById(id);
        return "Mascota retirada del sistema";
    }
}
