describe("Tela principal", ()=>{
    it("Tela principal carregada com sucesso", () =>{
        cy.visit('/')

        cy.title().should('eq', 'ParaBank | Welcome | Online Banking')
    })
})