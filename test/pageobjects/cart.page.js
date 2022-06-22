class CartPage {
    // GETTERS
    get continueShopBtn () { return $('#continue-shopping') }
    get checkoutBtn () { return $('#checkout') }

    // Open browser
    openCart() { return browser.url('https://www.saucedemo.com/cart.html') }

}

export default new CartPage()