package ssGrupo.usuario.exception;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.NoSuchElementException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssGrupo.usuario.entity.ERes;

@RestControllerAdvice
public class HandlerErrores {
    
    @ExceptionHandler(ErrorCorreoRegistrado.class)
    public ResponseEntity<?> hCorreoRegistrado(ErrorCorreoRegistrado e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1201",
            "Correo ya registrado",
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
    @ExceptionHandler(ErrorRutRegistrado.class)
    public ResponseEntity<?> hRutRegistrado(ErrorRutRegistrado e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1202",
            "RUT ya registrado",
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
    @ExceptionHandler(ErrorLogin.class)
    public ResponseEntity<?> hLoginIncorrecto(ErrorLogin e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        String[] lsm = e.getMessage().split("-");
        String lugar = lsm[0];
        String mensj = lsm[1];
        
        ERes res = new ERes(
            "1203",
            "Login incorrecto",
            "Credenciales",
            lugar,
            mensj,
            f_format,
            "" + HttpStatus.UNAUTHORIZED
        );
        return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
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
            "1204",
            "Dato(s) no valido(s)",
            "Credenciales",
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
            "1205",
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
            "1206",
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
            "1207",
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
