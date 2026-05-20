package ssGrupo.mCoincidencias.dto;

import lombok.Data;

@Data
public class MascotaDTO {
    
    private Integer id;
    
    private String nombre;
    private String animal;
    private String raza_1;
    private String raza_2;
    private Boolean raza_sg;
    
    private String genero;
    private Boolean genero_seg;
    
    private String edad;
    private Boolean edad_seg;
    
    private String apariencia;
    private String condicion;
    
    private Boolean collar;
    private String collar_des;
    private Boolean chip;
    private String chip_ubi;
    
    private String ubicacion_res;
    private Boolean ubicacion_mos;
    
    private String tipo;
    private String estado;
    
    private String rut_usuario;
}
