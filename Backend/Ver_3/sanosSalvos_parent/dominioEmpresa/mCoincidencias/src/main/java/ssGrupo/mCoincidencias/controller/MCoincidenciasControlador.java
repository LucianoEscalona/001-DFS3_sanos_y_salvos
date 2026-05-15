package ssGrupo.mCoincidencias.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ssGrupo.mCoincidencias.entity.ResultadoCoincidencia;
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
        
        ser.procesar(id_m, id_r);
        return "Proceso ejecutado correctamente";
    }
    @GetMapping("/resultado/{id_r}")
    public List<ResultadoCoincidencia> recuperar_resultado( 
            @PathVariable("id_r") Integer id_r) {
        return ser.recuperarRes(id_r);
    };
    @GetMapping("/obtener/{id}")
    public ResultadoCoincidencia obtener_resultado( 
            @PathVariable("id") Integer id) {
        return ser.recResUnico(id);
    };
}
