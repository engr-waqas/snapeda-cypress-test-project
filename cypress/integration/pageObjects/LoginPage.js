class LoginPage {
  getUsernameField() {
    return cy.get('#id_username')
  }

  getPasswordField() {
    return cy.get('#id_password')
  }

  getSubmitButton() {
    return cy.get('.btn-submit')
  }

  login(username, password) {
    this.getUsernameField().type(username)
    this.getPasswordField().type(password)
    this.getSubmitButton().click()
  }
}

export default LoginPage
