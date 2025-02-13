describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="start-button"]')
        .should("exist")
        .click()
    cy.get('.answer-btn')
        .should('have.length', 4)
        .each(($btn) => {
          cy.wrap($btn).should('have.css', 'width', '400px');
        });
  })
})