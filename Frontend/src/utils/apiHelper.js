const API = 'http://localhost'

// Con "ruta" se refiere al nombre de la ruta de la API 

// Estos 5 metodos son generalizados

// La ruta se usa sin el guion inicial, ya que este esta 
// puesto por defecto



//_PUBLICOS_______________________________________________________________________________________________________________

export const getSMT = async(puerto, ruta) => {
    try {
        const res = await fetch(`${API}:${puerto}/api/${ruta}`)
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", Mensaje de error: ", e)
        return []
    }
}

export const getSMT_ID = async(puerto, ruta, id) => {
    try {
        const res = await fetch(`${API}:${puerto}/api/${ruta}/${id}`)
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta, ", ID: ", id)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", ID: ", id, ", Mensaje de error: ", e)
        return null
    }
}

export const postSMT = async(puerto, ruta, cuerpo) => {
    try {
        const res  = await fetch(`${API}:${puerto}/api/${ruta}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cuerpo)
        })
        if(!res.ok) throw new Error("Error al ejecutar: ", ruta)
        const data = await res.json()
        return data
    } catch(e) {
        console.error("Error al ejecutar: ", ruta)
        return "No se pudo guardar ", cuerpo, ", Mensaje de error: ", e
    }
}

export const putSMT = async(puerto, ruta, cuerpo) => {
    try {
        const res  = await fetch(`${API}:${puerto}/api/${ruta}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cuerpo)
        })
        if(!res.ok) throw new Error("Error al ejecutar: ", ruta)
        const data = await res.json()
        return data
    } catch(e) {
        console.error("Error al ejecutar: ", ruta)
        return "No se pudo modificar ", cuerpo, ", Mensaje de error: ", e
    }
}

export const deleteSMT = async(puerto, ruta, id) => {
    try {
        const res = await fetch(`${API}:${puerto}/api/${ruta}/${id}`, {
            method: "DELETE"
        })
        if(!res.ok) throw new Error("Error al ejecutar: ", ruta)
        const data = await res.text()
        return data
    } catch(e) {
        console.error("Error al ejecutar: ", ruta)
        return "No se pudo eliminar ", id, ", Mensaje de error: ", e
    }
}

//_PRIVADOS_______________________________________________________________________________________________________________