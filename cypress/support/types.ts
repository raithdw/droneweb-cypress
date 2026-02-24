import testData from "../fixtures/testdata.json";

export type TestData = typeof testData;

export type LanguageKey = keyof TestData["languages"];
export type LanguageValue = TestData["languages"][LanguageKey];

export type SearchLocationKey = keyof TestData["searchLocations"];
export type SearchLocationValue = TestData["searchLocations"][SearchLocationKey];

export type InvalidLocationKey = keyof NonNullable<TestData["invalidLocations"]>;
export type InvalidLocationValue = NonNullable<TestData["invalidLocations"]>[InvalidLocationKey];

declare global {
  namespace Cypress {
    interface Chainable {
      getTestData(): Chainable<TestData>;
      selectLanguage(language: LanguageValue): Chainable<void>;
    }
  }
}