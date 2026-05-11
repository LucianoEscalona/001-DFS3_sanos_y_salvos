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
public class ExcepcionesGEN {
/*
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> excepcionGenerica(String instancia, Exception e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "6001",
            "Error generico",
            "NA",
            instancia, 
            e.getMessage(),
            f_format
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);
    }
*/
}
