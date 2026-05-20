package ssGrupo.APIGateway.setups;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import reactor.core.publisher.Mono;

@Configuration
public class Post_filtradoGlobal {
    
    private static final Logger log = LoggerFactory.getLogger(Post_filtradoGlobal.class);
    
    @Bean
    public GlobalFilter postGlobalFilter(){
        return (exchange,chain)->{
            return chain.filter(exchange)
                .then(Mono.fromRunnable(()->{
                log.info("Post-filtrado GLOBAL ejecutado exitosamente!");
                }));
        };
    }
}
