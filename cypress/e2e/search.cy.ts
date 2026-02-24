import { MapPage } from "../pages/mapPage";
import testData from "../fixtures/testdata.json";
import { TestData } from "../support/types";
import { generateTests } from "../support/dataDriven";

describe("Location Search - Requirement Validation", () => {
  const mapPage = new MapPage();
  const data: TestData = testData;

  // Positive locations
  generateTests(
    "should search, select and verify displayed location",
    data.searchLocations,
    (_, locationData) => {
      const { search, suggestion, expectedName, expectedCoordinates } = locationData;

      mapPage.searchAndSelectLocation(search, suggestion);

      mapPage.getSelectedLocationContainer()
        .should("contain.text", suggestion);

      mapPage.getChosenLocationName()
        .should("be.visible")
        .and("contain.text", expectedName);

      mapPage.getChosenLocationCoordinates()
        .should("be.visible")
        .and("contain.text", expectedCoordinates);
    }
  );

  // Negative locations
  if (data.invalidLocations) {
    generateTests(
      "should handle invalid city search in",
      data.invalidLocations,
      (_, invalidData) => {
        const { search, expectedMessage } = invalidData;

        mapPage.typeLocation(search);

        mapPage.getNoResultsLabel()
          .should("be.visible")
          .and("contain.text", expectedMessage);
      }
    );
  }
});