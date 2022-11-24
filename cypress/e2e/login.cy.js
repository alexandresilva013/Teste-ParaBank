describe("Tela principal", ()=>{
    beforeEach(function(){
        cy.visit('/')
    })

    before(function(){
        cy.visit('/')

        //Excluindo usúario
        cy.limpa_BD()
    })

    it("Login sem usuário e senha", () =>{
        cy.get('form[name="login"]').submit()
        cy.get('#rightPanel p').contains('Please enter a username and password.').should('be.visible')
    })

    it("Login sem usuário", () =>{
        cy.get('input[name="password"]').type(Cypress.env('senha'))
        cy.get('form[name="login"]').submit()
        cy.get('#rightPanel p').contains('Please enter a username and password.').should('be.visible')
    })

    it("Login sem senha", () =>{
        cy.get('input[name="username"]').type(Cypress.env('usuario'))
        cy.get('form[name="login"]').submit()
        cy.get('#rightPanel p').contains('Please enter a username and password.').should('be.visible')
    })

    //Teste não feito, já que é possível logar na aplicação mesmo sem cadastro realizado
    it.skip("Login com dados incorretos", () =>{

    })

    it("Login com sucesso", () =>{
        cy.cadastro_usuario()
        
        //confirma o cadastro com sucesso e faz o Lou out
        cy.get('#rightPanel h1').should('have.text', `Welcome `+Cypress.env('usuario'))
        cy.get('a').contains('Log Out').click()  

        cy.get('input[name="username"]').type(Cypress.env('usuario'))
        cy.get('input[name="password"]').type(Cypress.env('senha'))
        cy.get('form[name="login"]').submit()
    })
})