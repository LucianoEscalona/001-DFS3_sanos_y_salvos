package ssGrupo.mCoincidencias.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ssGrupo.mCoincidencias.client.MascotaClient;
import ssGrupo.mCoincidencias.client.ReporteClient;
import ssGrupo.mCoincidencias.dto.MascotaDTO;
import ssGrupo.mCoincidencias.dto.ReporteDTO;
import ssGrupo.mCoincidencias.entity.ResultadoCoincidencia;
import ssGrupo.mCoincidencias.exception.ErrorMotor;
import ssGrupo.mCoincidencias.repository.ResultadoCoincidenciaRepositorio;

@Service
public class MCoincidenciasServicio {
    
    @Autowired
    private MascotaClient mc;
    @Autowired
    private ReporteClient rc;
    @Autowired
    ResultadoCoincidenciaRepositorio rep;
    @Autowired
    private RestTemplate rt;
    
    public ResultadoCoincidencia recResUnico(Integer id){
        return rep.findById(id).orElse(null);
    }
    
    public List<ResultadoCoincidencia> recuperarRes(Integer id_reporte){
        
        try {
            List<ResultadoCoincidencia> ls_res = rep.findAll();
            List<ResultadoCoincidencia> ls_res_relacionados = new ArrayList<>();
            for(ResultadoCoincidencia res : ls_res){
                if(Objects.equals(res.getIdReporte(), id_reporte)){
                    ls_res_relacionados.add(res);
                }
            }

            return ls_res_relacionados;
        } catch (Exception e) {
            throw new ErrorMotor(
                "Servicio motor, reuperarRes"+"-"+
                "Hubo un error inesperado al intentar recuperar los resultados de las coincidencias");
        }
    }

    public void procesar(Integer id_m, Integer id_r){

        ResultadoCoincidencia resCon = new ResultadoCoincidencia();

        List<MascotaDTO> ls_mascota = mc.obtenerMascotas();
        List<ReporteDTO> ls_reporte = rc.obtenerReportes();

        MascotaDTO m = mc.obtenerMascotaID(id_m);
        ReporteDTO r = rc.obtenerReporteID(id_r);

        Integer p_coin = 0;     /*Puntaje coincidencia*/
        Boolean e_coin = false; /*Existe coincidencia*/
        System.out.println("Entrando al for");
        for(MascotaDTO mDto : ls_mascota){
            System.out.println("Dentro del for");
            if(mDto.getId() != id_m){
                resCon.setIdMascota(id_m);
                resCon.setIdMascota_revisada(mDto.getId());
                resCon.setIdReporte(id_r);

                for(ReporteDTO rDto : ls_reporte){
                    if(rDto.getId_mascota() == m.getId()){
                        resCon.setIdReporte_revisado(rDto.getId());
                    }
                }

                List<String> o_lsc = new ArrayList<>(Arrays.asList(m.getCollar_des().split("-")));
                List<String> o_lsa = new ArrayList<>(Arrays.asList(m.getApariencia().split("-")));

                List<String> c_lsc = new ArrayList<>(Arrays.asList(mDto.getCollar_des().split("-")));
                List<String> c_lsa = new ArrayList<>(Arrays.asList(mDto.getApariencia().split("-")));

                if(m.getAnimal().equalsIgnoreCase(mDto.getAnimal())){
                    resCon.setAnimal_coincide(true);
                    e_coin = true;
                    p_coin += 3;
                }else{
                    resCon.setAnimal_coincide(false);
                }

                if(m.getNombre().equalsIgnoreCase(mDto.getNombre())){
                    resCon.setNombre_coincide(true);
                    p_coin += 3;
                }else{
                    resCon.setNombre_coincide(false);
                }

                if(m.getRaza_1().equalsIgnoreCase(mDto.getRaza_1())){
                    resCon.setRaza_primaria_coincide(true);
                    if(m.getRaza_sg() == true){
                        if(Objects.equals(m.getRaza_sg(), mDto.getRaza_sg())){
                            p_coin += 3;
                            resCon.setRaza_es_segura(true);
                        }else{
                            p_coin += 1;
                            resCon.setRaza_es_segura(false);
                        }
                    }else{
                        p_coin += 2;
                    }
                }else{
                    resCon.setRaza_primaria_coincide(false);
                }

                if(m.getRaza_2().equalsIgnoreCase(mDto.getRaza_2())){
                    resCon.setRaza_secundaria_coincide(true);
                    if(m.getRaza_sg() == true){
                        if(Objects.equals(m.getRaza_sg(), mDto.getRaza_sg())){
                            p_coin += 3;
                            resCon.setRaza_es_segura(true);
                        }else{
                            p_coin += 1;
                            resCon.setRaza_es_segura(false);
                        }
                    }else{
                        p_coin += 2;
                        resCon.setRaza_es_segura(false);
                    }
                }else{
                    resCon.setRaza_secundaria_coincide(false);
                }

                if(m.getGenero().equalsIgnoreCase(mDto.getGenero())){
                    resCon.setGenero_coincide(true);
                    if(m.getGenero_seg() == true){
                        if(Objects.equals(m.getGenero_seg(), mDto.getGenero_seg())){
                            p_coin += 3;
                            resCon.setGenero_es_seguro(true);
                        }else{
                            p_coin += 1;
                            resCon.setGenero_es_seguro(false);
                        }
                    }else{
                        p_coin += 2;
                        resCon.setGenero_es_seguro(false);
                    }
                }else{
                    resCon.setGenero_coincide(false);
                }

                if(m.getEdad().equalsIgnoreCase(mDto.getEdad())){
                    resCon.setEdad_coincide(true);
                    if(m.getEdad_seg()== true){
                        if(Objects.equals(m.getEdad_seg(), mDto.getEdad_seg())){
                            p_coin += 3;
                            resCon.setEdad_es_segura(true);
                        }else{
                            p_coin += 1;
                            resCon.setEdad_es_segura(false);
                        }
                    }else{
                        p_coin += 2;
                        resCon.setEdad_es_segura(false);
                    }
                }else{
                    resCon.setEdad_coincide(false);
                }

                if(o_lsa.get(0).equalsIgnoreCase(c_lsa.get(0))){
                    p_coin += 1;
                    resCon.setColor_ojo_i_coincide(true);
                }else{
                    resCon.setColor_ojo_i_coincide(false);
                }
                if(o_lsa.get(1).equalsIgnoreCase(c_lsa.get(1))){
                    p_coin += 1;
                    resCon.setColor_ojo_d_coincide(true);
                }else{
                    resCon.setColor_ojo_d_coincide(false);
                }
                if(o_lsa.get(2).equalsIgnoreCase(c_lsa.get(2))){
                    p_coin += 1;
                    resCon.setLargo_pelaje_coincide(true);
                }else{
                    resCon.setLargo_pelaje_coincide(false);
                }

                if(m.getCollar() == true){
                    if(Objects.equals(m.getCollar(), mDto.getCollar())){
                        resCon.setTiene_collar(true);
                        if(o_lsc.get(0).equalsIgnoreCase(c_lsc.get(0))){
                            p_coin += 1;
                            resCon.setColor_collar_p_coincide(true);
                        }else{
                            resCon.setColor_collar_p_coincide(false);
                        }
                        if(o_lsc.get(1).equalsIgnoreCase(c_lsc.get(1))){
                            p_coin += 1;
                            resCon.setColor_collar_s_coincide(true);
                        }else{
                            resCon.setColor_collar_s_coincide(false);
                        }
                        if(o_lsc.get(2).equalsIgnoreCase(c_lsc.get(2))){
                            p_coin += 1;
                            resCon.setMaterial_collar_coincide(true);
                        }else{
                            resCon.setMaterial_collar_coincide(false);
                        }
                    }else{
                        resCon.setTiene_collar(false);
                    }
                }else{
                    if(Objects.equals(m.getCollar(), mDto.getCollar())){
                        p_coin += 2;
                        resCon.setTiene_collar(true);
                    }else{
                        resCon.setTiene_collar(false);
                    }
                }

                if(m.getChip() == true){
                    if(Objects.equals(m.getChip(), mDto.getChip())){
                        p_coin += 2;
                        resCon.setTiene_chip(true);
                        if(m.getChip_ubi().equalsIgnoreCase(mDto.getChip_ubi())){
                            p_coin += 2;
                            resCon.setUbicacion_chip_coincide(true);
                        }else{
                            resCon.setUbicacion_chip_coincide(false);
                        }
                    }else{
                        resCon.setTiene_chip(false);
                    }
                }else if(m.getChip() == false){
                    if(Objects.equals(m.getChip(), mDto.getChip())){
                        p_coin += 4;
                        resCon.setUbicacion_chip_coincide(true);
                        resCon.setTiene_chip(true);
                    }else{
                        resCon.setUbicacion_chip_coincide(false);
                        resCon.setTiene_chip(false);
                    }
                }

                if(m.getUbicacion_res().equalsIgnoreCase(mDto.getUbicacion_res())){
                    p_coin += 3;
                    resCon.setUbicacion_estadia_coincide(true);
                }else{
                    resCon.setUbicacion_estadia_coincide(false);
                }

                resCon.setPtje_res_coincidencia(p_coin);
                rep.save(resCon);
            }
        }
    }
}
