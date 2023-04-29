/// <reference types="cypress" />
describe('Checking Card component...', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the modal when Read More link is clicked', () => {
    cy.get('.card')
      .first()
      .should('be.visible')
      .within(() => {
        cy.get('a').should('have.text', 'Read More').click();
      });
  });
});
