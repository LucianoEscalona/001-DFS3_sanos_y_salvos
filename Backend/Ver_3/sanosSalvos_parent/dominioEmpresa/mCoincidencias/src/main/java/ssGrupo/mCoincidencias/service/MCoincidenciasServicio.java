package ssGrupo.mCoincidencias.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ssGrupo.mCoincidencias.client.MascotaClient;
import ssGrupo.mCoincidencias.client.ReporteClient;
import ssGrupo.mCoincidencias.dto.MascotaDTO;
import ssGrupo.mCoincidencias.dto.Reporte_mDTO;
import ssGrupo.mCoincidencias.entity.ResultadoCoincidencia;
import ssGrupo.mCoincidencias.repository.ResultadoCoincidenciaRepositorio;

@Service
public class MCoincidenciasServicio {
    
    @Autowired
    private MascotaClient mc;
    @Autowired
    private ReporteClient rc;
    @Autowired
    ResultadoCoincidenciaRepositorio rep;
    
    public List<ResultadoCoincidencia> recuperarRes(Integer id_reporte){
        
        List<ResultadoCoincidencia> ls_res = rep.findAll();
        List<ResultadoCoincidencia> ls_res_relacionados = new ArrayList<>();
        for(ResultadoCoincidencia res : ls_res){
            if(Objects.equals(res.getIdReporte(), id_reporte)){
                ls_res_relacionados.add(res);
            }
        }
        
        return ls_res_relacionados;
    }
    
    public void procesar(Integer id_m, Integer id_r){
        
        List<MascotaDTO> ls_m = mc.obtenerMascotas();
        MascotaDTO m_u = mc.obtenerMascotaID(id_m);
        
        List<Reporte_mDTO> ls_r = rc.obtenerReportes();
        Reporte_mDTO r_u = rc.obtenerReporteID(id_r);
        
        for(MascotaDTO m : ls_m){
            if(m_u != null){
                
                Integer ptje_coincidencia = 0;
                Boolean posible_coincidencia = false;

                Boolean c_nombre = false;
                Boolean c_animal = false;
                Boolean c_raza_1 = false;
                Boolean c_raza_2 = false;
                Boolean c_raza_seg = false;

                Boolean c_genero = false;
                Boolean c_genero_seg = false;

                Boolean c_edad = false;
                Boolean c_edad_seg = false;

                Boolean c_apariencia_oi = false;
                Boolean c_apariencia_od = false;
                Boolean c_apariencia_lp = false;

                Boolean c_collar = false;
                Boolean c_collar_c1 = false;
                Boolean c_collar_c2 = false;
                Boolean c_collar_material = false;

                Boolean c_chip = false;
                Boolean c_chip_ubi = false;

                Boolean c_ubicacion = false;
                
                List<String> origen_collar = new ArrayList<>(Arrays.asList(m_u.getCollar_des().split("-")));
                List<String> origen_apariencia = new ArrayList<>(Arrays.asList(m_u.getApariencia().split("-")));
                
                List<String> comparado_collar = new ArrayList<>(Arrays.asList(m.getCollar_des().split("-")));
                List<String> comparado_apariencia = new ArrayList<>(Arrays.asList(m.getApariencia().split("-")));
                
                posible_coincidencia = m_u.getAnimal().equalsIgnoreCase(m.getAnimal());
                
                for(Reporte_mDTO r : ls_r){
                    if(r_u != null){
                        LocalDateTime f_reporte_u = r_u.getTiempo_uvv();
                        LocalDateTime f_reporte_s = r.getTiempo_uvv();
                        posible_coincidencia = f_reporte_u.isBefore(f_reporte_s);
                    }
                }
                
                
                
                if(posible_coincidencia){
                    //----------------------------------------COMPARACION-NOMBRE
                    if(m_u.getNombre().equalsIgnoreCase(m.getNombre())){
                        c_nombre = true;
                        ptje_coincidencia += 3;
                    }
                    //-----------------------------------------COMPARACION-RAZAS
                    if(m_u.getRaza_1().equalsIgnoreCase(m.getRaza_1())){
                        c_raza_1 = true;
                        if(m_u.getRaza_sg() == true){
                            if(Objects.equals(m_u.getRaza_sg(), m.getRaza_sg())){
                                ptje_coincidencia += 3;
                                c_raza_seg = true;
                            }else{
                                ptje_coincidencia += 1;
                            }
                        }else{
                            ptje_coincidencia += 2;
                        }
                    }
                    
                    if(m_u.getRaza_2().equalsIgnoreCase(m.getRaza_2())){
                        c_raza_2 = true;
                        if(m_u.getRaza_sg() == true){
                            if(Objects.equals(m_u.getRaza_sg(), m.getRaza_sg())){
                                ptje_coincidencia += 3;
                                c_raza_seg = true;
                            }else{
                                ptje_coincidencia += 1;
                            }
                        }else{
                            ptje_coincidencia += 2;
                        }
                    }
                    //----------------------------------------COMPARACION-GENERO
                    if(m_u.getGenero().equalsIgnoreCase(m.getGenero())){
                        c_genero = true;
                        if(m_u.getGenero_seg() == true){
                            if(Objects.equals(m_u.getGenero_seg(), m.getGenero_seg())){
                                ptje_coincidencia += 3;
                                c_genero_seg = true;
                            }else{
                                ptje_coincidencia += 1;
                            }
                        }else{
                            ptje_coincidencia += 2;
                        }
                    }
                    //------------------------------------------COMPARACION-EDAD
                    if(m_u.getEdad().equalsIgnoreCase(m.getEdad())){
                        c_edad = true;
                        if(m_u.getEdad_seg()== true){
                            if(Objects.equals(m_u.getEdad_seg(), m.getEdad_seg())){
                                ptje_coincidencia += 3;
                                c_edad_seg = true;
                            }else{
                                ptje_coincidencia += 1;
                            }
                        }else{
                            ptje_coincidencia += 2;
                        }
                    }
                    //------------------------------------COMPARACION-APARIENCIA
                    if(origen_apariencia.get(0).equalsIgnoreCase(comparado_apariencia.get(0))){
                        ptje_coincidencia += 1;
                        c_apariencia_oi = true;
                    }
                    if(origen_apariencia.get(1).equalsIgnoreCase(comparado_apariencia.get(1))){
                        ptje_coincidencia += 1;
                        c_apariencia_od = true;
                    }
                    if(origen_apariencia.get(2).equalsIgnoreCase(comparado_apariencia.get(2))){
                        ptje_coincidencia += 1;
                        c_apariencia_lp = true;
                    }
                    //----------------------------------------COMPARACION-COLLAR
                    if(m_u.getCollar() == true){
                        if(Objects.equals(m_u.getCollar(), m.getCollar())){
                            c_collar = true;
                            if(origen_collar.get(0).equalsIgnoreCase(comparado_collar.get(0))){
                                ptje_coincidencia += 1;
                                c_collar_c1 = true;
                            }
                            if(origen_collar.get(1).equalsIgnoreCase(comparado_collar.get(1))){
                                ptje_coincidencia += 1;
                                c_collar_c2 = true;
                            }
                            if(origen_collar.get(2).equalsIgnoreCase(comparado_collar.get(2))){
                                ptje_coincidencia += 1;
                                c_collar_material = true;
                            }
                        }
                    }else{
                        if(Objects.equals(m_u.getCollar(), m.getCollar())){
                            ptje_coincidencia += 2;
                            c_collar = true;
                        }
                    }
                    //----------------------------------------------------------
                    if(m_u.getChip() == true){
                        if(Objects.equals(m_u.getChip(), m.getChip())){
                            ptje_coincidencia += 2;
                            c_chip = true;
                            if(m_u.getChip_ubi().equalsIgnoreCase(m.getChip_ubi())){
                                ptje_coincidencia += 2;
                                c_chip_ubi = true;
                            }
                        }
                    }
                    //----------------------------------------------------------
                    if(m_u.getUbicacion_res().equalsIgnoreCase(m.getUbicacion_res())){
                        ptje_coincidencia += 3;
                        c_ubicacion = true;
                    }
                    
                    ResultadoCoincidencia rc_motor = new ResultadoCoincidencia(
                            ptje_coincidencia,
                            c_nombre,
                            c_animal,
                            c_raza_1,
                            c_raza_2,
                            c_raza_seg,
                            c_genero,
                            c_genero_seg,
                            c_edad,
                            c_edad_seg,
                            c_apariencia_oi,
                            c_apariencia_od,
                            c_apariencia_lp,
                            c_collar,
                            c_collar_c1,
                            c_collar_c2,
                            c_collar_material,
                            c_chip,
                            c_chip_ubi,
                            c_ubicacion,
                            m_u.getId(),
                            r_u.getId()
                    );
                    rep.save(rc_motor);
                }
                
            }
            System.out.println("Animal numero " + m.getId() + ": " + m.getAnimal());
        }
        if(m_u != null){
            System.out.println("Animal recuperado:" + m_u.getAnimal());
        }
        
        for(Reporte_mDTO r : ls_r){
            System.out.println("Reporte numero " + r.getId() + ": " + r.getTitulo());
        }
        if(r_u != null){
            System.out.println("Reporte recuperado:" + r_u.getTitulo());
        }
    }
}
