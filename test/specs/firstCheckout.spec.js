import LoginPage from '../pageobjects/login.page'
import InventoryPage from "../pageobjects/inventory.page"
import CartPage from '../pageobjects/cart.page'
import FirstCheckoutPage from '../pageobjects/firstCheckout.page'

describe('Checkout information test', () => {
    beforeEach('Log in and checkout', () => {
        LoginPage.open()
        LoginPage.login('standard_user','secret_sauce')
        InventoryPage.cartBtn.click()
        CartPage.checkoutBtn.click()
    });
    describe('Test with all information fields empty', () => {
        it('Should display an error message', async () => {
            await FirstCheckoutPage.openFirstCheckoutPage()
            await FirstCheckoutPage.continueCheckout('','','')
            await expect(FirstCheckoutPage.checkoutErrorContainer).toHaveText('Error: First Name is required')
        })
    })
    describe('Test with some fields empty', () => {
        it('Empty name, should display an error', async () => {
            await FirstCheckoutPage.openFirstCheckoutPage()
            await FirstCheckoutPage.continueCheckout('','Soto','2000')
            await expect(FirstCheckoutPage.checkoutErrorContainer).toHaveText('Error: First Name is required')
        })
        it('Empty last name, should display an error', async () => {
            await FirstCheckoutPage.openFirstCheckoutPage()
            await FirstCheckoutPage.continueCheckout('Karen','','2000')
            await expect(FirstCheckoutPage.checkoutErrorContainer).toHaveText('Error: Last Name is required')
        })
        it('Empty postal code, should display an error', async () => {
            await FirstCheckoutPage.openFirstCheckoutPage()
            await FirstCheckoutPage.continueCheckout('Karen','Soto','')
            await expect(FirstCheckoutPage.checkoutErrorContainer).toHaveText('Error: Postal Code is required')
        })
    })
    describe('Test with valid data', () => {
        it('Should display an error message', async () => {
            await FirstCheckoutPage.openFirstCheckoutPage()
            await FirstCheckoutPage.continueCheckout('Karen','Soto','2000')
            await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        })
    })
});