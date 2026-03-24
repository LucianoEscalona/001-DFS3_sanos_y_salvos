package Lizarus.ms_gestionMascotas.repository;

import Lizarus.ms_gestionMascotas.entity.mascota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface mascotaRepository extends JpaRepository<mascota, Integer>{
    
}
