describe("Página de Administração", ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    it("Verifica página de administração", () => {    
        //Clica no menu Sobre Nós
        cy.get('#headerPanel ul li a').contains("Admin Page").click()

        //Verifica se página Sobre Nós foi carregada
        cy.get('#rightPanel h1').contains("Administration").should('be.visible')
    })
})