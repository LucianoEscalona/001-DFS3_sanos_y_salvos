package ssGroup.mascota.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssGroup.mascota.entity.Mascota;

public interface MascotaRepositorio extends JpaRepository<Mascota, Integer>{
    
}
