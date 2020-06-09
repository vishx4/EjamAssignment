var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    specs: ['spec.js'],

    onPrepare : function()
    {
      browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'tmp/screenshots'
     }).getJasmine2Reporter());
      
    }

  };

  