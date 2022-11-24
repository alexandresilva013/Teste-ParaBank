describe("Sobre nós", ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    it("Verifica página Serviços", () => {    
        //Clica no menu Serviços
        cy.get('#headerPanel ul li a').contains("Services").click()

        //Verifica se página Serviços foi carregada
        cy.get('#rightPanel .heading').contains("Available Bookstore SOAP services:").should('be.visible')
    })
})