package ssGrupo.APIGateway.setups;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import io.jsonwebtoken.Claims;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import ssGrupo.APIGateway.jwt.JwtUtil;

@Component
public class Pre_filtradoGlobal implements GlobalFilter{
    
    private static final Logger log = LoggerFactory.getLogger(Pre_filtradoGlobal.class);
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain){
        
        String path = exchange.getRequest().getPath().toString();
        
        if(path.contains("/usuario/v1/login") 
        || path.contains("/usuario/v1/guardar")
        || path.contains("/usuario/v1/listar")
        || path.contains("/usuario/v1/obtener")
        || path.contains("/mascota/v1/listar")
        || path.contains("/mascota/v1/obtener")
        || path.contains("/reporte/v1/listar")
        || path.contains("/reporte/v1/obtener")
        || path.contains("/motor/v1/resultado")
        || path.contains("/motor/v1/obtener")){
            
            return chain.filter(exchange);
        }
        List<String> headers = 
            exchange.getRequest()
            .getHeaders()
            .get("Authorization");
        if(headers == null  || headers.isEmpty()){
            
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            
            return exchange.getResponse().setComplete();
        }
        String token = headers.get(0).replace("Bearer", "");
        
        try {
            Claims claims = jwtUtil.validateToken(token);
            String rol = claims.get("rol", String.class);
            
            if(path.contains("/admin") && !rol.equals("ADMIN")){
                exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
                
                return exchange.getResponse().setComplete();
            }
        } catch (Exception e) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            
            return exchange.getResponse().setComplete();
        }
        
        log.info("Pre-filtrado GLOBAL ejecutado exitosamente!");
        return chain.filter(exchange);
    }
}
