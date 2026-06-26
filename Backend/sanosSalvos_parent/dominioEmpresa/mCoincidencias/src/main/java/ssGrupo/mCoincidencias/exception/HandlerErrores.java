package ssGrupo.mCoincidencias.exception;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssGrupo.mCoincidencias.entity.ERes;
import ssGrupo.mCoincidencias.repository.EResRepositorio;

@RestControllerAdvice
public class HandlerErrores {
    
    @Autowired
    private EResRepositorio rep;
    
    @ExceptionHandler(ErrorMotor.class)
    public ResponseEntity<?> hMotorError(IllegalArgumentException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1401",
            "Error en el motor de busqueda",
            "Logica",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.NOT_ACCEPTABLE
        );
        rep.save(res);
        return ResponseEntity
            .status(HttpStatus.NOT_ACCEPTABLE)
            .body(res);
    }
    @ExceptionHandler(ErrorMascotaNoExiste.class)
    public ResponseEntity<?> hMascotaNoE(IllegalArgumentException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1402",
            "Mascota a buscar no existe",
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
    @ExceptionHandler(ErrorReporteNoExiste.class)
    public ResponseEntity<?> hReporteNoE(IllegalArgumentException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1403",
            "Reporte a buscar no existe",
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
    
//______________________________________________________________________________
    
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> hDatosNoValidos(IllegalArgumentException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1404",
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
            "1405",
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
            "1406",
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