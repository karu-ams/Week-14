class InventoryPage {
    // GETTERS
    // Backpack
    get imgBackpack () { return $('#item_4_img_link > img') }
    get titleBackpack () { return $('#item_4_title_link > div') }
    get addBackpackBtn () { return $('#add-to-cart-sauce-labs-backpack') }
    get removeBackpackBtn () { return $('#remove-sauce-labs-backpack') }
    // Bike Light
    get imgBikeLight () { return $('#item_0_img_link > img') }
    get titleBikeLight () { return $('#item_0_title_link > img') }
    get addBikeLightBtn () { return $('#add-to-cart-sauce-labs-bike-light') }
    get removeBikeLightBtn () { return $('#remove-sauce-labs-bike-light') }
    // Bolt T-Shirt
    get imgBoltShirt () { return $('#item_1_img_link > img') }
    get titleBoltShirt () { return $('#item_1_title_link > div') }
    get addBoltShirtBtn () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get removeBoltShirtBtn () { return $('#remove-sauce-labs-bolt-t-shirt') }
    // Fleece Jacket
    get imgFleeceJacket () { return $('#item_5_img_link > img') }
    get titleFleeceJacket () { return $('#item_5_title_link > img') }
    get addFleeceJacketBtn () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get removeFleeceJacketBtn () { return $('#remove-sauce-labs-fleece-jacket') }
    // Onesie
    get imgOnesie () { return $('#item_2_img_link > img') }
    get titleOnesie () { return $('#item_2_title_link > img') }
    get addOnesieBtn () { return $('#add-to-cart-sauce-labs-onesie') }
    get removeOnesieBtn () { return $('#remove-sauce-labs-onesie') }
    // TestAllTheThings T-Shirt
    get imgTestShirt () { return $('#item_3_img_link > img') }
    get titleTestShirt () { return $('#item_3_title_link > div') }
    get addTestShirtBtn () { return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]') }
    get removeTestShirtBtn () { return $('//*[@id="remove-test.allthethings()-t-shirt-(red)"]') }

    get cartBtn() { return $('.shopping_cart_link') };

    // METHODS
    openInventory () {
        return browser.url('http://www.saucedemo.com/inventory.html')
    }

    async addToCart(k) {
        switch(k) {
            case 1:
                await this.addBackpackBtn.click();
                break;
            case 2:
                await this.addBikeLightBtn.click();
                break;
            case 3:
                await this.addBoltShirtBtn.click();
                break;
            case 4:
                await this.addFleeceJacketBtn.click();
                break;
            case 5:
                await this.addOnesieBtn.click();
                break;
            case 6:
                await this.addTestShirtBtn.click();
                break;
        }
    }

    async removeFromCart(k) {
        switch(k){
            case 1:
                await this.removeBackpackBtn.click();
                break;
            case 2:
                await this.removeBikeLightBtn.click();
                break;
            case 3:
                await this.removeBoltShirtBtn.click();
                break;
            case 4:
                await this.removeFleeceJacketBtn.click();
                break;
            case 5:
                await this.removeOnesieBtn.click();
                break;
            case 6:
                await this.removeTestShirtBtn.click();
                break;
            default:
                break;
        }
    }
}

export default new InventoryPage();