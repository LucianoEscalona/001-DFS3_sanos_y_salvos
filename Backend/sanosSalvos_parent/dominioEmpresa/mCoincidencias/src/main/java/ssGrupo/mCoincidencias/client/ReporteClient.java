package ssGrupo.mCoincidencias.client;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ssGrupo.mCoincidencias.dto.ReporteDTO;

@Service
public class ReporteClient {
    
    @Autowired
    private RestTemplate rt;
    
    public List<ReporteDTO> obtenerReportes() {
        
        String url = "http://localhost:8080/reporte/v1/listar";
        ResponseEntity<ReporteDTO[]> res = 
            rt.getForEntity(url, ReporteDTO[].class);
        
        return res.getBody() != null
            ? Arrays.asList(res.getBody()) : List.of();
    }
    
    public ReporteDTO obtenerReporteID(Integer id){
        String url = "http://localhost:8080/reporte/v1/obtener/{id}";
        ResponseEntity<ReporteDTO> res = 
            rt.getForEntity(url, ReporteDTO.class, id);
        
        if(res.getBody() == null){
            throw new RuntimeException("Reporte no encontrado");
        }
        return res.getBody();
    }
}
