package Lizarus.ms_gestionUsuarios.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String p_nombre;
    private String s_nombre;
    private String a_paterno;
    private String a_materno;
    private String direccion;
    private String correo;
    private String telefono;
    private Boolean pertenece_organizacion;
    private String nombre_organizacion;
    private String contacto_organizacion;

//______________________________________________________________________________
    
    public usuario(Integer id, 
            String p_nombre, 
            String s_nombre, 
            String a_paterno, 
            String a_materno, 
            String direccion, 
            String correo, 
            String telefono, 
            Boolean pertenece_organizacion, 
            String nombre_organizacion, 
            String contacto_organizacion) {
        this.id = id;
        this.p_nombre = p_nombre;
        this.s_nombre = s_nombre;
        this.a_paterno = a_paterno;
        this.a_materno = a_materno;
        this.direccion = direccion;
        this.correo = correo;
        this.telefono = telefono;
        this.pertenece_organizacion = pertenece_organizacion;
        this.nombre_organizacion = nombre_organizacion;
        this.contacto_organizacion = contacto_organizacion;
    }

    public usuario() {
    }

//______________________________________________________________________________    
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

//______________________________________________________________________________    
    
    public String getP_nombre() {
        return p_nombre;
    }
    public void setP_nombre(String p_nombre) {
        this.p_nombre = p_nombre;
    }

//______________________________________________________________________________    
    
    public String getS_nombre() {
        return s_nombre;
    }
    public void setS_nombre(String s_nombre) {
        this.s_nombre = s_nombre;
    }

//______________________________________________________________________________    
    
    public String getA_paterno() {
        return a_paterno;
    }
    public void setA_paterno(String a_paterno) {
        this.a_paterno = a_paterno;
    }

//______________________________________________________________________________    
    
    public String getA_materno() {
        return a_materno;
    }
    public void setA_materno(String a_materno) {
        this.a_materno = a_materno;
    }

//______________________________________________________________________________    
    
    public String getDireccion() {
        return direccion;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

//______________________________________________________________________________    
    
    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }

//______________________________________________________________________________    
    
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

//______________________________________________________________________________    
    
    public Boolean getPertenece_organizacion() {
        return pertenece_organizacion;
    }
    public void setPertenece_organizacion(Boolean pertenece_organizacion) {
        this.pertenece_organizacion = pertenece_organizacion;
    }

//______________________________________________________________________________    
    
    public String getNombre_organizacion() {
        return nombre_organizacion;
    }
    public void setNombre_organizacion(String nombre_organizacion) {
        this.nombre_organizacion = nombre_organizacion;
    }

//______________________________________________________________________________    
    
    public String getContacto_organizacion() {
        return contacto_organizacion;
    }
    public void setContacto_organizacion(String contacto_organizacion) {
        this.contacto_organizacion = contacto_organizacion;
    }   
    
//______________________________________________________________________________
}
