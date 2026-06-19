package ssGrupo.reporte.tests;

import jakarta.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import ssGrupo.reporte.controller.ReporteControlador;
import ssGrupo.reporte.entity.Reporte;
import ssGrupo.reporte.repository.ReporteRepositorio;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class PruebasIntegracion {
    
    @Autowired
    private ReporteRepositorio rep;
    @Autowired 
    private ReporteControlador ctrl;
    
    @DisplayName("TEST 01: El reporte se crea en la BDD y puede ser recuperado con la ID")
    @Test
    public void reporteSeCreaYSeRecupera(){
        
        
        
        Reporte r = new Reporte(
            null,
            1,1,
            "Animal perdido",
            "Descripcion",
            "Consideracion especial",
            LocalDateTime.now(),
            "Ubicacion TEST"
        );
        ctrl.post(r);
        
        ResponseEntity<?> res = ctrl.get(1);
        
        Reporte res_r = (Reporte) res.getBody();
        
        Assertions.assertEquals(r.getTitulo(), res_r.getTitulo());
        Assertions.assertEquals(r.getId_mascota(), res_r.getId_mascota());
        Assertions.assertEquals(r.getId_usuario(), res_r.getId_usuario());
    }
    
    @DisplayName("TEST 02: Se crea un reporte y despues se modifican sus daots")
    @Test
    public void reporteEsModificado(){
        Reporte r = new Reporte(
            null,
            1,1,
            "Animal perdido",
            "Descripcion",
            "Consideracion especial",
            LocalDateTime.now(),
            "Ubicacion TEST"
        );
        ResponseEntity<?> res = ctrl.post(r);
        
        Reporte r_guardado = (Reporte) res.getBody();
         
        Integer id = r_guardado.getId();
        
        r_guardado.setTitulo("Nuevo titulo del reporte");
        r_guardado.setUbicacion_uvv("Santiago");
        r_guardado.setDescripcion("Descripcion nueva");
        
        ctrl.put_tipo(id, r_guardado);
        
        ResponseEntity<?> res_02 = ctrl.get(1);
        
        Reporte res_r = (Reporte) res_02.getBody();
        
        Assertions.assertEquals("Nuevo titulo del reporte", res_r.getTitulo());
        Assertions.assertEquals("Santiago", res_r.getUbicacion_uvv());
        Assertions.assertEquals("Descripcion nueva", res_r.getDescripcion());
    }
    
    @DisplayName("TEST 03: Se crea un reporte y despues se elimina")
    @Test
    public void reproteEsEliminado(){
        Reporte r = new Reporte(
            null,
            1,1,
            "Animal perdido",
            "Descripcion",
            "Consideracion especial",
            LocalDateTime.now(),
            "Ubicacion TEST"
        );
        
        ResponseEntity<?> res = ctrl.post(r);
        Reporte r_guardado = (Reporte) res.getBody();
        Integer id = r_guardado.getId();
        
        ResponseEntity<?> res_del = ctrl.delete(id);
        
        Assertions.assertEquals(HttpStatus.OK, res_del.getStatusCode());
    }
}