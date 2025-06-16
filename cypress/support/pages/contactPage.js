const selectors = {
  contact_header: "h1",
  submit_button: 'input[type="submit"]',
  email_input: 'input[type="email"]',
  validation_fields: "label.hs-error-msg",
  email_message: "div.hs_email",
  iframe_form: "#hs-form-iframe-0",
  iframe_body: "0.contentDocument.body",
};

class contactPage {
  getIFrame() {
    return cy
      .get(selectors.iframe_form)
      .its(selectors.iframe_body)
      .should("not.be.empty")
      .then(($iframe) => cy.wrap($iframe));
  }

  verifyContactPage() {
    cy.get(selectors.contact_header)
      .contains("Contact us")
      .should("be.visible");
  }

  enterEmailValue() {
    this.getIFrame().find(selectors.email_input).type("12345");
  }

  clickSubmitButton() {
    this.getIFrame().find(selectors.submit_button).contains("Submit").click();
  }

  verifyValidationMessageIsDisplayed() {
    this.getIFrame()
      .find(selectors.email_message)
      .find(selectors.validation_fields)
      .contains("Email must be formatted correctly.")
      .should("have.length", 1);
  }
}

export default new contactPage();