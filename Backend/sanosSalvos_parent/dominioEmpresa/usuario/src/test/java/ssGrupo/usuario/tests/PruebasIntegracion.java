package ssGrupo.usuario.tests;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import ssGrupo.usuario.controller.UsuarioControlador;
import ssGrupo.usuario.entity.Usuario;
import ssGrupo.usuario.repository.UsuarioRepositorio;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class PruebasIntegracion {
    
    @Autowired
    private UsuarioRepositorio rep;
    @Autowired
    private UsuarioControlador ctrl;
    
    @DisplayName("TEST 01: El usuario se crea en la BDD")
    @Test
    public void usuarioSeCreaYSeRecupera(){
        Usuario u = new Usuario(
            null, "Pedro","Pica","Piedra",
            "test_email_01@gmail.com","12346",
            "+56950005000","50500500-5",
            "normal"
        );
        ctrl.post(u);
        
        ResponseEntity<?> res = ctrl.get(1);
        
        Usuario u_res = (Usuario) res.getBody();
        
        Assertions.assertEquals(u.getNombre(),u_res.getNombre());
        Assertions.assertEquals(u.getApellido_p(),u_res.getApellido_p());
        Assertions.assertEquals(u.getRut(),u_res.getRut());
    }
    @DisplayName("TEST 02: Se crea un usuario y despues se modifican sus datos")
    @Test
    public void usuarioEsModificado(){
        Usuario u = new Usuario(
            null, "Pedro","Pica","Piedra",
            "test_email_02@gmail.com","12346",
            "+56950005000","50500500-5",
            "normal"
        );
        ResponseEntity<?> res = ctrl.post(u);
        
        Usuario u_guardado = (Usuario) res.getBody();
        
        Integer id = u_guardado.getId();
        
        u_guardado.setNombre("Peter");
        u_guardado.setApellido_p("Grifin");
        u_guardado.setApellido_m("Dor");
        
        ctrl.put(id, u_guardado);
        
        ResponseEntity<?> res_02 = ctrl.get(1);
        
        Usuario u_res = (Usuario) res_02.getBody();
        
        Assertions.assertEquals("Peter", u_res.getNombre());
        Assertions.assertEquals("Grifin", u_res.getApellido_p());
        Assertions.assertEquals("Dor", u_res.getApellido_m());
    }
    @DisplayName("TEST 03: Se crea un usuario y despues se elimina")
    @Test
    public void usuarioEsEliminado(){
        Usuario u = new Usuario(
            null, "Pedro","Pica","Piedra",
            "test_email_03@gmail.com","12346",
            "+56950005000","50500500-5",
            "normal"
        );
        
        ResponseEntity<?> res = ctrl.post(u);
        Usuario u_guardado = (Usuario) res.getBody();
        Integer id = u_guardado.getId();
        
        ResponseEntity<?> res_del = ctrl.delete(id);
        
        Assertions.assertEquals(HttpStatus.OK, res_del.getStatusCode());
    }
}
