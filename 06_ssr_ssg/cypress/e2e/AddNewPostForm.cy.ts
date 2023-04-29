/// <reference types="cypress" />
describe('Checking AddNewPostForm page...', () => {
  beforeEach(() => {
    cy.visit('/new');
  });

  it('should show validation errors for invalid data', () => {
    cy.get('input[type="submit"]').click();
    cy.get('p.errmsg').contains('The field "Author" should be filled!');
  });

  it('should submit the form with valid data', () => {
    cy.get('input[data-id="author"]').type('John Doe');
    cy.get('input[data-id="title"]').type('My first article');
    cy.get('textarea[data-id="post"]').type('This is the content of my first article.');
    cy.get('input[data-id="post_date"]').type('2022-05-01');
    cy.get('select[data-id="select"]').select('Facebook');
    cy.get('input[data-id="check"]').check();
    cy.get('input[data-id="img_file"]').selectFile('not_available.jpg');
    cy.get('input[type="submit"]').click();
    cy.get('.form-submit-post').contains('Card has been saved!');
  });
});
