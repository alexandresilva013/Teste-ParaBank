describe("Tela principal", ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    it("Login com sucesso", () =>{
        cy.get('#loginPanel a').last().click()

        //verifica se está na página de registro
        cy.get('#rightPanel h1').should('have.text', 'Signing up is easy!')

        //gera um nome de usuário aleatório
        const faker = require('faker-br');
        var randomUsuario = faker.br.cpf();

        cy.preenche_campos_cadastro(randomUsuario)

        cy.get('input[type="submit"][value="Register"]').click()

        cy.get('#rightPanel h1').should('have.text', `Welcome `+randomUsuario)
    })

    it.only("Verificar campos obrigatórios", () =>{
        cy.get('#loginPanel a').last().click()

        //verifica se está na página de registro
        cy.get('#rightPanel h1').should('have.text', 'Signing up is easy!')

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