import LoginPage from '../pageobjects/login.page'
import InventoryPage from "../pageobjects/inventory.page"
import CartPage from '../pageobjects/cart.page'
import CheckoutOnePage from '../pageobjects/checkoutOne.page'

describe('Checkout information test', () => {

    beforeAll('Log in and checkout', () => {
        LoginPage.open()
        LoginPage.login('standard_user','secret_sauce')
        InventoryPage.addToCart(5)
        InventoryPage.addToCart(6)
        InventoryPage.cartBtn.click()
        CartPage.checkoutBtn.click()
    });
    describe('Test with all information fields empty', () => {
        it('Should display an error message', async () => {
            await CheckoutOnePage.continueCheckout('','','')
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: First Name is required')
        })
    })
    describe('Test with some fields empty', () => {
        it('Empty name, should display an error', async () => {
            await CheckoutOnePage.continueCheckout('','Soto','2000')
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: First Name is required')
        })
        it('Empty last name, should display an error', async () => {
            await CheckoutOnePage.continueCheckout('Karen','','2000')
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: Last Name is required')
        })
        it('Empty postal code, should display an error', async () => {
            await CheckoutOnePage.continueCheckout('Karen','Soto','')
            await expect(CheckoutOnePage.errorContainer).toHaveText('Error: Postal Code is required')
        })
    })
    describe('Test with valid data', () => {
        CheckoutOnePage.continueCheckout('Karen','Soto','2000')
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
    })
});