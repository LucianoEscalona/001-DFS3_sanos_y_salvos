package ssGrupo.usuario.jwt;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import ssGrupo.usuario.entity.Usuario;

@Component
public class JwtUtil {
    
    private final String SECRET = "m&89fHs==Sh278!Ubfyva827do$2C#2dP3&d";
    
    private final long EXPIRATION = 1000*60*60*24;
    
    private Key getKey(){
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }
    public String generateToken(Usuario u){
        return Jwts.builder()
            .setSubject(u.getCorreo())
            .claim("rol", u.getTipo_usuario())
            .setIssuedAt(new Date())
            .setExpiration(
            new Date(System.currentTimeMillis() + EXPIRATION)
            ).signWith(getKey(), SignatureAlgorithm.HS256)
            .compact();
    }
}
