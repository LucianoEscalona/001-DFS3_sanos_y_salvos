package Lizarus.ms_gestionUsuarios.Controller;

import Lizarus.ms_gestionUsuarios.entity.usuario;
import Lizarus.ms_gestionUsuarios.service.usuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class usuarioController {
    
    @Autowired
    private usuarioService ser;
    
//______________________________________________________________________________
    
    @GetMapping("/usuarios")
    public List<usuario> getUsuarios(){
        return ser.obtenerUsuarios();
    }
    
    @GetMapping("/usuarios/{id}")
    public usuario getUsuario_ID(@PathVariable Integer id){
        return ser.obtenerUsuario_ID(id);
    }
    
//______________________________________________________________________________
    
    @PostMapping("/addUsuario")
    public usuario saveUsuario(@RequestBody usuario u){
        return ser.guardarUsuario(u);
    }
    
//______________________________________________________________________________
    
    @PutMapping("/modUsuario/{id}")
    public usuario modUsuario(@RequestBody usuario u){
        return ser.modificarUsuario(u);
    }
    
//______________________________________________________________________________
    
    @DeleteMapping("/delUsuario/{id}")
    public String delUsuario(@PathVariable Integer id){
        return ser.borrarUsuario(id);
    }
}
