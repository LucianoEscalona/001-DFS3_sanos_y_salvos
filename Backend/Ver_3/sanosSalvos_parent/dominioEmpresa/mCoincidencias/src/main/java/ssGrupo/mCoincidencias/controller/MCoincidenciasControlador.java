package ssGrupo.mCoincidencias.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ssGrupo.mCoincidencias.entity.ResultadoCoincidencia;
import ssGrupo.mCoincidencias.exception.ErrorNoConcretado;
import ssGrupo.mCoincidencias.service.MCoincidenciasServicio;


@RestController
@RequestMapping("/motor/v1")
public class MCoincidenciasControlador {
    
    @Autowired
    private MCoincidenciasServicio ser;
    
    @GetMapping("/procesar/{id_m}/{id_r}")
    public String procesar_coincidencias(
            @PathVariable("id_m") Integer id_m, 
            @PathVariable("id_r") Integer id_r) {
        try {
            ser.procesar(id_m, id_r);
            return "Proceso ejecutado correctamente";
        } catch (Exception e) {
            throw new ErrorNoConcretado("/motor/v1/procesar"+"-"+
                "No se pudo realizar la busqueda de coincidencias (id mascota: "+id_m+", id reporte: "+id_r+")"+"-"+
                "Procesar (busqueda de resultados)");
        }
        
    }
    @GetMapping("/resultado/{id_r}")
    public List<ResultadoCoincidencia> recuperar_resultado( 
            @PathVariable("id_r") Integer id_r) {
        try {
            return ser.recuperarRes(id_r);
        } catch (Exception e) {
            throw new ErrorNoConcretado("/motor/v1/resultado"+"-"+
                "No se pudo recuperar los resultados de las coincidencias del reporte (id reporte:"+id_r+")"+"-"+
                "Obtener mascota con ID");
        }
    };
    @GetMapping("/obtener/{id}")
    public ResultadoCoincidencia obtener_resultado( 
            @PathVariable("id") Integer id) {
        try {
            return ser.recResUnico(id);
        } catch (Exception e) {
            throw new ErrorNoConcretado("/motor/v1/obtener"+"-"+
                "No se pudo recuperar el resultado de las coincidencias del reporte unico (id:"+id+")"+"-"+
                "Obtener mascota con ID");
        }
    };
}
