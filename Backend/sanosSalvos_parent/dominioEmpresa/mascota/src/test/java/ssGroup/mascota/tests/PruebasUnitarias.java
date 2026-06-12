package ssGroup.mascota.tests;

import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import ssGroup.mascota.controller.MascotaControlador;
import ssGroup.mascota.entity.Mascota;
import ssGroup.mascota.repository.MascotaRepositorio;

@ExtendWith(MockitoExtension.class)
public class PruebasUnitarias {
    
    @Mock
    private MascotaRepositorio rep;
    @InjectMocks
    private MascotaControlador ctrl;
    
    @DisplayName("Probamos que el controler llame al repositorio para recuperar una mascota")
    @Test
    public void ProbarGetMascota(){
        
        Mascota mascota = new Mascota();
        mascota.setNombre("Bucky");
        
        when(rep.findById(1)).thenReturn(Optional.of(mascota));
        
        ResponseEntity<?> res = ctrl.get(1);
        Mascota res_m = (Mascota) res.getBody();
        
        Assertions.assertEquals("Bucky", res_m.getNombre());
    }
    @DisplayName("Probamos que se pueda llamar al metodo para modificar una masocta")
    @Test
    public void ProbarPutMascota(){
        Mascota mascota = new Mascota();
        mascota.setNombre("Bucky");
        
        Mascota datos_nuevos = new Mascota();
        datos_nuevos.setNombre("Rocky");
        
        when(rep.findById(1)).thenReturn(Optional.of(mascota));
        when(rep.save(any(Mascota.class))).thenAnswer(i->i.getArgument(0));
        
        ResponseEntity<?> res = ctrl.put(1, datos_nuevos);
        
        Mascota res_m = (Mascota) res.getBody();
        
        Assertions.assertEquals("Rocky",res_m.getNombre());
    }
    @DisplayName("Probamos que se pueda llamar al metodo para retirar una mascota")
    @Test
    public void ProbarDeleteMascota(){
        
        when(rep.existsById(1)).thenReturn(true);
        ResponseEntity<?> res = ctrl.delete(1);
        
        Assertions.assertEquals(HttpStatus.OK, res.getStatusCode());
        
        verify(rep).deleteById(1);
    }
}
