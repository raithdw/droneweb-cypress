## 🚀 Droneweb Cypress Automation

End-to-end automation framework for Droneweb using Cypress 15 + TypeScript, designed with scalability, maintainability, and CI/CD readiness in mind.

## 🛠 Tech Stack

- Cypress 15

- TypeScript (strict mode enabled)

- Page Object Model (POM)

- Data-driven testing

- Mochawesome reporting

- GitHub Actions CI

## GitHub Pages Report

After CI/CD pipeline runs, the latest Mochawesome HTML report is published automatically to GitHub Pages.

URL:

#### https://raithdw.github.io/droneweb-cypress/report.html

##### Note: The report is updated automatically on every push to the main branch.

### Directory Structure
    cypress/
    ├─ e2e/               # Test files (language.cy.ts, search.cy.ts)
    ├─ fixtures/          # Test data (testdata.json)
    ├─ pages/             # Page Objects (MapPage.ts)
    ├─ reports/
    │  ├─ json/           # Mochawesome JSON outputs (ignored in git)
    │  └─ html/           # Mochawesome HTML reports (ignored locally)
    └─ support/           # Types, utilities, data-driven helpers

- Continuous Integration (CI)

- GitHub Actions runs tests on every push and pull request to main

- Mochawesome HTML reports are merged and deployed automatically to GitHub Pages

- Screenshots and videos of failed tests are captured

#### Notes

- Local .gitignore ensures JSON/HTML reports, node_modules, and OS/IDE files are ignored

- JSON schema-based typing provides strong type safety for test data

## Design Principles

✅ Separation of concerns (UI logic encapsulated in Page Objects)

✅ Data-driven testing via generateTests

✅ Strong typing with TypeScript

✅ JSON schema validation for test data integrity

✅ API + UI validation for critical flows

✅ CI-ready with GitHub Actions

## 🧪 Test Coverage
1️⃣ Language Selection

Validates:

- Language change via UI

- Network request interception

- API response validation (languages_list field)

- UI placeholder update verification

- ✔ UI + API validation combined
- ✔ Deterministic synchronization via cy.intercept

2️⃣ Location Search
- Positive Scenarios

- Search location

- Select suggestion

- Validate selected location name

- Validate coordinates

- Negative Scenarios

- Invalid city search

- Proper “No results found” validation

## 🔎 Validation Strategy
- UI Validation

- Uses Cypress automatic retry mechanism

- No hard waits (cy.wait(2000) avoided)

- API Validation

- Network interception via cy.intercept

- Status code verification

- Strong field validation (languages_list[key] === value)

## 📊 Reporting

    Uses Mochawesome:

- JSON reports

- HTML report generation

- Screenshots on failure

- Retry tracking

- Reports generated under:

- cypress/reports/

## ⚙️ How to Run
#### Install dependencies
- npm install
#### Open Cypress UI (interactive mode)
- npm run cypress:open
#### Run tests headlessly
- npm run cypress:run
#### Run tests, Generate HTML report and open in browser
- npm run cypress:report
#### Run tests in Headed mode for Chrome
- npm run cypress:headed

## 🔄 CI Integration

GitHub Actions workflow runs tests on:

- Push
- Pull Request

- Node version: 22
- OS: Ubuntu latest

## 🧠 Key Technical Decisions

- Avoided async/await (Cypress command queue model)

- Avoided arbitrary waits

- Encapsulated selectors as private

- Fully typed test data via typeof testData

- Generic reusable generateTests utility

- Centralized test setup in support/e2e.ts

## 📈 Scalability

- Framework supports easy extension:

- Add new languages → update JSON only

- Add new locations → update JSON only

- Add new features → new Page Object + data set

## 👨‍💻 Author - Mihai Constantin

Automation framework built with scalability and maintainability aligned to Engineering standards.

## ⭐ Final Notes

This framework demonstrates:

- Clean architecture

- Strong typing

- Data integrity validation

- API + UI synchronization

- CI/CD readiness

- Maintainable test structure