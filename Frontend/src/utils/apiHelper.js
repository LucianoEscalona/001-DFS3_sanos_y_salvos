const API = 'http://localhost:8080/api'

// Con "ruta" se refiere al nombre de la ruta de la API 

// Estos 5 metodos son generalizados

// La ruta se usa sin el guion inicial, ya que este esta 
// puesto por defecto



//_PUBLICOS_______________________________________________________________________________________________________________

export const getSMT = async(ruta) => {
    try {
        const res = await fetch(`${API}/${ruta}`)
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", Mensaje de error: ", e)
        return []
    }
}

export const getSMT_ID = async(ruta, id) => {
    try {
        const res = await fetch(`${API}/${ruta}/${id}`)
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta, ", ID: ", id)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", ID: ", id, ", Mensaje de error: ", e)
        return null
    }
}

export const postSMT = async(ruta, cuerpo) => {
    try {
        const res  = await fetch(`${API}/${ruta}`, {
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

export const putSMT = async(ruta, cuerpo) => {
    try {
        const res  = await fetch(`${API}/${ruta}`, {
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

export const deleteSMT = async(ruta, id) => {
    try {
        const res = await fetch(`${API}/${ruta}/${id}`, {
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