module.exports = {
	'Logout' : function (browser) {
	  browser
		.url('http://localhost:8080')
		.waitForElementVisible('body', 1000)
		.waitForElementVisible('input[name=lmail]')
		.setValue('input[name=lmail]', 'kdog@mail.com')
		.click('input[name=submit]')
		.waitForElementVisible('input[name=submit]')
		.click('input[name=submit]')
		.waitForElementVisible('input[name=lmail]')
		.end()
	}
  }