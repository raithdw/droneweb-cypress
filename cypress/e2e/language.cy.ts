import { MapPage } from "../pages/mapPage";
import testData from "../fixtures/testdata.json";
import { LanguageKey, LanguageValue, TestData } from "../support/types";
import { generateTests } from "../support/dataDriven";

describe("Language Selection - E2E + API validation", () => {
  const mapPage = new MapPage();
  const data: TestData = testData;

  generateTests(
    "should change language to",
    data.languages,
    (key: LanguageKey, languageName: LanguageValue) => {
      const placeholderText = data.placeholders[key];

      // Intercept the language request
      cy.intercept("GET", `**/locales/${key}/common.json*`).as("translationRequest");

      mapPage.openLanguageDropdown();
      mapPage.selectLanguage(languageName);

      cy.wait("@translationRequest").then((interception) => {
        expect(interception.response?.statusCode).to.eq(200);

        const responseBody = interception.response?.body;
        expect(responseBody).to.exist;

        // Check that the response contains the selected language text
        expect(responseBody.language_names).to.exist;
        expect(responseBody.language_names[key]).to.eq(languageName);
      });

      // Validate UI placeholder
      mapPage.getSearchPlaceholder()
        .should("be.visible")
        .and("contain.text", placeholderText);
    },
    (_key, value) => value // show language name in report
  );
});