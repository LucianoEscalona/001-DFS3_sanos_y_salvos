package ssGrupo.reporte.controller;

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

import ssGrupo.reporte.entity.Reporte;
import ssGrupo.reporte.repository.ReporteRepositorio;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/reporte/v1")
public class ReporteControlador {
    
    @Autowired
    ReporteRepositorio rep;
    @Autowired
    private WebClient.Builder wcBuilder;
//______________________________________________________________________________
    
    @GetMapping("/listar")
    public ResponseEntity<List<Reporte>> list(){
        List<Reporte> allR = rep.findAll();
        
        if (allR.isEmpty()){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(allR);
        }
    }
//______________________________________________________________________________
    
    @PutMapping("/mod_rep/{id}")
    public ResponseEntity<?> put_tipo(@PathVariable("id") Integer id, @RequestBody Reporte r){
        Optional<Reporte> optR = rep.findById(id);
        
        if(optR.isPresent()){
            Reporte modR = optR.get();
            modR.setId_mascota(r.getId_mascota());
            modR.setId_usuario(r.getId_usuario());
            modR.setDescripcion(r.getDescripcion());
            modR.setConsideracion_e(r.getConsideracion_e());
            modR.setTiempo_uvv(r.getTiempo_uvv());
            modR.setUbicacion_uvv(r.getTiempo_uvv());
            Reporte rR = rep.save(modR);
            return new ResponseEntity<>(rR, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
//______________________________________________________________________________
    
    @PostMapping("/guardar")
    public ResponseEntity<?> post(@RequestBody Reporte r){
        Reporte rR = rep.save(r);
        return ResponseEntity.status(HttpStatus.CREATED).body(rR);
    }
//______________________________________________________________________________

    @DeleteMapping("/retirar_sis/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        rep.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    
}
