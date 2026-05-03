const mascota_01 = {
    id: 1,

    nombre: "Bucky",
    animal: "perro",
    raza_1: "pastor_aleman",
    raza_2: "NONE",
    raza_sg: true,
    
    genero: "Macho",
    genero_seg: true,

    edad: "2 anios",
    edad_seg: true,

    apariencia: "cafe-cafe-medio-tiene la oreja izquierda partida",
    condicion: "NONE",

    collar: true,
    collar_des: "rojo--cuero-tiene un emblema con su nombre",
    chip: true,
    chip_ubi: "oreja izquierda",

    ubicacion_res: "San vicente",
    ubicacion_mos: true,

    tipo: "mascota",
    estado: "perdido",

    rut_usuario: "50500500-5"
}

const mascota_02 = {
    id: 2,

    nombre: "UNKNOWN",
    animal: "perro",
    raza_1: "pastor_aleman",
    raza_2: "NONE",
    raza_sg: false,
    
    genero: "Macho",
    genero_seg: true,

    edad: "1 anios",
    edad_seg: false,

    apariencia: "cafe-cafe-UNKNOWN-tiene una oreja partida",
    condicion: "NONE",

    collar: true,
    collar_des: "rojo--UNKNOWN-tiene un emblema, que dice su nombre",
    chip: false,
    chip_ubi: "UNKNOWN",

    ubicacion_res: "San vicente",
    ubicacion_mos: true,

    tipo: "lo_vi",
    estado: "perdido",

    rut_usuario: "30300300-3"
}
localStorage.setItem("mascota_01", JSON.stringify(mascota_01))
localStorage.setItem("mascota_02", JSON.stringify(mascota_02))