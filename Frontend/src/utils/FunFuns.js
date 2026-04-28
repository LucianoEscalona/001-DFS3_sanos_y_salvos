export const capTxt = (text) => {
    if(!text) return ""
    return text.charAt(0).toUpperCase() + text.slice(1)
}
export const formato_collar = (collar_txt, collar) =>{

    if(collar == true){
        var ls_collar = collar_txt?.split("-") || []

        var t_c1 = ls_collar[0]
        var t_c2 = ls_collar[1]
        var t_cm = ls_collar[2]
        var t_cd = ls_collar[3]

        var txt = "Con collar"
        
        // Formateo de la descripcion del collar, para que sea entendible para las personas
        if(t_c1 != "" && t_c1 != "UNKNOWN" && t_c1 != undefined && t_c1 != "NONE"){
            txt = txt + `, de color ${t_c1}`
            if(t_c2 != "" && t_c2 != "UNKNOWN" && t_c2 != undefined && t_c2 != "NONE"){
                txt = txt + ` y ${t_c2}`
            }
        }else{
            txt = txt + ", no estoy seguro de que color"
        }
        if(t_cm != "" && t_cm != "UNKNOWN" && t_cm != undefined && t_cm != "NONE"){
            txt = txt + `, echo de ${t_cm}`
        }else{
            txt = txt + ", no se de que material"
        }
        if(t_cd != "" && t_cd != "UNKNOWN" && t_cd != undefined && t_cd != "NONE"){
            txt = txt + `, ${t_cd}`
        }
        txt = txt + "."

        return txt
    }else{
        return "Sin collar"
    }
}

export const formato_apariencia = (apariencia)=>{

    var txt = ""
    var ls_apariencia = apariencia?.split("-") || []

    var a_ci = ls_apariencia[0]
    var a_cd = ls_apariencia[1]
    var a_lp = ls_apariencia[2]
    var a_ds = ls_apariencia[3]

    if(a_ci != "" && a_ci != "UNKNOWN" && a_ci != undefined && a_ci != "NONE"){
        txt = txt + `Ojo izquierdo color ${a_ci}, `
        if(a_cd != "" && a_cd != "UNKNOWN" && a_cd != undefined && a_cd != "NONE"){
            txt = txt + `ojo derecho color ${a_cd}, `
        }else{
            txt = txt + `color de ojo derecho desconocido, `
        }
    }else{
        txt = txt + `Color de ojo izquierdo desconocido, `
        if(a_cd != "" && a_cd != "UNKNOWN" && a_cd != undefined && a_cd != "NONE"){
            txt = txt + `ojo derecho color ${a_cd}, `
        }else{
            txt = txt + `color de ojo derecho desconocido, `
        }
    }
    if(a_lp != "" && a_lp != "UNKNOWN" && a_lp != undefined && a_lp != "NONE"){
        txt = txt + `largo del pelaje: ${a_lp}`
    }else{
        txt = txt + `largo del pelaje desconocido`
    }
    if(a_ds != "" && a_ds != "UNKNOWN" && a_ds != undefined && a_ds != "NONE"){
        txt = txt + `, ${a_ds}.`
    }else{
        txt = txt + `, sin descripcion.`
    }
    return txt
}

export const formato_raza = (raza_1, raza_2)=>{

    if(raza_2 != "" && raza_2 != "NONE" && raza_2 != undefined){
        var r1 = (raza_1 || "").replace("_"," ")
        var r2 = (raza_2 || "").replace("_"," ")
        return `${capTxt(r1)} mezcla ${capTxt(r2)}`
    }else{
        var r1 = (raza_1 || "").replace("_"," ")
        return `${capTxt(r1)}`
    }
}