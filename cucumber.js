describe('Google Search for cucumberjs With Protractor', function() {
  it('Scenario for cucumberjs', function() {
    browser.get('https://google.com');
	browser.sleep(5000); 
	//***********************Search for cucumberjs ******************************
	console.log("Search for cucumberjs");
	element(by.id('lst-ib')).sendKeys("cucumberjs");
	element(by.name('btnK')).click();
	browser.sleep(5000); 
	element(by.xpath('//a[contains(@href,"cucumber-js")]')).click();
	browser.sleep(5000); 
	//***********************validation 
	return browser.getCurrentUrl().then(function readCurrentUrl(url)
	{
			console.log("Current URL is :" + url);
            if( url = 'https://github.com/cucumber/cucumber-js')
			{
				console.log("User directed correct url : cucumberjs");
			}
			else
			{
				console.log("User directed to wrong page");
			}	
     });
	   
  });
});
