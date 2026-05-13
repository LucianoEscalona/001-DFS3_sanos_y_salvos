package ssGrupo.mCoincidencias.client;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ssGrupo.mCoincidencias.dto.MascotaDTO;

@Service
public class MascotaClient {
    
    @Autowired
    private RestTemplate rt;
    
    public List<MascotaDTO> obtenerMascotas() {
        
        String url = "http://localhost:8080/mascota/v1/listar";      
        ResponseEntity<MascotaDTO[]> res = 
            rt.getForEntity(url, MascotaDTO[].class);
        
        return res.getBody() != null 
            ? Arrays.asList(res.getBody()) : List.of();
    }
    
    public MascotaDTO obtenerMascotaID(Integer id){
        String url = "http://localhost:8080/mascota/v1/obtener/{id}";
        ResponseEntity<MascotaDTO> res = 
            rt.getForEntity(url, MascotaDTO.class, id);
        
        if(res.getBody() == null){
            throw new RuntimeException("Mascota no encontrada");
        }
        return res.getBody();
    }
}
