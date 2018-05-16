module.exports = {
	'Test title SkyBikes' : function (browser) {
	  browser
		.url('http://localhost:8080')
		.waitForElementVisible('body', 1000)
		.assert.title('Sky Bikes', 'The <title> is correct')
		.end()
	},
	'Login user for sysadmin' : function (browser) {
	  	browser
		.url('http://localhost:8080')
		.waitForElementVisible('input[name=lmail]')
		.setValue('input[name=lmail]', 'kdog@mail.com')
		.click('input[name=submit]')
		.waitForElementVisible('#sysAdmin')
		.end()
	},
	'Login user for citizen worker' : function (browser) {
	  browser
	  .url('http://localhost:8080')
	  .waitForElementVisible('input[name=lmail]')
	  .setValue('input[name=lmail]', 'samya@mail.com')
	  .click('input[name=submit]')
	  .waitForElementVisible('#cityWorker')
	  .end()
	}
  }