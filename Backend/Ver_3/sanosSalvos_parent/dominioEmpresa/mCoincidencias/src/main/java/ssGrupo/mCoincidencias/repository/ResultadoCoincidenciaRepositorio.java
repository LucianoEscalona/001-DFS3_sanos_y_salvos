package ssGrupo.mCoincidencias.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import ssGrupo.mCoincidencias.entity.ResultadoCoincidencia;

public interface ResultadoCoincidenciaRepositorio extends JpaRepository<ResultadoCoincidencia, Integer>{
    List<ResultadoCoincidencia> findByIdReporte(Integer id_r);
}
