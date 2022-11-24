describe("Tela principal", ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    it("Campos obrigatórios do contato", () => {      
        //Acessar tela de contato
        cy.get('#headerPanel ul li a').contains("contact").click()

        //Submeter formulário
        cy.get('input[type="submit"][value="Send to Customer Care"]').click()

        //Verifica campos obrigatórios
        cy.get('.error').contains("Name is required.").should('be.visible')
        cy.get('.error').contains("Email is required.").should('be.visible')
        cy.get('.error').contains("Phone is required.").should('be.visible')
        cy.get('.error').contains("Message is required.").should('be.visible')
    })

    it("Contato realizado com sucesso", () => {
        //Preenche campos do formulário de contato
        cy.get('#headerPanel ul li a').contains("contact").click()
        cy.get('input[name="name"]').type("Nome Contato")
        cy.get('input[name="email"]').type("email_contato@gmail.com")
        cy.get('input[name="phone"]').type("37999981111")
        cy.get('#message').type("Mensagem de Contato")
        
        //Submeter formulário
        cy.get('input[type="submit"][value="Send to Customer Care"]').click()

        //Submeter formulário
        cy.get('#rightPanel').contains("Customer Care").should('be.visible')
    })
})