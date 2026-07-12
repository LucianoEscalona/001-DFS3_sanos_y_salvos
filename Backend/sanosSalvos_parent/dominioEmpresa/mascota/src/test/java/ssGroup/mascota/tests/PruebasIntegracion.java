package ssGroup.mascota.tests;

import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import ssGroup.mascota.controller.MascotaControlador;
import ssGroup.mascota.entity.Mascota;
import ssGroup.mascota.repository.MascotaRepositorio;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class PruebasIntegracion {
    
    @Autowired
    private MascotaRepositorio rep;
    @Autowired
    private MascotaControlador ctrl;
    
    @DisplayName("TEST 01: Probamos que la mascota se guarde en la BDD a travez del metodo POST del Controlador, posteriormente revisamos que se pueda recuperar usando su ID y el metodo GET")
    @Test
    public void mascotaSeCreaYSeRecupera(){    
        Mascota m_input = new Mascota(
            null,
            "Bucky","Perro","Pastor aleman","---",true,
            "Masculino",true,
            "5 años",true,
            "apariencia TEST","condicion TEST",
            true,"TEST",true,"TEST",
            "Ubicacion TEST",true,
            "Mascota","Con su duenio","50500500-5","/public/img/gato_01.jpg"
        );
        ctrl.post(m_input);
        
        ResponseEntity<?> respuesta = ctrl.get(1);
        
        Mascota m_rescatada = (Mascota) respuesta.getBody();
        
        Assertions.assertEquals(m_input.getNombre(), m_rescatada.getNombre());
        Assertions.assertEquals(m_input.getAnimal(), m_rescatada.getAnimal());
        Assertions.assertEquals(m_input.getRaza_1(), m_rescatada.getRaza_1());
    }
    @DisplayName("TEST 02: Se crea una mascota y posterioremente se modifican sus datos con el metodo PUT")
    @Test
    public void mascotaEsModificada(){
        Mascota m_original = new Mascota(
            null,
            "Bucky","Perro","Pastor aleman","---",true,
            "Masculino",true,
            "5 años",true,
            "apariencia TEST","condicion TEST",
            true,"TEST",true,"TEST",
            "Ubicacion TEST",true,
            "Mascota","Con su duenio","50500500-5","/public/img/gato_01.jpg"
        );
        ResponseEntity<?> respuestaPost = ctrl.post(m_original);
        
        Mascota mascotaGuardada = (Mascota) respuestaPost.getBody();

        Integer id = mascotaGuardada.getId();
        
        mascotaGuardada.setNombre("Rocky");
        mascotaGuardada.setRaza_1("Labrador");
        mascotaGuardada.setEdad("3 años");

        ctrl.put(id, mascotaGuardada);

        ResponseEntity<?> respuesta = ctrl.get(1);
        
        Mascota m_rescatada = (Mascota) respuesta.getBody();
        
        Assertions.assertEquals("Rocky", m_rescatada.getNombre());
        Assertions.assertEquals("Labrador", m_rescatada.getRaza_1());
        Assertions.assertEquals("3 años", m_rescatada.getEdad());
    }
    @DisplayName("TEST 03: Se crea una mascota y posterioremente se retira del sistema con el metodo DELETE")
    @Test
    public void mascotaEsRetirada(){
        Mascota m_input = new Mascota(
            null,
            "Bucky","Perro","Pastor aleman","---",true,
            "Masculino",true,
            "5 años",true,
            "apariencia TEST","condicion TEST",
            true,"TEST",true,"TEST",
            "Ubicacion TEST",true,
            "Mascota","Con su duenio","50500500-5","/public/img/gato_01.jpg"
        );
        
        ResponseEntity<?> res = ctrl.post(m_input);
        Mascota m_guardada = (Mascota) res.getBody();
        Integer id = m_guardada.getId();
        
        ResponseEntity<?> res_del = ctrl.delete(id);
        
        Assertions.assertEquals(HttpStatus.OK, res_del.getStatusCode());
    }
}