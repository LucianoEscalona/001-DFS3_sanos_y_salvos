package ssGrupo.usuario.tests;

import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import ssGrupo.usuario.controller.UsuarioControlador;
import ssGrupo.usuario.entity.Usuario;
import ssGrupo.usuario.repository.UsuarioRepositorio;

@ExtendWith(MockitoExtension.class)
public class PruebasUnitarias {
    
    @Mock
    private UsuarioRepositorio rep;
    @InjectMocks
    private UsuarioControlador ctrl;
    
    @DisplayName("Probando que se guarde el usuario en el repo")
    @Test
    public void ProbarGetUsuario(){
        
        Usuario u = new Usuario();
        u.setNombre("Hermenegildo");
        
        when(rep.findById(1)).thenReturn(Optional.of(u));
        
        ResponseEntity<?> res = ctrl.get(1);
        Usuario res_u = (Usuario) res.getBody();
        
        Assertions.assertEquals("Hermenegildo", res_u.getNombre());
    }
    
    @DisplayName("Probando la modificacion de usuarios")
    @Test
    public void ProbarPutUsuario(){
        
        Usuario u = new Usuario();
        u.setNombre("Hermenegildo");
        
        Usuario datos_nuevos = new Usuario();
        datos_nuevos.setNombre("Juan.");
        
        when(rep.findById(1)).thenReturn(Optional.of(u));
        when(rep.save(any(Usuario.class))).thenAnswer(i->i.getArgument(0));
        
        ResponseEntity<?> res = ctrl.put(1, datos_nuevos);
        
        Usuario res_u = (Usuario) res.getBody();
        
        Assertions.assertEquals("Juan.", res_u.getNombre());
    }
    
    @DisplayName("Probamos que se pueda llamar al metodo delete")
    @Test
    public void ProbarDeleteUsuario(){
        
        when(rep.existsById(1)).thenReturn(true);
        ResponseEntity<?> res = ctrl.delete(1);
        
        Assertions.assertEquals(HttpStatus.OK, res.getStatusCode());
        
        verify(rep).deleteById(1);
    }
}
