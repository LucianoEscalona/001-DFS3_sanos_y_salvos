package Lizarus.ms_gestionMascotas.controller;

import Lizarus.ms_gestionMascotas.entity.mascota;
import Lizarus.ms_gestionMascotas.service.mascotaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class mascotaController {
    
    @Autowired
    private mascotaService ser;
    
//______________________________________________________________________________
    
    @GetMapping("/mascotas")
    public List<mascota> getMascotas(){
        return ser.obtenerMascotas();
    }
    
    @GetMapping("/mascotas/{id}")
    public mascota getMascota_ID(@PathVariable Integer id){
        return ser.obtenerMascota_ID(id);
    }
    
//______________________________________________________________________________
    
    @PostMapping("/addMascota")
    public mascota saveMascota(@RequestBody mascota m){
        return ser.guardarMascota(m);
    }
    
//______________________________________________________________________________
    
    @PutMapping("/modMascota/{id}")
    public mascota modMascota(@RequestBody mascota m){
        return ser.modificarMascota(m);
    }
    
//______________________________________________________________________________
    
    @DeleteMapping("/delMascota/{id}")
    public String delMascota(@PathVariable Integer id){
        return ser.borrarMascota(id);
    }
}
