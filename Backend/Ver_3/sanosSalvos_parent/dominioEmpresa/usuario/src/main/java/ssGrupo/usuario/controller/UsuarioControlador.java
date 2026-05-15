package ssGrupo.usuario.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.reactive.function.client.WebClient;

import ssGrupo.usuario.entity.Usuario;
import ssGrupo.usuario.repository.UsuarioRepositorio;

@RestController
@RequestMapping("/usuario/v1")
public class UsuarioControlador {
    
    @Autowired
    UsuarioRepositorio rep;
    @Autowired
    private WebClient.Builder wcBuilder;
//______________________________________________________________________________
    
    @PostMapping("/guardar")
    public ResponseEntity<?> post(@RequestBody Usuario u){
        //entro a crear el usuario
        Usuario rU = rep.save(u);
        //se guarda el usuario
        return ResponseEntity.status(HttpStatus.CREATED).body(rU);
    }
//______________________________________________________________________________
    
    @GetMapping("/listar")
    public ResponseEntity<List<Usuario>> list(){
        List<Usuario> allU = rep.findAll();
        
        if (allU.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(allU);
        }
    }
//______________________________________________________________________________
    
    @GetMapping("/obtener/{id}")
    public ResponseEntity<?> get(@PathVariable("id") Integer id) {
        Optional<Usuario> optU = rep.findById(id);
        
        if(optU.isPresent()){
            Usuario rU = optU.get();
            return new ResponseEntity<>(rU, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/login/{c}")
    public ResponseEntity<?> getCorreo(@PathVariable("c") String c) {
        Optional<Usuario> optU = rep.findByCorreo(c);
        
        if(optU.isPresent()){
            Usuario rU = optU.get();
            return new ResponseEntity<>(rU, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//______________________________________________________________________________
    
    @PutMapping("/mod_info/{id}")
    public ResponseEntity<?> put(@PathVariable("id") Integer id, @RequestBody Usuario u){
        Optional<Usuario> optU = rep.findById(id);
        
        if(optU.isPresent()){
            Usuario modU = optU.get();
            modU.setNombre(u.getNombre());
            modU.setApellido_p(u.getApellido_p());
            modU.setApellido_m(u.getApellido_m());
            modU.setCorreo(u.getCorreo());
            modU.setContrasenia(u.getContrasenia());
            modU.setTelefono(u.getTelefono());
            modU.setRut(u.getRut());

            Usuario rM = rep.save(modU);
            return new ResponseEntity<>(rM, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//______________________________________________________________________________

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        rep.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    
    
}
