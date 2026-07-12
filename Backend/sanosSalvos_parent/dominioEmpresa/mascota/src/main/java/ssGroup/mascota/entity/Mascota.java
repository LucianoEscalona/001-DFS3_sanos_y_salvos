package ssGroup.mascota.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "mascota")
@AllArgsConstructor
@NoArgsConstructor
public class Mascota {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    
    private String temp_imagen;
}
