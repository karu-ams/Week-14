class LoginPage {
    // Getters
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnLogin () {
        return $('#login-button');
    }
}

module.exports = new LoginPage();
