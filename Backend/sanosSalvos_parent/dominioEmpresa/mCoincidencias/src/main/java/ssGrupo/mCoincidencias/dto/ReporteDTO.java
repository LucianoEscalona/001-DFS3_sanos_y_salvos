package ssGrupo.mCoincidencias.dto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class ReporteDTO {
    
    private Integer id;
    
    private Integer id_mascota;
    private Integer id_usuario;
    
    private String titulo;
    private String descripcion;
    private String consideracion_e;
    private LocalDateTime tiempo_uvv;
    private String ubicacion_uvv;
}
