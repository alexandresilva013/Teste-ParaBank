describe("Tela principal", ()=>{
    before(function(){
        cy.visit('/')

        //Excluindo usúario
        cy.limpa_BD()
    })

    beforeEach(function(){
        cy.visit('/')

        //Clica no link de registrar nova conta
        cy.get('#loginPanel a').last().click()

        //verifica se está na página de registro
        cy.get('#rightPanel').should('contain', 'Signing up is easy!')
    })

    it("Cadastro com sucesso", () =>{
        cy.preenche_campos_cadastro()

        cy.get('input[type="submit"][value="Register"]').click()

        cy.get('#rightPanel h1').should('have.text', `Welcome `+Cypress.env('usuario'))  
    })

    it("Cadastro com usuário existente", () =>{
        cy.preenche_campos_cadastro()

        cy.get('input[type="submit"][value="Register"]').click()

        //verifica se aparece mensagem de usuário já existente
        cy.get('.form2 tr span').contains('This username already exists.') .should('be.visible') 
    })

    it("Verificar campos obrigatórios", () =>{
        cy.get('input[type="submit"][value="Register"]').click()

        //verificando campos obrigatórios
        cy.get('span').contains('First name is required.').should('be.visible')
        cy.get('span').contains('Last name is required.').should('be.visible')
        cy.get('span').contains('Address is required.').should('be.visible')
        cy.get('span').contains('City is required.').should('be.visible')
        cy.get('span').contains('State is required.').should('be.visible')
        cy.get('span').contains('Zip Code is required.').should('be.visible')
        cy.get('span').contains('Social Security Number is required.').should('be.visible')   
        cy.get('span').contains('Username is required.').should('be.visible')  
        cy.get('span').contains('Password is required.').should('be.visible')  
        cy.get('span').contains('Password confirmation is required.').should('be.visible')  
    })
})