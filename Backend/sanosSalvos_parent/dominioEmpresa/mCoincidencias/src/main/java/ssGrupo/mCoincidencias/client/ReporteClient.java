package ssGrupo.mCoincidencias.client;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ssGrupo.mCoincidencias.dto.Reporte_mDTO;

@Service
public class ReporteClient {
    
    @Autowired
    private RestTemplate rt;
    
    public List<Reporte_mDTO> obtenerReportes() {
        
        String url = "http://localhost:8080/reporte/v1/listar";
        ResponseEntity<Reporte_mDTO[]> res = 
            rt.getForEntity(url, Reporte_mDTO[].class);
        
        return res.getBody() != null
            ? Arrays.asList(res.getBody()) : List.of();
    }
    
    public Reporte_mDTO obtenerReporteID(Integer id){
        String url = "http://localhost:8080/reporte/v1/obtener/{id}";
        ResponseEntity<Reporte_mDTO> res = 
            rt.getForEntity(url, Reporte_mDTO.class, id);
        
        if(res.getBody() == null){
            throw new RuntimeException("Reporte no encontrado");
        }
        return res.getBody();
    }
}
