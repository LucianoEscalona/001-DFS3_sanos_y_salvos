package Lizarus.ms_gestionMascotas.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "mascota")
public class mascota {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer dueño;
    private String nombre;
    private Integer edad;
    private String raza;
    private String color_01;
    private String color_02;
    private String descripcion;
    private String estado;

    public mascota(
            Integer id, 
            Integer dueño, 
            String nombre, 
            Integer edad, 
            String raza, 
            String color_01, 
            String color_02, 
            String descripcion, 
            String estado) {
        this.id = id;
        this.dueño = dueño;
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color_01 = color_01;
        this.color_02 = color_02;
        this.descripcion = descripcion;
        this.estado = estado;
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

    public Integer getDueño() {
        return dueño;
    }
    public void setDueño(Integer dueño) {
        this.dueño = dueño;
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
}
