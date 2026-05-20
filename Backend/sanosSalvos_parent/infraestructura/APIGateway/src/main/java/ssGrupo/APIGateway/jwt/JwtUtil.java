package ssGrupo.APIGateway.jwt;

import java.security.Key;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
    
    private final String SECRET = "m&89fHs==Sh278!Ubfyva827do$2C#2dP3&d";
    
    private Key getKey(){
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }
    public Claims validateToken(String token){
        
        return Jwts.parserBuilder()
            .setSigningKey(getKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
}
