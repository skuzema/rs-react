/// <reference types="cypress" />
describe('Checking About Us page ...', () => {
  it('displays the correct header and image', () => {
    cy.visit('/about');

    cy.get('.header h2').should('have.text', 'About Us');

    cy.get('.box1 img').should('have.attr', 'src', 'https://i.imgur.com/Ur43esv.jpg');

    cy.get('[data-testid="about-us"]').should('have.text', 'William');
  });
});
