package ssGroup.mascota.common;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Este modelo, permite manejar las excepciones que ocurran en el sistema")
public class RespuestaExcepciones {
    
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
}
