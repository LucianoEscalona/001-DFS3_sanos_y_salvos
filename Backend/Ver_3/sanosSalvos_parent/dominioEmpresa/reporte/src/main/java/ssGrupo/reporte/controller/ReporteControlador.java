package ssGrupo.reporte.controller;

import java.util.List;
import java.util.NoSuchElementException;
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
import ssGrupo.reporte.exception.ErrorNoConcretado;
import ssGrupo.reporte.repository.ReporteRepositorio;

@RestController
@RequestMapping("/reporte/v1")
public class ReporteControlador {
    
    @Autowired
    ReporteRepositorio rep;
    @Autowired
    private WebClient.Builder wcBuilder;
//______________________________________________________________________________
    
    @GetMapping("/listar")
    public ResponseEntity<List<Reporte>> list(){
        try {
            List<Reporte> allR = rep.findAll();

            if (allR.isEmpty()){
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.ok(allR);
            }
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/reporte/v1/listar"+"-"+
                "No se pudo listar los reportes de mascotas"+"-"+
                "Listar reportes");
        }
    }
   
//______________________________________________________________________________
    
    @GetMapping("/obtener/{id}")
    public ResponseEntity<?> get(@PathVariable("id") Integer id) {
        try {
            Optional<Reporte> optR = rep.findById(id);

            if(optR.isPresent()){
                Reporte rR = optR.get();
                return new ResponseEntity<>(rR, HttpStatus.OK);
            } else {
                throw new NoSuchElementException(
                    "/reporte/v1/obtener"+"-"+
                    "No se pudo encontrar el reporte con id:"+id);
            }
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/reporte/v1/obtener"+"-"+
                "No se pudo recuperar el reporte (id:"+id+")"+"-"+
                "Obtener reporte con ID");
        }
    }
    
//______________________________________________________________________________
    
    @PutMapping("/mod_rep/{id}")
    public ResponseEntity<?> put_tipo(@PathVariable("id") Integer id, @RequestBody Reporte r){
        try {
            Optional<Reporte> optR = rep.findById(id);

            if(optR.isPresent()){
                Reporte modR = optR.get();
                modR.setId_mascota(r.getId_mascota());
                modR.setId_usuario(r.getId_usuario());
                modR.setTitulo(r.getTitulo());
                modR.setDescripcion(r.getDescripcion());
                modR.setConsideracion_e(r.getConsideracion_e());
                modR.setTiempo_uvv(r.getTiempo_uvv());
                modR.setUbicacion_uvv(r.getUbicacion_uvv());
                Reporte rR = rep.save(modR);
                return new ResponseEntity<>(rR, HttpStatus.OK);
            } else {
                throw new NoSuchElementException(
                    "/reporte/v1/modificar"+"-"+
                    "No se encontro ningun reporte con el id: "+id);
            }
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/reporte/v1/mod_rep"+"-"+
                "No se pudo modificar el reporte (id:"+id+")"+"-"+
                "Modificar informacion reporte");
        }
    }
//______________________________________________________________________________
    
    @PostMapping("/guardar")
    public ResponseEntity<?> post(@RequestBody Reporte r){
        try {
            Reporte rR = rep.save(r);
            return ResponseEntity.status(HttpStatus.CREATED).body(rR);
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/reporte/v1/guardar"+"-"+
                "No se pudo guardar el reporte en el sistema"+"-"+
                "Guardar");
        }
    }
//______________________________________________________________________________

    @DeleteMapping("/retirar_sis/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        try {
            rep.deleteById(id);
            if(rep.findById(id).isEmpty()){
                throw new RuntimeException(
                    "/reporte/v1/retirar_sis"+"-"+
                    "No se encontro ningun reporte con el id: "+id);
            }
            return ResponseEntity.ok(HttpStatus.OK);
        } catch (Exception e) {
            throw new ErrorNoConcretado(
                "/reporte/v1/retirar_sis"+"-"+
                "No se pudo retirar el reporte (id:"+id+") del sistema"+"-"+
                "Retirar sistema");
        }
    }
}
