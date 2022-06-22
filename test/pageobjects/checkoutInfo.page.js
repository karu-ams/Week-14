class FirstCheckoutPage {
    // GETTERS
    get inputFirstName () { return $('#first-name') }
    get inputLastName () { return $('#last-name') }
    get inputPostalCode () { return $('#postal-code') }
    get cancelBtn () { return $('#cancel') }
    get continueBtn () { return $('#continue') }
    get checkoutErrorContainer () { return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error') }
    
    // SETTERS
    async setFirstName (firstName) {
        await this.inputFirstName.setValue(firstName)
    }
    async setLastName (lastName) {
        await this.inputLastName.setValue(lastName)
    }
    async setPostalCode (postalCode) {
        await this.inputPostalCode.setValue(postalCode)
    }
    // METHODS
    openFirstCheckoutPage() { return browser.url('http://www.saucedemo.com/') }

    async continueCheckout(firstName, lastName, postalCode) {
        await this.setFirstName(firstName)
        await this.setLastName(lastName)
        await this.setPostalCode(postalCode)
        await this.continueBtn.click()
    }
}

export default new FirstCheckoutPage()