describe("Simulacion del LOGIN", () => {
    it("La simulacion debe registrar un usuario y despues hacer un login exitoso en el sistema", () => {
        
        //En la pagina de inicio
        cy.visit("http://localhost:5173")
        cy.contains("Iniciar sesion").click()

        //En el login
        cy.contains("crea una aqui").click()

        //En el registro, se crea una cuenta
        cy.get("#dv_correo").type("cymail@gmail.com")
        cy.get("#dv_contrasenia").type("cypassword")
        cy.get("#dv_nombre").type("TEST_N")
        cy.get("#dv_apellido_p").type("TEST_AP")
        cy.get("#dv_apellido_m").type("TEST_AM")
        cy.get("#dv_rut").type("TEST_R")
        cy.get("#dv_telefono").type("TEST_T")
        cy.contains("Registrarme").click()

        //En el login, iniciando sesion
        cy.login("cymail@gmail.com","cypassword")
        

        //Verificamos que el token se haya creado
        cy.window().then((win)=>{
            const sesion = win.localStorage.getItem("sesion")
            cy.log(sesion)
        })
        
    })
})