class LoginPage {
    // Getters
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnLogin () { return $('#login-button') }
    get errorContainer () { return $('.error-message-container.error') }
    get botImg () { return $('.bot_column') }
    get loginLogo () { return $('.login_logo') }
    get title() {return $('.title')}
    // Setters
    async setUsername(username) {
        await this.inputUsername.setValue(username);
    };
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    };
    // Methods
    // Open browser
    open() { return browser.url('http://www.saucedemo.com/') }
    // Log in method
    async login (username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    };
};

export default new LoginPage();