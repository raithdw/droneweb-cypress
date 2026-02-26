import './commands'

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("/");
});