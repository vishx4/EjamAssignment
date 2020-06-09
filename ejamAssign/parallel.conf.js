exports.config = {
    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['spec.js'],
    'commonCapabilities': {
      'browserstack.user': 'vishalawasthi2',
      'browserstack.key': 'QakuyLxt8NaPCBfWXc19',
      'name': 'Ejam Order Payment Flow'
    },
  
    'multiCapabilities': [{
      'browserName': 'Chrome'
    },{
      'browserName': 'Safari'
    },{
      'browserName': 'Firefox'
    },{
      'browserName': 'IE'
    }]
  };
  
  // Code to support common capabilities
  exports.config.multiCapabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });