package ssGrupo.reporte.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssGrupo.reporte.entity.Reporte;


public interface ReporteRepositorio extends JpaRepository<Reporte, Integer>{
    
}
