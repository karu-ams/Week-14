import LoginPage from '../pageobjects/login.page'
import InventoryPage from "../pageobjects/inventory.page"
import CartPage from '../pageobjects/cart.page'

describe('Testing action buttons', () => {
    beforeEach('Log in', () => {
        LoginPage.open()
        LoginPage.login('standard_user','secret_sauce')
        InventoryPage.addToCart(5)
        InventoryPage.addToCart(6)
        InventoryPage.cartBtn.click()
    })
    it('Return to Inventory to continue shopping testing', async () => {
        await CartPage.continueShopBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    it('Go to checkout testing', async () => {
        await InventoryPage.cartBtn.click();
        await CartPage.checkoutBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    });
})