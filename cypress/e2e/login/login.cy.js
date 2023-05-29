describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should display default login page', () => {
    cy.get('img').should('have.attr', 'alt', "alomobilectg's profile picture")
  })
  it('Should display dropdown for selecting aloid', () => {
    cy.get('select').should('have.attr', 'name', 'aloid')
    cy.get('select').invoke('val').should('equal', 'alo-mobile')
  })
})
