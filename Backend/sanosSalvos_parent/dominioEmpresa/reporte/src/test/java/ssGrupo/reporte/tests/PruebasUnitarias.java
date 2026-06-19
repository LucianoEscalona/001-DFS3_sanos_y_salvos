package ssGrupo.reporte.tests;

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
import ssGrupo.reporte.controller.ReporteControlador;
import ssGrupo.reporte.entity.Reporte;
import ssGrupo.reporte.repository.ReporteRepositorio;

@ExtendWith(MockitoExtension.class)
public class PruebasUnitarias {
    
    @Mock
    private ReporteRepositorio rep;
    @InjectMocks
    private ReporteControlador ctrl;
    
    @DisplayName("Probando que se llame al metodo save del repo")
    @Test
    public void ProbarGetReporte(){
        
        Reporte r = new Reporte();
        r.setTitulo("Perrito perdido");
        
        when(rep.findById(1)).thenReturn(Optional.of(r));
        
        ResponseEntity<?> res = ctrl.get(1);
        Reporte res_r = (Reporte) res.getBody();
        
        Assertions.assertEquals("Perrito perdido", res_r.getTitulo());
    }
    
    @DisplayName("Probando que se llame al metodo modificar a travez del ctrl")
    @Test
    public void ProbarPutReporte(){
        
        Reporte r = new Reporte();
        r.setTitulo("Gatito encontrado");
        
        Reporte datos_nuevos  = new Reporte();
        datos_nuevos.setTitulo("Titulo_cambiado");
        
        when(rep.findById(1)).thenReturn(Optional.of(r));
        when(rep.save(any(Reporte.class))).thenAnswer(i->i.getArgument(0));
        
        ResponseEntity<?> res = ctrl.put_tipo(1, datos_nuevos);
        
        Reporte res_r = (Reporte) res.getBody();
        
        Assertions.assertEquals("Titulo_cambiado", res_r.getTitulo());
    }
    
    @DisplayName("Probando que se llame al metodo deleteById a travez del ctrl")
    @Test
    public void ProbarDeleteReporte(){
        
        when(rep.existsById(1)).thenReturn(true);
        ResponseEntity<?> res = ctrl.delete(1);
        
        Assertions.assertEquals(HttpStatus.OK, res.getStatusCode());
        
        verify(rep).deleteById(1);
    }
}