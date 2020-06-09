var browserstack = require('browserstack-local');

exports.config = {
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
  specs: ['spec.js'],
  
  'capabilities': {
    'browserstack.user': 'vishalawasthi2',
    'browserstack.key': 'QakuyLxt8NaPCBfWXc19',
    'browserstack.networkLog' : 'true',
    'browserName': 'chrome',
    'name': 'Order Payment Flow'
  },

  // Code to start browserstack local before start of test
  beforeLaunch: function(){

    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  }
};