Cypress.Commands.add('preenche_campos_cadastro', function(){
    cy.get('input[name="customer.firstName"]').type('Alexandre')
    cy.get('input[name="customer.lastName"]').type('Silva')
    cy.get('input[name="customer.address.street"]').type('Rua Exemplo')
    cy.get('input[name="customer.address.city"]').type('Cidade Exemplo')
    cy.get('input[name="customer.address.state"]').type('Estado Exemplo')
    cy.get('input[name="customer.address.zipCode"]').type('000000')

    cy.get('input[name="customer.ssn"]').type('11111111')

    cy.get('input[name="customer.username"]').type(Cypress.env('usuario'))
    cy.get('input[name="customer.password"]').type(Cypress.env('senha'))
    cy.get('input[name="repeatedPassword"]').type(Cypress.env('senha'))
})

Cypress.Commands.add('cadastro_usuario', function(){
    cy.get('#loginPanel a').last().click()
    cy.get('#rightPanel').should('contain', 'Signing up is easy!')
    
    //verifica se está na página de registro
    cy.get('#rightPanel h1').should('have.text', 'Signing up is easy!')

    cy.preenche_campos_cadastro()

    cy.get('input[type="submit"][value="Register"]').click()  
})


Cypress.Commands.add('limpa_BD', function(){
    //Excluindo usúario
    //Procedimento utilizado para dar independência ao teste 
    //Assim ele pode rodar quantas vezes forem necessárias
    cy.get('.leftmenu li a').contains('Admin Page').click()
    cy.get('button[value="INIT"]').click()
    cy.get('#rightPanel p').contains('Database Initialized').should('be.visible')
})