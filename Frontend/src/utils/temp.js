//simular datos en local storage pq estoy perdiendo la cabeza
/*
// Guardar
const usuario = { id: 1, nombre: "Ana" };
localStorage.setItem('user', JSON.stringify(usuario));

// Leer y convertir de vuelta a objeto JS
const usuarioGuardado = JSON.parse(localStorage.getItem('user'));
console.log(usuarioGuardado.nombre); // "Ana"
*/

export const addLS = async() => {
    const ls_m = [
        {   id: 1,
            nombre:         "Bucky",
            especie:        "Perro",
            raza:           "Pastor_aleman",
            raza_s:         true,
            genero:         "M",
            edad:           "10-10-2020",
            edad_s:         true,
            collar:         true,
            collar_d:       "rojo-cuero-tiene un emblema con su nombre",
            chip:           true,
            chip_u:         "oreja_izquierda",
            des_mascota:    "cafe-negro-NONE-cafes-pelo_medio-cola_corta-pata derecha con herida",
            con_mascota:    "oreja izquierda partida",
            ubicacion:      "san vicente",
            ubicacion_m:    false,
            ubicacion_e:    false,
            tipo_animal:    "mascota"
        },
        {id: 2,
            nombre:         "no_se_sabe",
            especie:        "Gato",
            raza:           "Calico",
            raza_s:         false,
            genero:         "F",
            edad:           "2 años",
            edad_s:         false,
            collar:         true,
            collar_d:       "negro-cuero-tiene un cascabel",
            chip:           false,
            chip_u:         "NONE",
            des_mascota:    "blanco-negro-naranjo-verdes-pelo_largo-cola_larga-NONE",
            con_mascota:    "le falta el ojo izquierdo",
            ubicacion:      "santiago centro",
            ubicacion_m:    true,
            ubicacion_e:    true,
            tipo_animal:    "es_tuyo"
        },
        {id: 3,
            nombre:         "choclito",
            especie:        "Gato",
            raza:           "Naranjoso",
            raza_s:         true,
            genero:         "F",
            edad:           "2 meses",
            edad_s:         true,
            collar:         false,
            collar_d:       "NONE",
            chip:           false,
            chip_u:         "NONE",
            des_mascota:    "blanco-naranjo-NONE-amarillos-pelo_corto-cola_larga-NONE",
            con_mascota:    "NONE",
            ubicacion:      "puente alto",
            ubicacion_m:    true,
            ubicacion_e:    false,
            tipo_animal:    "adopcion"
        }
    ]
    localStorage.setItem("mascotas")
}