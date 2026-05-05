package ssGrupo.mCoincidencias.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "res_coincidencias")
public class ResultadoCoincidencia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private Integer ptje_res_coincidencia;
    
    private Boolean nombre_coincide;
    private Boolean animal_coincide;
    private Boolean raza_primaria_coincide;
    private Boolean raza_secundaria_coincide;
    private Boolean raza_es_segura;
    private Boolean genero_coincide;
    private Boolean genero_es_seguro;
    private Boolean edad_coincide;
    private Boolean edad_es_segura;
    private Boolean color_ojo_i_coincide;
    private Boolean color_ojo_d_coincide;
    private Boolean largo_pelaje_coincide;
    private Boolean tiene_collar;
    private Boolean color_collar_p_coincide;
    private Boolean color_collar_s_coincide;
    private Boolean material_collar_coincide;
    private Boolean tiene_chip;
    private Boolean ubicacion_chip_coincide;
    private Boolean ubicacion_estadia_coincide;
    
    private Integer idMascota;
    private Integer idReporte;

    public ResultadoCoincidencia( 
            Integer ptje_res_coincidencia, 
            Boolean nombre_coincide, 
            Boolean animal_coincide, 
            Boolean raza_primaria_coincide, 
            Boolean raza_secundaria_coincide, 
            Boolean raza_es_segura, 
            Boolean genero_coincide, 
            Boolean genero_es_seguro, 
            Boolean edad_coincide, 
            Boolean edad_es_segura, 
            Boolean color_ojo_i_coincide, 
            Boolean color_ojo_d_coincide, 
            Boolean largo_pelaje_coincide,
            Boolean tiene_collar,
            Boolean color_collar_p_coincide, 
            Boolean color_collar_s_coincide, 
            Boolean material_collar_coincide, 
            Boolean tiene_chip, 
            Boolean ubicacion_chip_coincide, 
            Boolean ubicacion_estadia_coincide,
            Integer idMascota,
            Integer idReporte) {
        this.ptje_res_coincidencia = ptje_res_coincidencia;
        this.nombre_coincide = nombre_coincide;
        this.animal_coincide = animal_coincide;
        this.raza_primaria_coincide = raza_primaria_coincide;
        this.raza_secundaria_coincide = raza_secundaria_coincide;
        this.raza_es_segura = raza_es_segura;
        this.genero_coincide = genero_coincide;
        this.genero_es_seguro = genero_es_seguro;
        this.edad_coincide = edad_coincide;
        this.edad_es_segura = edad_es_segura;
        this.color_ojo_i_coincide = color_ojo_i_coincide;
        this.color_ojo_d_coincide = color_ojo_d_coincide;
        this.largo_pelaje_coincide = largo_pelaje_coincide;
        this.tiene_collar = tiene_collar;
        this.color_collar_p_coincide = color_collar_p_coincide;
        this.color_collar_s_coincide = color_collar_s_coincide;
        this.material_collar_coincide = material_collar_coincide;
        this.tiene_chip = tiene_chip;
        this.ubicacion_chip_coincide = ubicacion_chip_coincide;
        this.ubicacion_estadia_coincide = ubicacion_estadia_coincide;
        this.idMascota = idMascota;
        this.idReporte = idReporte;
    }

    public ResultadoCoincidencia() {
    }
    
    
}
