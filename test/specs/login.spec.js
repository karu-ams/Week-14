const LoginPage = require('../pageobjects/login.page');

describe('Login page testing', () => {
    beforeAll('Open browser', async () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('Login successfully completed', async () => {
        await LoginPage.login('standart_user', 'secret_sauce');
    });
});