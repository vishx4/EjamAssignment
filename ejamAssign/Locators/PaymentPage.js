function paymentPage(){

    this.cardPayment = element(by.xpath("//div[@class='_1qio-4DPq6K3n-qINPkksB']"));
    this.customerFirstName = element(by.name("firstName"));
    this.customerLastName = element(by.name("lastName"));
    this.customerEmailId = element(by.name("emailAddress"));
    this.customerPhoneNo = element(by.name("phoneNumber"));
    this.customerStreetAddress = element(by.name("address"));
    this.customerApartmentName = element(by.name("address2"));
    this.customerCity = element(by.name("city"));   
    this.customerCountry = element(by.name("country"));
    this.customerState = element(by.name("state"));
    this.customerPostalCode = element(by.name("postalCode"));
    this.customerCardNumber = element(by.name("cardNumber"));
    this.customerCardMonth = element(by.name("cardMonth"));
    this.customerCardYear = element(by.name("cardYear"));
    this.customerCardSecurityCode = element(by.name("cardSecurityCode"));
    this.checkbox = element(by.xpath("//div[@class='checkbox checkbox-left']//*[text()='Midtrans Promo']"));
    this.PayNow = element(by.xpath("//a[@class='button-main-content']"));
    this.passwordOTP = element(by.id("PaRes"));
    this.submitButton = element(by.xpath("//button[@type='submit']"));
    this.succesfullOrder = element(by.xpath("//div[@class='X9C1UR7aKWoQ25ioe_o0t']"));
    
    

    };
    
    module.exports = new paymentPage();