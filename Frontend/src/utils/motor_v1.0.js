export const motor_v1_test = (m_o, m_c) => {

    var nivel_coincidencia = 0
    var negacion_coincidencia = false

    var ls_collar_desc = []
    var ls_apariencia = []

    var c_nombre = false

    var c_animal = false
    var c_raza_1 = false
    var c_raza_2 = false
    var c_raza_seg = false

    var c_genero = false
    var c_genero_seg = false

    var c_edad = false
    var c_edad_seg = false

    var c_apariencia_cd = false
    var c_apariencia_ci = false
    var c_apariencia_lp = false
    var c_apariencia_desc = false

    var c_condicion = false

    var c_collar_tiene = false
    var c_collar_c1 = false
    var c_collar_c2 = false
    var c_collar_material = false
    var c_collar_desc = false

    var c_chip = false
    var c_chip_ubi = false

    var c_ubicacion = false
    var c_ubicacion_mos = false

    var c_tipo = false
    var c_estado = false

    var mo_ls_collar_desc = m_o.collar_des?.split("-") || []
    var mo_ls_apariencia  = m_o.apariencia?.split("-") || []

    var mc_ls_collar_desc = m_c.collar_des?.split("-") || []
    var mc_ls_apariencia  = m_c.apariencia?.split("-") || []

//_____________________________________________________________

    if(m_o.nombre == m_c.nombre){
        c_nombre = true
        nivel_coincidencia += 3
    }

//_____________________________________________________________

    if(m_o.animal == m_c.animal){
        c_animal = true
        negacion_coincidencia = false
    }else{
        negacion_coincidencia = true
        c_animal = false
    }

//_____________________________________________________________

    if(m_o.raza_1 == m_c.raza_1){
        if(m_o.raza_sg == m_c.raza_sg){
            nivel_coincidencia += 1
            c_raza_1 = true
        }else{
            nivel_coincidencia += 3
            c_raza_1 = true
            c_raza_seg = false
        }
    }
    if(m_o.raza_2 == m_c.raza_2){
        if(m_o.raza_sg == m_c.raza_sg){
            nivel_coincidencia += 3
            c_raza_2 = true
        }else{
            nivel_coincidencia += 1
            c_raza_2 = true
            c_raza_seg = false
        }
    }

//_____________________________________________________________

    if(m_o.genero == m_c.genero){
        if(m_o.genero_seg == m_c.genero_seg){
            nivel_coincidencia += 3
            c_genero = true
            c_genero_seg = true
        }else{
            nivel_coincidencia += 1
            c_genero = true
        }
    }

//_____________________________________________________________

    if(m_o.edad == m_c.edad){
        if(m_o.edad_seg == m_c.edad_seg){
            nivel_coincidencia += 2
            c_edad = true
            c_edad_seg = true
        }else{
            nivel_coincidencia += 1
            c_edad = true
        }
    }

//_____________________________________________________________

    if(mo_ls_apariencia[0] == mc_ls_apariencia[0]){
        nivel_coincidencia += 1
        c_apariencia_ci = true
    }
    if(mo_ls_apariencia[1] == mc_ls_apariencia[1]){
        nivel_coincidencia += 1
        c_apariencia_cd = true
    }
    if(mo_ls_apariencia[2] == mc_ls_apariencia[2]){
        nivel_coincidencia += 1
        c_apariencia_lp = true
    }    

//_____________________________________________________________

    if(m_o.collar == true){
        nivel_coincidencia += 2
        if(mo_ls_collar_desc[0] == mc_ls_collar_desc[0]){
            nivel_coincidencia += 1
            c_collar_c1 = true
        }
        if(mo_ls_collar_desc[1] == mc_ls_collar_desc[1]){
            nivel_coincidencia += 1
            c_collar_c2 = true
        }
        if(mo_ls_collar_desc[2] == mc_ls_collar_desc[2]){
            nivel_coincidencia += 1
            c_collar_material = true
        }
    }

//_____________________________________________________________

    if(m_o.chip == true){
        nivel_coincidencia += 2
        if(m_o.chip_ubi == m_c.chip_ubi){
            nivel_coincidencia += 2
        }
    }

//_____________________________________________________________

    if(m_o.c_ubicacion == m_c.c_ubicacion){
        nivel_coincidencia += 3
    }

    const res_coincidencias = {
        nivel_coincidencia: nivel_coincidencia,
        nombre_coincide: c_nombre,
        animal_coincide: c_animal,
        raza_primaria_coincide: c_raza_1,
        raza_secundaria_coincide: c_raza_2,
        raza_es_segura: c_raza_seg,
        genero_coincide: c_genero,
        genero_es_seguro: c_genero_seg,
        edad_coincide: c_edad,
        edad_es_segura: c_edad_seg,
        color_ojo_i_coincide: c_apariencia_ci,
        color_ojo_d_coincide: c_apariencia_cd,
        largo_pelaje_coincide: c_apariencia_lp,
        color_collar_p_coincide: c_collar_c1,
        color_collar_s_coincide: c_collar_c2,
        material_collar_coincide: c_collar_material,
        chip_coincide: c_chip_ubi,
        ubicacion_estadia_coincide: c_ubicacion

    }
    return res_coincidencias
}