package Lizarus.ms_gestionMascotas.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "mascota")
public class mascota {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private Integer duenio;
    private String nombre;
    private Integer edad;
    private String raza;
    private String color_01;
    private String color_02;
    private String color_03;
    private String descripcion;
    private String estado;
    private String especie;
    private Boolean tiene_chip;
    private Boolean tiene_collar;
    private String descripcion_collar;
    private String ubicacion_residencia;

//______________________________________________________________________________
    
    public mascota(Integer id, 
            Integer duenio, 
            String nombre, 
            Integer edad, 
            String raza, 
            String color_01, 
            String color_02, 
            String color_03,
            String descripcion, 
            String estado, 
            String especie,
            Boolean tiene_chip, 
            Boolean tiene_collar, 
            String descripcion_collar,
            String ubicacion_residencia) {
        this.id = id;
        this.duenio = duenio;
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color_01 = color_01;
        this.color_02 = color_02;
        this.color_03 = color_03;
        this.descripcion = descripcion;
        this.estado = estado;
        this.especie = especie;
        this.tiene_chip = tiene_chip;
        this.tiene_collar = tiene_collar;
        this.descripcion_collar = descripcion_collar;
        this.ubicacion_residencia = ubicacion_residencia;
    }

    public mascota() {
    }
   
//______________________________________________________________________________

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    
//______________________________________________________________________________

    public Integer getDuenio() {
        return duenio;
    }
    public void setDuenio(Integer duenio) {
        this.duenio = duenio;
    }
    
//______________________________________________________________________________

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
//______________________________________________________________________________

    public Integer getEdad() {
        return edad;
    }
    public void setEdad(Integer edad) {
        this.edad = edad;
    }

//______________________________________________________________________________    
    
    public String getRaza() {
        return raza;
    }
    public void setRaza(String raza) {
        this.raza = raza;
    }

//______________________________________________________________________________    
    
    public String getColor_01() {
        return color_01;
    }
    public void setColor_01(String color_01) {
        this.color_01 = color_01;
    }

//______________________________________________________________________________    
    
    public String getColor_02() {
        return color_02;
    }
    public void setColor_02(String color_02) {
        this.color_02 = color_02;
    }

//______________________________________________________________________________    
    
    public String getColor_03() {
        return color_03;
    }
    public void setColor_03(String color_03) {
        this.color_03 = color_03;
    }

//______________________________________________________________________________    
    
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

//______________________________________________________________________________    
    
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }

//______________________________________________________________________________    
    
    public String getEspecie() {
        return especie;
    }
    public void setEspecie(String especie) {
        this.especie = especie;
    }

//______________________________________________________________________________        
    
    public Boolean getTiene_chip() {
        return tiene_chip;
    }
    public void setTiene_chip(Boolean tiene_chip) {
        this.tiene_chip = tiene_chip;
    }

//______________________________________________________________________________        
    
    public Boolean getTiene_collar() {
        return tiene_collar;
    }
    public void setTiene_collar(Boolean tiene_collar) {
        this.tiene_collar = tiene_collar;
    }

//______________________________________________________________________________        
    
    public String getDescripcion_collar() {
        return descripcion_collar;
    }
    public void setDescripcion_collar(String descripcion_collar) {
        this.descripcion_collar = descripcion_collar;
    }

//______________________________________________________________________________  

    public String getUbicacion_residencia() {
        return ubicacion_residencia;
    }
    public void setUbicacion_residencia(String ubicacion_residencia) {
        this.ubicacion_residencia = ubicacion_residencia;
    }

//______________________________________________________________________________
}
