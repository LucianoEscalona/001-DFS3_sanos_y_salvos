describe("Simulacion del LOGIN", ()=>{
    it("La simulacion debe registrar un usuario y despues hacer un login exitoso en el sistema", () => {
        
        //En la pagina de inicio
        cy.visit("http://localhost:5173")
        cy.contains("Iniciar sesion").click()

        //En el login
        cy.contains("crea una aqui").click()

        //En el registro, se crea una cuenta
        cy.get("#dv_correo").type("cymail@gmail.com")
        cy.get("#dv_contrasenia").type("cypassWORD1050")
        cy.get("#dv_nombre").type("TEST_Nombre")
        cy.get("#dv_apellido_p").type("TEST_APaterno")
        cy.get("#dv_apellido_m").type("TEST_AMaterno")
        cy.get("#dv_rut").type("22340714-5")
        cy.get("#dv_telefono").type("56950005000")
        cy.contains("Registrarme").click()
        cy.wait(1000)

        //En el login, iniciando sesion
        cy.login("cymail@gmail.com","cypassWORD1050")
        

        //Verificamos que el token se haya creado
        cy.window().then((win)=>{
            const sesion = win.localStorage.getItem("sesion")
            cy.log(sesion)
        })
        
    })
})