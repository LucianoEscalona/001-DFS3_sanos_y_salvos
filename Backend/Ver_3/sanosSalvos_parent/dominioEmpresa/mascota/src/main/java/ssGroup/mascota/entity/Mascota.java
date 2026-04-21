package ssGroup.mascota.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "mascota")
public class Mascota {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String nombre;
    private String animal;
    private String raza_1;
    private String raza_2;
    private String raza_sg;
    
    private String genero;
    private String genero_seg;
    
    private String edad;
    private String edad_seg;
    
    private String apariencia;
    private String condicion;
    
    private String collar;
    private String collar_des;
    private String chip;
    private String chip_ubi;
    
    private String ubicacion_res;
    private String ubicacion_mos;
    
    private String tipo;
    private String estado;
}
