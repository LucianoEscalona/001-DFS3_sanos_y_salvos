package ssGrupo.reporte.exception;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssGrupo.reporte.entity.ERes;
import ssGrupo.reporte.repository.EResRepositorio;

@RestControllerAdvice
public class HandlerErrores {
    
    @Autowired
    private EResRepositorio rep;
    
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> hDatosNoValidos(IllegalArgumentException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1301",
            "Dato(s) no valido(s)",
            "Logica",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.BAD_REQUEST
        );
        rep.save(res);
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(res);
    }
    
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<?> hNoSeEncontro(NoSuchElementException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1302",
            "Not found",
            "Not found",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.NOT_FOUND
        );
        rep.save(res);
        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(res);
    }
    
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> hNoPuedeEliminar(RuntimeException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1303",
            "No se pudo eliminar",
            "Tecnico",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.NOT_FOUND
        );
        rep.save(res);
        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(res);
    }
}
