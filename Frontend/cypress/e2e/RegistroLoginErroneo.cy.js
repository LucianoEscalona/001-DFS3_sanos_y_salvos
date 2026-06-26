describe("Demostrar camino alternativo en el LOGIN", ()=>{
    it("La simulacion debe intentar registrar un usuario, pero le toma varios intentos al ingresar datos invalidos, pasa lo mismo con el login. Si se intenta repetir la prueba, el usuario no se creara, debido a que el rut y el correo ya estan registrados", () => {
        
        //En la pagina de inicio
        cy.visit("http://localhost:5173")
        cy.contains("Iniciar sesion").click()

        //En el login
        cy.contains("crea una aqui").click()

        //En el registro, intenta crear una cuenta, pero falla multiple veces
        cy.get("#dv_correo").type("mi correo")
        cy.get("#dv_contrasenia").type("mi contrasena")
        cy.get("#dv_nombre").type("pa")
        cy.get("#dv_apellido_p").type("lu")
        cy.get("#dv_apellido_m").type("ro")
        cy.get("#dv_rut").type("50500500-5")
        cy.get("#dv_telefono").type("0")
        cy.contains("Registrarme").click()
        cy.wait(1000)
        cy.get("#dv_rut").clear()
        cy.get("#dv_rut").type("22340714-5")
        cy.contains("Registrarme").click()
        cy.wait(1000)
        cy.get("#dv_correo").clear()
        cy.get("#dv_correo").type("micorreo@gmail.com")
        cy.contains("Registrarme").click()
        cy.wait(1000)
        cy.get("#dv_contrasenia").clear()
        cy.get("#dv_contrasenia").type("pasCODE800")
        cy.contains("Registrarme").click()
        cy.wait(1000)
        cy.get("#dv_nombre").clear()
        cy.get("#dv_apellido_p").clear()
        cy.get("#dv_apellido_m").clear()
        cy.get("#dv_telefono").clear()
        cy.get("#dv_nombre").type("TEST ERROR N")
        cy.get("#dv_apellido_p").type("TEST ERROR AP")
        cy.get("#dv_apellido_m").type("TEST ERROR AM")
        cy.get("#dv_telefono").type("56950005000")
        cy.contains("Registrarme").click()
        cy.wait(1000)

        cy.visit("http://localhost:5173/login")
        cy.get("#dv_l_correo").type("otro_correo")
        cy.get("#dv_l_contrasenia").type("otra_contraseña")
        cy.get("#dv_btn_is").click()
    })
})