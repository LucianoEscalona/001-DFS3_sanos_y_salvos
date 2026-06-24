describe("Simulacion de registrar una MASCOTA", () => {
    it("La simulacion debe registrar una mascota en el sistema tras haber iniciado sesion", () => {

        cy.login("cymail@gmail.com","cypassword")

        cy.visit("http://localhost:5173/")
        cy.get("#dv_btn_h_mascotas").click()
        cy.url().should("eq","http://localhost:5173/mascotas")
        cy.get("#dv_btn_mm_imascota").click()

        cy.get("#dv_sel_tipo").select("mascota")
        cy.get("#dv_sel_estado").select("con_duenio")

        cy.get("#dv_nombre").type("Buucky")
        cy.get("#dv_sel_animal").select("perro")

        cy.get("#dv_sel_raza_1").select("pastor_aleman")
        cy.get("#dv_cb_razaseg").check()
        cy.get("#dv_sel_raza_2").select("mestizo")
        
        cy.get("#dv_sel_genero").select("macho")
        cy.get("#dv_cb_genseg").check()

        cy.get("#dv_edad").type("10 años")
        cy.get("#dv_cb_edseg").check()

        cy.get("#dv_cb_collar").check()
        cy.get("#dv_sel_c_collar_1").select("rojo")
        cy.get("#dv_sel_c_collar_2").select("negro")
        cy.get("#dv_sel_m_collar").select("cuero")
        cy.get("#dv_c_desc").type("Tiene un emblema con su nombre")

        cy.get("#dv_cb_chip").check()
        cy.get("#dv_sel_u_chip").select("espalda_alta")

        cy.get("#dv_sel_ojo_i").select("verde")
        cy.get("#dv_sel_ojo_d").select("verde")
        cy.get("#dv_sel_l_pelaje").select("medio")
        cy.get("#dv_ap_des").type("Tiene un corte el la cara por la izquierda")

        cy.get("#dv_co_esp").type("Es asustadizo")

        cy.get("#dv_residencia").type("San vicente, Pirque")
        cy.get("#dv_cb_mosubi").check()

        cy.get("#dv_btn_reg").click()

        cy.reload()
        cy.contains("Ver detalles").click()
        cy.contains("Retirar del sistema").click()
        cy.visit("http://localhost:5173/mascotas")
        cy.url().should("eq","http://localhost:5173/mascotas")
    })
})