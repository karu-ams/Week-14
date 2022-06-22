import InventoryPage from "../pageobjects/inventory.page";
import LoginPage from "../pageobjects/login.page";

describe('Add items to cart testing', () => {
    beforeAll('Log in', () => {
        LoginPage.open()
        LoginPage.login('standard_user','secret_sauce')
    })
    it('Adding some items', async () => {
        await InventoryPage.addToCart(1)
        await InventoryPage.addToCart(2)
        await expect(InventoryPage.cartItems).toHaveText('2')
    })
    it('Removing some items successfully', async () => {
        await InventoryPage.removeFromCart(1)
        await expect(InventoryPage.cartItems).toHaveText('1')
        await InventoryPage.removeFromCart(2)
        await expect(InventoryPage.cartItems).not.toBeExisting()
    })
});