describe("Tela principal", ()=>{
    before(function(){
        cy.visit('/')

        //Excluindo usúario
        cy.limpa_BD()
    })

    beforeEach(function(){
        cy.visit('/')
    })

    var numero_conta_checking

    it("Criação de uma conta", () =>{
        cy.cadastro_usuario()

        //confirma se o cadastro foi realizado com sucesso
        cy.get('#rightPanel h1').should('have.text', `Welcome `+Cypress.env('usuario'))

        //clica no menu de abrir uma nova conta
        cy.get('#leftPanel ul li').contains('Open New Account').click()

        //verifica se abriu a página de abrir uma nova conta
        cy.get('#rightPanel h1').should('contain', 'Open New Account')
        
        cy.get('form.ng-pristine').submit()

        function preventFormSubmitDefault(selector) {
            cy.get(selector).then(form$ => {
                form$.on("submit", e => {
                    e.preventDefault();
                });
            });
        }

        preventFormSubmitDefault("form");
        cy.get('input[value="Open New Account"]').click()

        cy.get('#newAccountId').then(($numero_conta) => {
            numero_conta_checking = $numero_conta.text()
        })

        //clica no menu de abrir uma nova conta
        //cy.get('#leftPanel ul li').contains('Open New Account').click()
        //cy.get('.ng-scope hi').contains('Account Opened!').should('be.visible')
        cy.get('#leftPanel ul li').contains('Accounts Overview').click()

        
        // criar conta pupança
        // salvar conta criada em uma variável

        //criar conta corrente
        // salvar conta criada em uma variável

        //criar uma transação entre as contas criadas

        //pesquisar uma transação 
    })
})