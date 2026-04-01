package Lizarus.ms_gestionReportes.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "reporte")
public class reporte {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String lista_mascotas;
    private Integer id_duenio;
    private String ubicacion_ult_vez;
    private String fecha_perdido;
    
    private String ubicacion_encontrado;
    private String fecha_encontrado;
    private String pos_edad;
    private String pos_raza;
    private String pos_color_01;
    private String pos_color_02;
    private String pos_color_03;
    private String pos_especie;
    private Boolean pos_tiene_collar;
    private Boolean pos_tiene_chip;
    private String pos_desc_collar;

    private String tipo_reporte;
    private String descripcion_reporte;
    
//______________________________________________________________________________

    public reporte(Integer id, 
            String lista_mascotas, 
            Integer id_duenio, 
            String ubicacion_ult_vez, 
            String fecha_perdido, 
            String ubicacion_encontrado, 
            String fecha_encontrado, 
            String pos_edad, 
            String pos_raza, 
            String pos_color_01, 
            String pos_color_02, 
            String pos_color_03, 
            String pos_especie, 
            Boolean pos_tiene_collar, 
            Boolean pos_tiene_chip, 
            String pos_desc_collar, 
            String tipo_reporte, 
            String descripcion_reporte) {
        this.id = id;
        this.lista_mascotas = lista_mascotas;
        this.id_duenio = id_duenio;
        this.ubicacion_ult_vez = ubicacion_ult_vez;
        this.fecha_perdido = fecha_perdido;
        this.ubicacion_encontrado = ubicacion_encontrado;
        this.fecha_encontrado = fecha_encontrado;
        this.pos_edad = pos_edad;
        this.pos_raza = pos_raza;
        this.pos_color_01 = pos_color_01;
        this.pos_color_02 = pos_color_02;
        this.pos_color_03 = pos_color_03;
        this.pos_especie = pos_especie;
        this.pos_tiene_collar = pos_tiene_collar;
        this.pos_tiene_chip = pos_tiene_chip;
        this.pos_desc_collar = pos_desc_collar;
        this.tipo_reporte = tipo_reporte;
        this.descripcion_reporte = descripcion_reporte;
    }
    
    public reporte() {
    }
    
//______________________________________________________________________________

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    
//______________________________________________________________________________

    public String getLista_mascotas() {
        return lista_mascotas;
    }
    public void setLista_mascotas(String lista_mascotas) {
        this.lista_mascotas = lista_mascotas;
    }
    
//______________________________________________________________________________

    public Integer getId_duenio() {
        return id_duenio;
    }
    public void setId_duenio(Integer id_duenio) {
        this.id_duenio = id_duenio;
    }
    
//______________________________________________________________________________

    public String getUbicacion_ult_vez() {
        return ubicacion_ult_vez;
    }
    public void setUbicacion_ult_vez(String ubicacion_ult_vez) {
        this.ubicacion_ult_vez = ubicacion_ult_vez;
    }
    
//______________________________________________________________________________

    public String getFecha_perdido() {
        return fecha_perdido;
    }
    public void setFecha_perdido(String fecha_perdido) {
        this.fecha_perdido = fecha_perdido;
    }
    
//______________________________________________________________________________

    public String getUbicacion_encontrado() {
        return ubicacion_encontrado;
    }
    public void setUbicacion_encontrado(String ubicacion_encontrado) {
        this.ubicacion_encontrado = ubicacion_encontrado;
    }
    
//______________________________________________________________________________

    public String getFecha_encontrado() {
        return fecha_encontrado;
    }
    public void setFecha_encontrado(String fecha_encontrado) {
        this.fecha_encontrado = fecha_encontrado;
    }
    
//______________________________________________________________________________

    public String getPos_edad() {
        return pos_edad;
    }
    public void setPos_edad(String pos_edad) {
        this.pos_edad = pos_edad;
    }
    
//______________________________________________________________________________

    public String getPos_raza() {
        return pos_raza;
    }
    public void setPos_raza(String pos_raza) {
        this.pos_raza = pos_raza;
    }
    
//______________________________________________________________________________

    public String getPos_color_01() {
        return pos_color_01;
    }
    public void setPos_color_01(String pos_color_01) {
        this.pos_color_01 = pos_color_01;
    }
    
//______________________________________________________________________________

    public String getPos_color_02() {
        return pos_color_02;
    }
    public void setPos_color_02(String pos_color_02) {
        this.pos_color_02 = pos_color_02;
    }
    
//______________________________________________________________________________

    public String getPos_color_03() {
        return pos_color_03;
    }
    public void setPos_color_03(String pos_color_03) {
        this.pos_color_03 = pos_color_03;
    }
    
//______________________________________________________________________________

    public String getPos_especie() {
        return pos_especie;
    }
    public void setPos_especie(String pos_especie) {
        this.pos_especie = pos_especie;
    }
    
//______________________________________________________________________________

    public Boolean getPos_tiene_collar() {
        return pos_tiene_collar;
    }
    public void setPos_tiene_collar(Boolean pos_tiene_collar) {
        this.pos_tiene_collar = pos_tiene_collar;
    }
    
//______________________________________________________________________________

    public Boolean getPos_tiene_chip() {
        return pos_tiene_chip;
    }
    public void setPos_tiene_chip(Boolean pos_tiene_chip) {
        this.pos_tiene_chip = pos_tiene_chip;
    }
    
//______________________________________________________________________________

    public String getPos_desc_collar() {
        return pos_desc_collar;
    }
    public void setPos_desc_collar(String pos_desc_collar) {
        this.pos_desc_collar = pos_desc_collar;
    }
    
//______________________________________________________________________________

    public String getTipo_reporte() {
        return tipo_reporte;
    }
    public void setTipo_reporte(String tipo_reporte) {
        this.tipo_reporte = tipo_reporte;
    }
    
//______________________________________________________________________________

    public String getDescripcion_reporte() {
        return descripcion_reporte;
    }
    public void setDescripcion_reporte(String descripcion_reporte) {
        this.descripcion_reporte = descripcion_reporte;
    }
    
//______________________________________________________________________________
}
