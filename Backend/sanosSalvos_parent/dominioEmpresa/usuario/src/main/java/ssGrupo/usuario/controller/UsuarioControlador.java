package ssGrupo.usuario.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import ssGrupo.usuario.dto.LoginRequest;
import ssGrupo.usuario.dto.LoginResponse;
import ssGrupo.usuario.exception.ErrorCorreoRegistrado;
import ssGrupo.usuario.exception.ErrorLogin;
import ssGrupo.usuario.exception.ErrorNoConcretado;
import ssGrupo.usuario.exception.ErrorRutRegistrado;
import ssGrupo.usuario.jwt.JwtUtil;

@RestController
@RequestMapping("/usuario/v1")
public class UsuarioControlador {
    
    @Autowired
    UsuarioRepositorio rep;
    
    @Autowired
    private WebClient.Builder wcBuilder;
    
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BCryptPasswordEncoder encoder;
//______________________________________________________________________________
    
    @PostMapping("/guardar")
    public ResponseEntity<?> post(@RequestBody Usuario u){
        try {
            u.setContrasenia(encoder.encode(u.getContrasenia()));
            Usuario rU = rep.save(u);

            List<Usuario> ls_u = rep.findAll();
            for(Usuario usr : ls_u){
                if(u.getCorreo().equals(usr.getCorreo())){
                    throw new ErrorCorreoRegistrado(
                        "/usuario/v1/guardar" + "-" +
                        "El Correo ya ha sido registrado en la BDD, no es posible crear el usuario");
                }
                if(u.getRut().equals(usr.getRut())){
                    throw new ErrorRutRegistrado(
                        "/usuario/v1/guardar" + "-" +
                        "El RUT ya ha sido registrado en la BDD, no es posible crear el usuario");
                }
            }

            return ResponseEntity.status(HttpStatus.CREATED).body(rU);
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/usuario/v1/guardar"+"-"+
                "No se pudo registrar/guardar el usuario"+"-"+
                "Guardar / registrar usuario");
        }
    }
//______________________________________________________________________________
    
    @GetMapping("/listar")
    public ResponseEntity<List<Usuario>> list(){
        try {
            List<Usuario> allU = rep.findAll();

            if (allU.isEmpty()){
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(allU);
            }
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/usuario/v1/listar"+"-"+
                "No se pudo listar los usuarios"+"-"+
                "Listar usuarios");
        }
    }
//______________________________________________________________________________
    
    @GetMapping("/obtener/{id}")
    public ResponseEntity<?> get(@PathVariable("id") Integer id) {
        try {
            Optional<Usuario> optU = rep.findById(id);

            if(optU.isPresent()){
                Usuario rU = optU.get();
                return new ResponseEntity<>(rU, HttpStatus.OK);
            } else {
                throw new NoSuchElementException(
                    "/usuario/v1/obtener" + "-" +
                    "No se pudo encontrar al usuario con id: "+id+"");
            }
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/usuario/v1/obtener"+"-"+
                "No se pudo recuperar el usuario (id: "+id+")"+"-"+
                "Obtener usuario con ID");
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest lr) {
        try {
            Optional<Usuario> optU = rep.findByCorreo(lr.getCorreo());

            if(optU.isPresent()){
                Usuario rU = optU.get();

                boolean passwordCorrecta = encoder.matches(
                        lr.getPasswd(), 
                        rU.getContrasenia());

                if(!passwordCorrecta){
                    throw new ErrorLogin(
                        "/usuario/v1/login"+"-"+
                        "No se pudo iniciar sesion, la contraseña no es valida");
                }
                String token = jwtUtil.generateToken(rU);

                LoginResponse res = new LoginResponse(
                    token, 
                    rU.getTipo_usuario(),
                    rU.getId(),
                    rU.getNombre(),
                    rU.getApellido_p(),
                    rU.getApellido_m(),
                    rU.getCorreo(),
                    rU.getTelefono(),
                    rU.getRut());


                return new ResponseEntity<>(res, HttpStatus.OK);
            } else {
                throw new ErrorLogin(
                    "/usuario/v1/login"+"-"+
                    "No se pudo iniciar sesion, no existe usuario relacionado al correo: "+lr.getCorreo());
            }
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/usuario/v1/login"+"-"+
                "No se pudo realizar el login ("+lr.getCorreo()+")"+"-"+
                "Login");
        }
        
    }
//______________________________________________________________________________
    
    @PutMapping("/mod_info/{id}")
    public ResponseEntity<?> put(@PathVariable("id") Integer id, @RequestBody Usuario u){
        try {
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
                throw new NoSuchElementException(
                    "/usuario/v1/mod_info"+"-"+
                    "No se encontro ningun usuario con el id: "+id);
            }
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/usuario/v1/mod_info"+"-"+
                "No se pudo modificar al usuario (id:"+id+") del sistema"+"-"+
                "Eliminar sistema");
        }
        
    }
//______________________________________________________________________________

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        try {
            
            if(rep.existsById(id)){
                rep.deleteById(id);
                return ResponseEntity.ok(HttpStatus.OK);
            }
            throw new RuntimeException(
                "/usuario/v1/eliminar"+"-"+
                "No se encontro a ningun usuario con el id: "+id);
            
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/usuario/v1/eliminar"+"-"+
                "No se pudo eliminar el usuario (id:"+id+") del sistema"+"-"+
                "Eliminar sistema");
        }
    }
}
