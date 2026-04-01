package Lizarus.ms_gestionReportes.controller;

import Lizarus.ms_gestionReportes.entity.reporte;
import Lizarus.ms_gestionReportes.service.reporteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class reporteController {
    
    @Autowired
    private reporteService ser;
    
//______________________________________________________________________________
    
    @GetMapping("/reportes")
    public List<reporte> getReporte(){
        return ser.obtenerReportes();
    }
    
    @GetMapping("/reportes/{id}")
    public reporte getReporte_ID(@PathVariable Integer id){
        return ser.obtenerReporte_ID(id);
    }
    
//______________________________________________________________________________
    
    @PostMapping("/addReporte")
    public reporte saveReporte(@RequestBody reporte r){
        return ser.guardarReporte(r);
    }
    
//______________________________________________________________________________
    
    @PutMapping("/modReporte/{id}")
    public reporte modReporte(@RequestBody reporte r){
        return ser.modificarReporte(r);
    }
    
//______________________________________________________________________________
    
    @DeleteMapping("/delReporte/{id}")
    public String delReporte(@PathVariable Integer id){
        return ser.borrarUsuario(id);
    }
}
