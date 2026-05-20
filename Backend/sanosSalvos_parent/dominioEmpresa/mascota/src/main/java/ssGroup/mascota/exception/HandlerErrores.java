package ssGroup.mascota.exception;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.NoSuchElementException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssGroup.mascota.entity.ERes;

@RestControllerAdvice
public class HandlerErrores {
    
    @ExceptionHandler(ErrorRegistrada.class)
    public ResponseEntity<?> hMascotaRegistrada(ErrorRegistrada e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1101",
            "Mascota ya registrada",
            "Logico",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.CONFLICT
        );
        return ResponseEntity
            .status(HttpStatus.CONFLICT)
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
            "1102",
            "Dato(s) no valido(s)",
            "Logica",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.BAD_REQUEST
        );
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
            "1103",
            "Not found",
            "Not found",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.NOT_FOUND
        );
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
            "1104",
            "No se pudo eliminar",
            "Tecnico",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.NOT_FOUND
        );
        return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(res);
    }
    @ExceptionHandler(ErrorNoConcretado.class)
    public ResponseEntity<?> hErrorGenerico(ErrorNoConcretado e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        String accion = lsm[2];
        
        ERes res = new ERes(
            "1105",
            "No se pudo completar: "+accion,
            "Tecnico",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.BAD_REQUEST
        );
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(res);
    }
}
