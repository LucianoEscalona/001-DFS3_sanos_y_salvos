package ssGroup.mascota.exception;
/*
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssGroup.mascota.common.RespuestaExcepciones;

@RestControllerAdvice
*/
public class ExcepcionesRDN {
    /*
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> usuarioExistente(String instancia, Exception e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "5001",
            "Usuario ya exisente",
            "Tecnico",
            instancia, 
            "El usuario que se intenta agregar ya existe!, su RUT ya esta registrado en el sistema.",
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);
    }
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> camposFaltantes(String instancia, String mensaje){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "5002",
            "Campo/s faltante/s",
            "Tecnico",
            instancia, 
            mensaje,
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);
    }
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> campoNoValido(String instancia, String mensaje){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "5003",
            "Campo/s no valido/s",
            "Tecnico",
            instancia, 
            mensaje,
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);
    }
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> mascotaNoValida(String instancia, String mensaje){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "5004",
            "La mascota que se intento ingresar no es valida",
            "Tecnico",
            instancia, 
            mensaje,
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);
    }
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> reporteNoValido(String instancia, String mensaje){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "5005",
            "El reporte que se ha intentado ingresar no es valido",
            "Tecnico",
            instancia, 
            mensaje,
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);
    }
    */
}
