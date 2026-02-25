export class MapPage {
  private readonly selectors = {
    languageDropdownIndicator: '[data-test="language-select.indicator"]',
    languageOption: 'div[role="option"]',

    searchInput: '[data-test="locationSearch.input"]',
    searchContainer: '[data-test="locationSearch"]',

    chosenLocationName: '[data-test="chosen.location"]',
    chosenLocationCoordinates: '[data-test="chosen.coordinates"]',

    suggestionsMenu: ".rs-select__menu",
    suggestionOption: ".rs-select__option",
    placeholder: ".rs-select__placeholder"
  };

  visit(): void {
    cy.visit("/");
  }

  openLanguageDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.languageDropdownIndicator)
      .should("be.visible")
      .click();
  }

  selectLanguage(language: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.languageOption)
      .contains(language)
      .should("be.visible")
      .click();
  }

  getSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.searchInput);
  }

  getSelectedLocationContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.searchContainer);
  }

  getChosenLocationName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.chosenLocationName);
  }

  getChosenLocationCoordinates(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.chosenLocationCoordinates);
  }

  getSuggestionsMenu(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.suggestionsMenu).should("be.visible");
  }

  getNoResultsLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getSuggestionsMenu();
  }

  getSearchPlaceholder(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.searchContainer)
      .find(this.selectors.placeholder)
      .should("exist");
  }

  typeLocation(location: string): Cypress.Chainable<JQuery<HTMLElement>> {
  return this.getSearchInput()
    .should("be.visible")
    .clear()
    .type(location);
}

  searchAndSelectLocation(searchText: string,fullSuggestion: string): Cypress.Chainable<JQuery<HTMLElement>> {
    this.typeLocation(searchText);
    return this.getSuggestionsMenu()
      .contains(this.selectors.suggestionOption, fullSuggestion, { matchCase: false })
      .should("be.visible")
      .click();
  }
}