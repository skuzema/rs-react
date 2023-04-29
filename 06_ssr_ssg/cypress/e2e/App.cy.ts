/// <reference types="cypress" />
describe('Checking App...', () => {
  it('renders the correct pages for different routes', () => {
    cy.visit('/');

    cy.get('h2').should('have.text', 'PewNews');

    cy.visit('/about');

    cy.get('.header h2').should('have.text', 'About Us');

    cy.visit('/new');

    cy.get('h2').should('have.text', 'New Post');

    cy.visit('/non-existent-route');

    cy.get('h2').should('have.text', 'We are sorry, Page not found!');
  });
});
