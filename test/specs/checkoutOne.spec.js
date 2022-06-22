import LoginPage from '../pageobjects/login.page'
import InventoryPage from "../pageobjects/inventory.page"
import CartPage from '../pageobjects/cart.page'
import CheckoutOne from '../pageobjects/checkoutOne.page'

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
            await CheckoutOne.continueCheckout('','','')
            await expect(CheckoutOne.errorContainer).toHaveText('Error: First Name is required')
        })
    })
    describe('Test with some fields empty', () => {
        it('Empty name, should display an error', async () => {
            await CheckoutOne.continueCheckout('','Soto','2000')
            await expect(CheckoutOne.errorContainer).toHaveText('Error: First Name is required')
        })
        it('Empty last name, should display an error', async () => {
            await CheckoutOne.continueCheckout('Karen','','2000')
            await expect(CheckoutOne.errorContainer).toHaveText('Error: Last Name is required')
        })
        it('Empty postal code, should display an error', async () => {
            await CheckoutOne.continueCheckout('Karen','Soto','')
            await expect(CheckoutOne.errorContainer).toHaveText('Error: Postal Code is required')
        })
    })
    describe('Test with valid data', () => {
        CheckoutOne.continueCheckout('Karen','Soto','2000')
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
    })
});