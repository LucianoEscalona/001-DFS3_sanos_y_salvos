package ssGroup.mascota.exception;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ssGroup.mascota.common.RespuestaExcepciones;

@RestControllerAdvice
public class ExcepcionesAPI {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> manejarHostDesconocido(String instancia, Exception e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4001",
            "Host Desconocido",
            "Tecnico",
            instancia, 
            e.getMessage(),
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);      
    }
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> manejarServicioAbajo(String instancia, Exception e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4002",
            "Servicio abajo",
            "Conexion",
            instancia, 
            e.getMessage(),
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);    
    }
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> manejarMalRequest(String instancia, Exception e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4003",
            "Mal Requequest",
            "Tecnico",
            instancia, 
            e.getMessage(),
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);    
    }
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> manejarNotFound(String instancia, Exception e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4004",
            "No se pudo encontrar",
            "Tecnico",
            instancia, 
            e.getMessage(),
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);    
    }
    
//______________________________________________________________________________
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> servicioFaltante(String instancia, Exception e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4005",
            "No se pudo realizar la accion, ya que un servicio necesario no esta arriba",
            "Tecnico",
            instancia, 
            e.getMessage(),
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);    
    }
}
