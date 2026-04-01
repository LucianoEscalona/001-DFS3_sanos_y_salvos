package Lizarus.ms_gestionUsuarios.repository;

import Lizarus.ms_gestionUsuarios.entity.usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface usuarioRepository extends JpaRepository<usuario, Integer>{
    
}
