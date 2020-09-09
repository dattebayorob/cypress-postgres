import '../../../../../../cypress.json'

context('Teste conexão DB', () => {
    before(() => {
      cy.task('query', 'select * from table;');
    })
    it('Deve executar', () => {
        expect(true, 'Rodou');
    })

})
