describe("Sobre nós", ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    it("Verifica página Sobre Nós", () => {    
        //Clica no menu Sobre Nós
        cy.get('#headerPanel ul li a').contains("About Us").click()

        //Verifica se página Sobre Nós foi carregada
        cy.get('#rightPanel h1').contains("ParaSoft Demo Website").should('be.visible')
    })
})