import LoginPage from '../pageobjects/login.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import FirstCheckoutPage from '../pageobjects/checkoutInfo.page'
import SecondCheckoutPage from '../pageobjects/checkoutOverview.page'

describe('Checkout overview page testing', () => {
    it('Cancel and return to inventory', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user','secret_sauce')
        await InventoryPage.addBoltShirtBtn.click()
        await InventoryPage.cartBtn.click()
        await CartPage.checkoutBtn.click()
        await FirstCheckoutPage.continueCheckout('Karen','Soto','2000')
        await SecondCheckoutPage.scndCancelBtn.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('Finish and go to completed order', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user','secret_sauce')
        await InventoryPage.addTestShirtBtn.click()
        await InventoryPage.cartBtn.click()
        await CartPage.checkoutBtn.click()
        await FirstCheckoutPage.continueCheckout('Karen','Soto','2000')
        await SecondCheckoutPage.finishBtn.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
    })
})