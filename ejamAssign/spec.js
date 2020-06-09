var landingPage = require("./Locators/LandingPage.js");
var payment = require("./Locators/PaymentPage.js");
var paymentData = require("./Testdata/data.js")

describe('Order Placement ', function() {
  var originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000000;
});

    it('Checkout Flow', function() {
      browser.waitForAngularEnabled(false);
      browser.driver.manage().window().maximize();
      browser.get('https://checkout.getaclearrear.com/rear214uptest/klav/checkout?comments=true&faq=true&proof=top&sticky=true&language=us');
       
      //browser.actions().mouseMove(lp.orderPage).perform().click();
     browser.executeScript('window.scrollTo(0,700);').then(function () {
      browser.sleep(2500);
       landingPage.orderPage.click();
       payment.cardPayment.click(); 
       payment.customerFirstName.sendKeys(paymentData.paymentDetails.FirstName);
       payment.customerLastName.sendKeys(paymentData.paymentDetails.LastName);
       payment.customerEmailId.sendKeys(paymentData.paymentDetails.EmailId);
       payment.customerPhoneNo.sendKeys(paymentData.paymentDetails.PhoneNo);

       browser.sleep(2500);
   })
   browser.executeScript('window.scrollTo(0,1500);').then(function () {

    browser.sleep(2500);
    payment.customerStreetAddress.sendKeys(paymentData.paymentDetails.streetAddress);
    payment.customerApartmentName.sendKeys(paymentData.paymentDetails.apartment);
    payment.customerCity.sendKeys(paymentData.paymentDetails.city);
    browser.sleep(2500);
    var select = payment.customerCountry;
    select.$('[value="US"]').click();
    browser.sleep(2500);

    var select = payment.customerState;
    select.$('[value="AE"]').click();
    browser.sleep(2500);

    payment.customerPostalCode.sendKeys(paymentData.paymentDetails.postalCode);
    payment.customerCardNumber.sendKeys(paymentData.paymentDetails.cardNumber);
    payment.customerCardSecurityCode.sendKeys(paymentData.paymentDetails.cardSecurityCode);

    var select = payment.customerCardMonth;
    select.$('[value="06"]').click();
    browser.sleep(2500);

    var select = payment.customerCardYear;
    select.$('[value="2025"]').click();
    browser.sleep(2500);
    })

    browser.executeScript('window.scrollTo(0,2500);').then(function () {
        
      browser.sleep(2500);
     
    
      
    })
    
     
    payment.submitButton.click().then(function() {

       browser.driver.sleep(20000);
        var a = element(by.xpath("//div//span//p[contains(text(),'Thank')]"));
        console.log(a.getText());
       

    })
    


      //expect(browser.getTitle()).toEqual('Super Calculator');
      
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  });

