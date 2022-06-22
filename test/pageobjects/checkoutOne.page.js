
class CheckoutOne {

    // GETTERS
    get firstNameInput () { return $('#first-name') }
    get lastNameInput () { return $('#last-name') }
    get postalCodeInput () { return $('#postal-code') }

    get cancelBtn () { return $('#cancel') }
    get continueBtn () { return $('#continue') }
    get checkoutErrorContainer () { return $('#checkout_info_container') }

    // SETTERS
    async setFirstName (firstName) {
        await this.firstNameInput.setValue(firstName);
    }
    async setLastName (lastName) {
        await this.lastNameInput.setValue(lastName);
    }
    async setPostalCode (postalCode) {
        await this.postalCodeInput.setValue(postalCode);
    }

    // METHODS
    // Open browser
    // openCheckoutOne() { return browser.url('https://www.saucedemo.com/checkout-step-one.html') }
    // Checkout your information method
    async continueCheckout(firstName, lastName, postalCode) {
        await this.setFirstName(firstName)
        await this.setLastName(lastName)
        await this.setPostalCode(postalCode)
        await this.continueBtn.click()
    }
}

export default new CheckoutOne();