package ssGroup.mascota.exception;

import java.rmi.UnknownHostException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.reactive.function.client.WebClientRequestException;
import ssGroup.mascota.common.RespuestaExcepciones;

@RestControllerAdvice

public class ExcepcionesAPI {
    
    @ExceptionHandler(UnknownHostException.class)
    public ResponseEntity<?> manejarHostDesconocido(String instancia, UnknownHostException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4001",
            "Host Desconocido",
            "Tecnico",
            instancia, 
            "El servicio al que se intenta conectar no existe!",
            e.getMessage(),
            f_format,
            "404"
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);      
    }
//______________________________________________________________________________
    
    @ExceptionHandler(WebClientRequestException.class)
    public ResponseEntity<?> manejarServicioAbajo(String instancia, WebClientRequestException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4002",
            "Servicio abajo",
            "Conexion",
            instancia, 
            "El servicio al que se intenta conectar no esta disponible!", 
            e.getMessage(),
            f_format,
            "503"
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);    
    }
//______________________________________________________________________________
    
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<?> manejarMalRequest(String instancia, HttpMessageNotReadableException e){
        
        LocalDateTime f_hoy = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String f_format = f_hoy.format(formato);
        
        RespuestaExcepciones res = new RespuestaExcepciones(
            "4003",
            "Mal Requequest",
            "Tecnico",
            instancia, 
            "El cuerpo JSON de la peticion no es valido!", 
            e.getMessage(),
            f_format,
            "400"
        );
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(res);    
    }
}
