export const motor_demo = ()=>{
    const data_m = JSON.parse(localStorage.getItem("data"))
    var lsM_mascota = []
    var lsM_esTuyo = []

    var separado_m = []
    var separado_p = []
    var desc_sep_m = []
    var desc_sep_p = []

    var pt_con = 0
    var negacion_coincidencia = false

    var c_nombre = false
    var c_animal = false
    var c_raza = false
    var c_raza_seg = false
    var c_genero = false
    var c_genero_seg = false
    var c_collar = false

    data_m.forEach(m => {
        if (m.tipo == "mascota"){
            lsM_mascota.push(m)
        }else if (m.tipo == "es_tuyo"){
            lsM_esTuyo.push(m)
        }
    })
    lsM_mascota.forEach(mascota => {

        separado_m = mascota.collar_dsc.split("-")
        console.log(separado_m)
        
        lsM_esTuyo.forEach(animal => {

            separado_p = animal.collar_dsc.split("-")
            console.log(separado_p)
            
            if(mascota.nombre     == animal.nombre){c_nombre = true;         pt_con = pt_con + 3}
            if(mascota.animal     == animal.animal){c_animal = true;         pt_con = pt_con + 3}
            if(mascota.raza       == animal.raza){c_raza = true;             pt_con = pt_con + 3}
            if(mascota.raza_seg   == animal.raza_seg){c_raza_seg = true;     pt_con = pt_con - 2}
            if(mascota.genero     == animal.genero){c_genero = true;         pt_con = pt_con + 3}
            if(mascota.genero_seg == animal.genero_seg){c_genero_seg = true; pt_con = pt_con - 2}
            if(mascota.collar     == animal.collar){c_collar = true;         pt_con = pt_con + 1}
        })
         
    })
    separado_m.forEach(valor=>{
        separado_p.forEach(valor_p =>{
            if(valor == valor_p){
                pt_con = pt_con + 1
                
            }
        })
    })
    console.log("nombre: ", c_nombre)
    console.log("animal: ", c_animal)
    console.log("raza: ", c_raza)
    console.log("raza segura: ", c_raza_seg)
    console.log("collar: ", c_collar)
    console.log("genero: ", c_genero)
    console.log("genero seguro: ", c_genero_seg)
    console.log(pt_con)
    if(c_animal == false){negacion_coincidencia = true}
}

const data = [
    {
        id:1,
        nombre:"bucky",
        animal:"perro",
        raza:"pastor_aleman",
        raza_seg:true,
        genero:"M",
        genero_seg:true,
        descripcion:"cafe-negro-NONE-verdes-larga-herida en la pata trasera izquierda",
        collar:true,
        collar_dsc:"rojo-cuero-emblema con su nombre",
        tipo:"mascota",
        estado:"perdido"
    },{
        id:2,
        nombre:"bucky",
        animal:"perro",
        raza:"pastor_aleman",
        raza_seg:false,
        genero:"M",
        genero_seg:true,
        descripcion:"cafe-negro-NONE-verdes-larga-tiene una herida en la patita de atras a la izquierda",
        collar:true,
        collar_dsc:"rojo-cuero-tiene un emblema, que dice 'Bucky'",
        tipo:"es_tuyo",
        estado:"visto"
    }
]
export const insert_ls = ()=>{
    localStorage.setItem("data", JSON.stringify(data))
}

/* 
lsM_mascota.forEach(mascota => {

        
        for (let dat in mascota){

            if(dat == "collar_dsc"){
            separado_m = mascota[dat].split("-")
                console.log(separado_m)
            }
            lsM_esTuyo.forEach(animal => {

                for (let dato in animal){
                    
                    if(dato == "collar_dsc"){
                        separado_p = animal[dato].split("-")
                        console.log(separado_p)
                    }
                    
                    if(mascota[dat] == animal[dato]){
                        if(dat=="nombre"){c_nombre=true}
                        if(dat=="animal"){c_animal=true}
                        if(dat=="raza"){c_raza=true}
                        if(dat=="raza_seg"){c_raza_seg=true}
                        if(dat=="collar"){c_collar=true}
                        if(dat=="genero"){c_genero=true}
                        if(dat=="genero_seg"){c_genero_seg=true}
                        console.log("coincide ", dat)
                        console.log("Mascota: ", mascota[dat],"/ Animal visto: ",animal[dato])
                    }   
                }   
            })
        }   
    })



🧠 Opciones reales en Node.js / JS
1. 🔥 Embeddings (LA MEJOR opción hoy)

La forma más efectiva es usar vectores semánticos (embeddings).

Puedes usar:

OpenAI API
TensorFlow.js
sentence-transformers (más común en Python)
💡 Idea:

Convertir cada texto en un vector y luego medir similitud (cosine similarity)

Ejemplo conceptual en JS:

const emb1 = await getEmbedding("me duele la pata");
const emb2 = await getEmbedding("me lastima la patita");

const similarity = cosineSimilarity(emb1, emb2);

if (similarity > 0.8) {
  console.log("Son equivalentes");
}

👉 Esto sí detecta sinónimos y contexto automáticamente.
*/