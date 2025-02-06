describe('Pipoca Ágil', () => {
    it('Trilhas de Conhecimento', () => {
      cy.visit('https://magical-licorice-a74288.netlify.app/#/home')
      cy.get('[routerlink="/knowledge-trail-info"]').click()
      cy.get('#arrow-img').click()
      cy.get("[href='#/login']").click()
      cy.get("[name='email']").type('ericaanfiloquio@gmail.com')
      cy.get("[name='password']").type('pipocarosaqa25')
      cy.get("[type='submit']").click()
      cy.get('app-user-data-view').contains('Dados')

    })
})