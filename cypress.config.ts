import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/json",
    overwrite: false,  
    html: false,                        
    json: true,               
    charts: true,                  
    embeddedScreenshots: true,      
    saveAllAttempts: true,
    screenshotOnRunFailure: true,    
    testIsolation: true      
  },
  e2e: {
    baseUrl: "https://map.uniflydemo47-iat.unifly.tech",
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});