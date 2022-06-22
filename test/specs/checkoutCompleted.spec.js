import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import FirstCheckoutPage from '../pageobjects/checkoutInfo.page'
import SecondCheckoutPage from '../pageobjects/checkoutOverview.page'
import CheckoutCompletedPage from '../pageobjects/checkoutCompleted.page'

describe('Checkout completed testing', () => {
    it('Go back to inventory', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user','secret_sauce')
        await InventoryPage.addTestShirtBtn.click()
        await InventoryPage.cartBtn.click()
        await CartPage.checkoutBtn.click()
        await FirstCheckoutPage.continueCheckout('Karen','Soto','2000')
        await SecondCheckoutPage.finishBtn.click()
        await CheckoutCompletedPage.backHomeBtn.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})