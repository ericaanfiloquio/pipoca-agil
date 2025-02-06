describe('Pipoca Ágil', () => {
  it('Login Pipoca Success', () => {
    cy.visit('https://magical-licorice-a74288.netlify.app/#/home')
    cy.get('.login-text').click()
    cy.get("[name='email']").type('ericaanfiloquio@gmail.com')
    cy.get("[name='password']").type('pipocarosaqa25')
    cy.get("[type='submit']").click()
    cy.get('app-user-data-view').contains('Dados')
  })

  it('Login Pipoca Fail', () => {
    cy.visit('https://magical-licorice-a74288.netlify.app/#/home')
    cy.get('.login-text').click()
    cy.get("[name='email']").type('ericanfiloquio@gmail.com')
    cy.get("[name='password']").type('pipocarosaqa25')
    cy.get("[type='submit']").click()
    cy.get('#mat-mdc-error-0')
  })
})