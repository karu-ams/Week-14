import LoginPage from '../pageobjects/login.page';

describe('Login test negative scenarios, with missing or invalid data', () => {
    describe('All fields empty testing', () => {
        it('Username and password fields are empty, should display an error', async () => {
            await LoginPage.open()
            await LoginPage.login('','')
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required')
        })
    })
    describe('Username input testing', () => {
        it('Empty username, should display an error', async () => {
            await LoginPage.open()
            await LoginPage.login('','secret_sauce')
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required')
        })
        it('Invalid username, should display an error', async () => {
            await LoginPage.open()
            await LoginPage.login('invalid','secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service')
        })
    })
    describe('Password input testing', () => {
        it('Empty password, should display an error', async () => {
            await LoginPage.open()
            await LoginPage.login('standard_user','');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required')
        })
        it('Invalid password, should display an error', async () => {
            await LoginPage.open()
            await LoginPage.login('standard_user','invalid');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service')
        })
    })
});

describe('Login test possitive scenarios with valid credentials', () => {
    describe('Using standard_user data', () => { 
        it('Login should be successful', async () => {
            await LoginPage.open()
            await LoginPage.login('standard_user','secret_sauce');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        })
    })
    describe('Using locked_out_user data', () => { 
        it('An error should be displayed, the user is locked out', async () => {
            await LoginPage.open()
            await LoginPage.login('locked_out_user','secret_sauce');
            await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        })
    })
    describe('Using problem_user data', () => { 
        it('Login should be successful but the inventory page has problems', async () => {
            await LoginPage.open()
            await LoginPage.login('problem_user','secret_sauce');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        })    
    })
    describe('Using performance_glitch_user data', () => { 
        it('Login should be successful', async () => {
            await LoginPage.open()
            await LoginPage.login('performance_glitch_user','secret_sauce');
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        })
    })  
});

describe('Elements to be displayed testing', () => {
    it('Verify robot image to be displayed', async () => {
        await LoginPage.open()
        await expect(LoginPage.botImg).toBeDisplayed();
    })
    it('Verify logo image to be displayed', async () => {
        await LoginPage.open()
        await expect(LoginPage.loginLogo).toBeDisplayed();
    })
});