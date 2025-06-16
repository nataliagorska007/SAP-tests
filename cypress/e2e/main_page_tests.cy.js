import mainPage from "../support/pages/mainPage";

describe("SAP tests - Main page", () => {
  beforeEach(() => {
    mainPage.visitPage();
  });

  it("Verify Key Facts section are visible", () => {
    mainPage.verifyKeyFactsSectionVisibility();
  });
});