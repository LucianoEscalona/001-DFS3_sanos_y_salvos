package ssGrupo.APIGateway.setups;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class Pre_filtradoGlobal implements GlobalFilter{
    
    private static final Logger log = LoggerFactory.getLogger(Pre_filtradoGlobal.class);
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain){
        log.info("Pre-filtrado GLOBAL ejecutado exitosamente!");
        return chain.filter(exchange);
    }
}
