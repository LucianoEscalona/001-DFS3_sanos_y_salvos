package ssGrupo.usuario.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    
    private String token;
    private String tipo_usuario;
    
    private Integer id;
    private String nombre;
    private String apellido_p;
    private String apellido_m;
    
    private String correo;
    private String telefono;
    private String rut;
}
