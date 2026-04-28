package ssGrupo.usuario.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import ssGrupo.usuario.entity.Usuario;



public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{
    Optional<Usuario> findByCorreo(String correo);
}
