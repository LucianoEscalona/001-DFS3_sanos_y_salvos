package ssGrupo.APIGateway.setups;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class ConfiguracionWebClient {
    @Bean
    @LoadBalanced
    public WebClient.Builder loadBalancedWebClienBuilder(){
        return WebClient.builder();
    }
}
