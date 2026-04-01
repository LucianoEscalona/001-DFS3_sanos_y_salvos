package Lizarus.ms_gestionUsuarios.service;

import Lizarus.ms_gestionUsuarios.entity.usuario;
import Lizarus.ms_gestionUsuarios.repository.usuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class usuarioService {
    
    @Autowired
    private usuarioRepository rep;
    
//______________________________________________________________________________
    
    public usuario guardarUsuario(usuario u){
        return rep.save(u);
    }
    
//______________________________________________________________________________
    
    public List<usuario> obtenerUsuarios(){
        return rep.findAll();
    }
    
    public usuario obtenerUsuario_ID(Integer id){
        return rep.findById(id).orElse(null);
    }
    
//______________________________________________________________________________
    
    public usuario modificarUsuario(usuario mod_u){
        usuario mod = rep.findById(mod_u.getId()).orElse(null);
        
        mod.setP_nombre(mod_u.getP_nombre());
        mod.setS_nombre(mod_u.getS_nombre());
        mod.setA_paterno(mod_u.getA_paterno());
        mod.setA_materno(mod_u.getA_materno());
        mod.setDireccion(mod_u.getDireccion());
        mod.setCorreo(mod_u.getCorreo());
        mod.setTelefono(mod_u.getTelefono());
        mod.setPertenece_organizacion(mod_u.getPertenece_organizacion());
        mod.setNombre_organizacion(mod_u.getNombre_organizacion());
        mod.setPertenece_organizacion(mod_u.getPertenece_organizacion());
        
        return rep.save(mod);
    }
    
//______________________________________________________________________________
    
    public String borrarUsuario(Integer id){
        rep.deleteById(id);
        return "Usuario eliminado del sistema";
    }
    
//______________________________________________________________________________    
}
