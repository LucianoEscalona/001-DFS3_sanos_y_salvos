package ssGroup.mascota.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.reactive.function.client.WebClient;

import ssGroup.mascota.entity.Mascota;
import ssGroup.mascota.repository.MascotaRepositorio;

@RestController
@RequestMapping("/mascota/v1")
public class MascotaControlador {
    
    @Autowired
    MascotaRepositorio rep;
    @Autowired
    private WebClient.Builder wcBuilder;
//______________________________________________________________________________
    
    @GetMapping("/listar")
    public ResponseEntity<List<Mascota>> list(){
        List<Mascota> allM = rep.findAll();
        
        if (allM.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(allM);
        }
    }
//______________________________________________________________________________
    
    @GetMapping("/obtener/{id}")
    public ResponseEntity<?> get(@PathVariable("id") Integer id) {
        Optional<Mascota> optM = rep.findById(id);
        
        if(optM.isPresent()){
            Mascota rM = optM.get();
            return new ResponseEntity<>(rM, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//______________________________________________________________________________
    
    @PutMapping("/mod_info/{id}")
    public ResponseEntity<?> put(@PathVariable("id") Integer id, @RequestBody Mascota m){
        Optional<Mascota> optM = rep.findById(id);
        
        if(optM.isPresent()){
            Mascota modM = optM.get();
            modM.setAnimal(m.getAnimal());
            modM.setNombre(m.getNombre());
            modM.setRaza_1(m.getRaza_1());
            modM.setRaza_2(m.getRaza_2());
            modM.setRaza_sg(m.getRaza_sg());
            
            modM.setGenero(m.getGenero());
            modM.setGenero_seg(m.getGenero_seg());
            
            modM.setEdad(m.getEdad());
            modM.setEdad_seg(m.getEdad_seg());
            
            modM.setApariencia(m.getApariencia());
            modM.setCondicion(m.getCondicion());
            
            modM.setCollar(m.getCollar());
            modM.setCollar_des(m.getCollar_des());
            modM.setChip(m.getChip());
            modM.setChip_ubi(m.getChip_ubi());
            
            modM.setUbicacion_res(m.getUbicacion_res());
            modM.setUbicacion_mos(m.getUbicacion_mos());
            
            modM.setEstado(m.getEstado());
            modM.setTipo(m.getTipo());
            
            modM.setRut_usuario(m.getRut_usuario());
            Mascota rM = rep.save(modM);
            return new ResponseEntity<>(rM, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//______________________________________________________________________________
    
    @PutMapping("/mod_tipo/{id}")
    public ResponseEntity<?> put_tipo(@PathVariable("id") Integer id, @RequestBody Mascota m){
        Optional<Mascota> optM = rep.findById(id);
        
        if(optM.isPresent()){
            Mascota modM = optM.get();
            modM.setTipo(m.getTipo());
            Mascota rM = rep.save(modM);
            return new ResponseEntity<>(rM, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//______________________________________________________________________________
    
    @PutMapping("/mod_estado/{id}")
    public ResponseEntity<?> put_estado(@PathVariable("id") Integer id, @RequestBody Mascota m){
        Optional<Mascota> optM = rep.findById(id);
        
        if(optM.isPresent()){
            Mascota modM = optM.get();
            modM.setEstado(m.getEstado());
            Mascota rM = rep.save(modM);
            return new ResponseEntity<>(rM, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//______________________________________________________________________________
    
    @PostMapping("/guardar")
    public ResponseEntity<?> post(@RequestBody Mascota m){
        Mascota rM = rep.save(m);
        return ResponseEntity.status(HttpStatus.CREATED).body(rM);
    }
//______________________________________________________________________________

    @DeleteMapping("/retirar_sis/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        rep.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
