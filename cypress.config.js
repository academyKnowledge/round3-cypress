const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com/",
    // viewportWidth: 550,
    // viewportHeight : 550,
    // watchForFileChanges : true
    screenshotOnRunFailure:false,
    screenshotsFolder:"MyScreenShotsFolder",
    trashAssetsBeforeRuns:true,
    video:false,
    videosFolder:"myVideo",
    videoCompression :0 , 
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }

  },
});
