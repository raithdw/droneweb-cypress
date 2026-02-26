Cypress.Commands.add('selectLanguage', (language: string) => {
  cy.get('[data-test="language-select.indicator"]')
    .should('be.visible')
    .click();

  cy.get('div[role="option"]')
    .contains(language)
    .should('be.visible')
    .click();
});