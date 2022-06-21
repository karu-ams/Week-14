const LoginPage = require('../pageobjects/login.page');

describe('Login page testing', () => {
    beforeAll('Open browser', async () => {
        browser.url('https://www.saucedemo.com/')
    })
    it('Login successfully completed', async () => {
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.inputPassword.setValue('secret_sauce');
        await LoginPage.btnLogin.click();
    })
})