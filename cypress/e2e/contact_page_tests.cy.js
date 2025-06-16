import mainPage from "../support/pages/mainPage";
import contactPage from "../support/pages/contactPage";

describe("SAP tests - Contact page", () => {
  beforeEach(() => {
    mainPage.visitPage();
  });

  it("Verify if User is redirected to Contact page and check email validation", () => {
    mainPage.clickOnGetInTouchButton();
    contactPage.verifyContactPage();
    contactPage.enterEmailValue();
    contactPage.clickSubmitButton();
    contactPage.verifyValidationMessageIsDisplayed();
  });
});