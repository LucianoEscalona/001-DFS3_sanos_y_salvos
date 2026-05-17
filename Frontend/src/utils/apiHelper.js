const API = 'http://localhost:8080'

// Con "ruta" se refiere al nombre de la ruta de la API 

// Estos 5 metodos son generalizados

// La ruta se usa sin el guion inicial, ya que este esta 
// puesto por defecto

const getToken = () => {
    const sesion = JSON.parse(localStorage.getItem("sesion"))

    return sesion?.token
}

//_PUBLICOS_______________________________________________________________________________________________________________

export const getSMT = async(api, ruta) => {
    try {
        const res = await fetch(`${API}/${api}/v1/${ruta}`)
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", Mensaje de error: ", e)
        return []
    }
}

export const getSMT_ID = async(api, ruta, id) => {
    try {
        const res = await fetch(`${API}/${api}/v1/${ruta}/${id}`)
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta, ", ID: ", id)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", ID: ", id, ", Mensaje de error: ", e)
        return null
    }
}

export const postSMT = async(api, ruta, cuerpo) => {
    try {
        console.log("ENVIANDO:", cuerpo)
        const res  = await fetch(`${API}/${api}/v1/${ruta}`, {
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
export const postSMT_login = async(api, ruta, cuerpo) => {
    try {
        const res  = await fetch(`${API}/${api}/v1/${ruta}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cuerpo)
        })
        const data = await res.json()
        return {
            ok: res.ok,
            status: res.status,
            data: data
        }
    } catch(e) {
        console.error("Error al ejecutar: ", ruta)
        return {
            ok: false,
            status: 500,
            data: null
        }
    }
}

export const putSMT = async(api, ruta, cuerpo, id) => {
    try {
        console.log(cuerpo)
        const res  = await fetch(`${API}/${api}/v1/${ruta}/${id}`, {
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
//_PROTEGIDOS_______________________________________________________________________________________________________________

export const getSMT_auth = async(api, ruta) => {
    try {
        const token = getToken()
        console.log("TOKEN: ",token)
        const res = await fetch(`${API}/${api}/v1/${ruta}`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", Mensaje de error: ", e)
        return []
    }
}

export const getSMT_ID_auth = async(api, ruta, id) => {
    try {
        const token = getToken()
        console.log("TOKEN: ",token)
        const res = await fetch(`${API}/${api}/v1/${ruta}/${id}`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        if(!res.ok) throw new Error("ERROR al ejecutar: ", ruta, ", ID: ", id)
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: ", ruta, ", ID: ", id, ", Mensaje de error: ", e)
        return null
    }
}

export const postSMT_auth = async(api, ruta, cuerpo) => {
    try {
        const token = getToken()
        console.log("TOKEN: ",token)
        console.log("ENVIANDO:", cuerpo)
        const res  = await fetch(`${API}/${api}/v1/${ruta}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
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

export const putSMT_auth = async(api, ruta, cuerpo, id) => {
    try {
        const token = getToken()
        console.log("TOKEN: ",token)
        console.log(cuerpo)
        const res  = await fetch(`${API}/${api}/v1/${ruta}/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
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
export const deleteSMT_auth = async(api, ruta, id) => {
    try {
        const token = getToken()
        console.log("TOKEN: ",token)
        const res = await fetch(`${API}/${api}/v1/${ruta}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        if(!res.ok) throw new Error("Error al ejecutar: ", ruta)
        const data = await res.text()
        return data
    } catch(e) {
        console.error("Error al ejecutar: ", ruta)
        return "No se pudo eliminar ", id, ", Mensaje de error: ", e
    }
}

export const searchMotor = async(id_m, id_r) => {
    try {
        const token = getToken()
        console.log("TOKEN: ",token)
        const res = await fetch(`${API}/motor/v1/procesar/${id_m}/${id_r}`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        if(!res.ok) throw new Error("ERROR al ejecutar: SearchMotor")
        const data =  await res.text()
        return data
    } catch(e) {
        console.error("Error al ejectar: SearchMotor, Mensaje de error: ", e)
        return "No se pudo ejecutar el proceco correctamente"
    }
}
export const resultMotor = async(id_r) => {
    try {
        const token = getToken()
        console.log("TOKEN: ",token)
        const res = await fetch(`${API}/motor/v1/resultado/${id_r}`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        if(!res.ok) throw new Error("ERROR al ejecutar: resultMotor")
        const data =  await res.json()
        return data
    } catch(e) {
        console.error("Error al ejectar: resultMotor, Mensaje de error: ", e)
        return []
    }
}

//_PRIVADOS_______________________________________________________________________________________________________________

