package ssGroup.mascota.controller;

import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;
import ssGroup.mascota.entity.Mascota;
import ssGroup.mascota.repository.MascotaRepositorio;

@ExtendWith(MockitoExtension.class)
public class PruebasUnitarias {
    
    @Mock
    private MascotaRepositorio rep;
    
    @Test
    public void ProbarQueElRepositorioGuarde(){
        
    }
    /*
    @Test
    void guardarMascotaRetornaCreated() {

        Mascota entrada = new Mascota(...);

        Mascota guardada = new Mascota(...);
        guardada.setId(1);

        when(rep.save(any(Mascota.class)))
                .thenReturn(guardada);

        ResponseEntity<?> respuesta = ctlr.post(entrada);

        Assertions.assertEquals(HttpStatus.CREATED,
                               respuesta.getStatusCode());

        verify(rep).save(any(Mascota.class));
    }
    */
}
