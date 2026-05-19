package ssGrupo.reporte.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Schema(description = "Este modelo, permite manejar las excepciones que ocurran en el sistema")
@Entity
@Table(name = "errores")
public class ERes {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Schema(
    name        = "Codigo",
    description = "El codigo numerico del error",
    example     = "Error: 100001",
    requiredMode = Schema.RequiredMode.REQUIRED)
    private String codigo;
//______________________________________________________________________________    
    
    @Schema(
    name        = "Titulo",
    description = "El titulo / nombre del error, sirve para dar una idea general del error",
    example     = "Error: No se pudo guardar OBJETO_X",
    requiredMode = Schema.RequiredMode.REQUIRED)
    private String titulo;
//______________________________________________________________________________
    
    @Schema(
    name        = "Tipo",
    description = "Especifica que tipo de error es",
    example     = "Error: Tecnico",
    requiredMode = Schema.RequiredMode.REQUIRED)
    private String tipo;
//______________________________________________________________________________
    
    @Schema(
    name        = "Instancia",
    description = "Es en donde se produjo el error",
    example     = "Error en: Metodo GET() del CONTROLADOR_X",
    requiredMode = Schema.RequiredMode.REQUIRED)
    private String instancia;
//______________________________________________________________________________
    
    @Schema(
    name        = "Detalle",
    description = "Proporciona informacion extra sobre el error, detalles mas especificos",
    example     = "Error: Al intentar guardar el OBJETO_X, se cancelo la accion ya que ya existe en la BDD",
    requiredMode = Schema.RequiredMode.REQUIRED)
    private String detalle;

//______________________________________________________________________________
    
    @Schema(
    name        = "Fecha",
    description = "Especifica la fecha y hora en que se produjo la excepcion",
    example     = "Error: a las 3:00PM-2/3/2026",
    requiredMode = Schema.RequiredMode.REQUIRED)
    private String fecha;
//______________________________________________________________________________
    
    @Schema(
    name        = "Status",
    description = "Tipico codigo de los errores",
    example     = "404",
    requiredMode = Schema.RequiredMode.REQUIRED)
    private String status;

    public ERes(String codigo, 
            String titulo, 
            String tipo, 
            String instancia, 
            String detalle, 
            String fecha, 
            String status) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.tipo = tipo;
        this.instancia = instancia;
        this.detalle = detalle;
        this.fecha = fecha;
        this.status = status;
    }
}