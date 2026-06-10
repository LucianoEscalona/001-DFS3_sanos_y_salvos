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
public class PruebasIntegracion {
    
    @Mock
    private MascotaRepositorio rep;

    @InjectMocks
    private MascotaControlador ctlr;
    
    @DisplayName("Probamos que la mascota se guarde en la BDD a travez del metodo POST del Controlador")
    @Test
    public void mascotaSeCrea(){    
        Mascota m_input = new Mascota(
            1,
            "Bucky","Perro","Pastor aleman","---",true,
            "Masculino",true,
            "5 años",true,
            "apariencia TEST","condicion TEST",
            true,"TEST",true,"TEST",
            "Ubicacion TEST",true,
            "Mascota","Con su duenio","50500500-5"
        );
        Mascota m_guardada = new Mascota(
            1,
            "Bucky","Perro","Pastor aleman","---",true,
            "Masculino",true,
            "5 años",true,
            "apariencia TEST","condicion TEST",
            true,"TEST",true,"TEST",
            "Ubicacion TEST",true,
            "Mascota","Con su duenio","50500500-5"
        );
        when(rep.save(any(Mascota.class))).thenReturn(m_guardada);
        
        ResponseEntity<?> respuesta = ctlr.post(m_input);
        Mascota m_respuesta = (Mascota) respuesta.getBody();
        
        Assertions.assertEquals(1, m_respuesta.getId());
        Assertions.assertEquals("Bucky", m_respuesta.getNombre());
        Assertions.assertEquals("Perro", m_respuesta.getAnimal());
    }
    
    @DisplayName("Probamos que se pueda recuperar una mascota de la BDD utilizando el metodo GET y la ID de la mascota")
    @Test
    public void mascotaSeRescataDeBDD(){
        Mascota m_input = new Mascota(
            1,
            "Bucky","Perro","Pastor aleman","---",true,
            "Masculino",true,
            "5 años",true,
            "apariencia TEST","condicion TEST",
            true,"TEST",true,"TEST",
            "Ubicacion TEST",true,
            "Mascota","Con su duenio","50500500-5"
        );
        ctlr.post(m_input);
        
        when(rep.findById(1)).thenReturn(Optional.of(m_input));
        
        ResponseEntity<?> respuesta = ctlr.get(1);
        
        Mascota m_rescatada = (Mascota) respuesta.getBody();
        
        Assertions.assertEquals("Bucky", m_rescatada.getNombre());
        Assertions.assertEquals("Perro", m_rescatada.getAnimal());
        Assertions.assertEquals("Pastor aleman", m_rescatada.getRaza_1());
    }
}