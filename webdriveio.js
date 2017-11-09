describe('Google Search for webdriverio With Protractor', function() {
  it('Scenario for webdriverio', function() {
    browser.get('https://google.com');
	browser.sleep(5000); 
	//***********************Search for webdriverio ******************************
	console.log("Search for webdriverio");
	element(by.id('lst-ib')).sendKeys("webdriverio");
	element(by.name('btnK')).click();
	browser.sleep(5000); 
	element(by.xpath('//a[contains(@href,"webdriver.io")]')).click();
	browser.sleep(5000); 
	//***********************validation 
	return browser.getCurrentUrl().then(function readCurrentUrl(url)
	{
			console.log("Current URL is :" + url);
            if( url = 'http://webdriver.io/')
			{
				console.log("User directed correct url : webdriverio");
			}
			else
			{
				console.log("User directed to wrong page");
			}	
     });
	   
  });
});
