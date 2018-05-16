module.exports = {
	'Rent a bike' : function (browser) {
	  browser
		.url('http://localhost:8080')
		.waitForElementVisible('body', 1000)
		.waitForElementVisible('input[name=lmail]')
		.setValue('input[name=lmail]', 'samya@mail.com')
		.click('input[name=submit]')
		.waitForElementVisible('#stations')
		.click('.station:nth-of-type(1) a[data-color="#9400D3"]')
		.end()
	}
  }