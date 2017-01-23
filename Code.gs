function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function processForm(formObj){
  return testCaptcha(formObj["g-recaptcha-response"])
}

function testCaptcha(response){
  var url  = 'https://www.google.com/recaptcha/api/siteverify'; 
  
  var captcha_payload = {
    'secret': PropertiesService.getScriptProperties().getProperty('captcha_secret'),
    'response': response
  };
  var params = { 
    'method' : 'POST',
    'payload' : captcha_payload
  }
  var results = UrlFetchApp.fetch(url, params);
  
  //isSuccess = JSON.parse(results.getContentText()).success
  //isSuccess = true if user check passed
  //            false is user check failed 
  
  return results.getContentText();
}
