Cypress.Commands.add('preenche_campos_cadastro', function(randomUsuario){
    cy.get('input[name="customer.firstName"]').type('Alexandre')
    cy.get('input[name="customer.lastName"]').type('Silva')
    cy.get('input[name="customer.address.street"]').type('Rua Exemplo')
    cy.get('input[name="customer.address.city"]').type('Cidade Exemplo')
    cy.get('input[name="customer.address.state"]').type('Estado Exemplo')
    cy.get('input[name="customer.address.zipCode"]').type('000000')

    cy.get('input[name="customer.ssn"]').type('11111111')

    cy.get('input[name="customer.username"]').type(randomUsuario)
    cy.get('input[name="customer.password"]').type('senha_teste')
    cy.get('input[name="repeatedPassword"]').type('senha_teste')
})