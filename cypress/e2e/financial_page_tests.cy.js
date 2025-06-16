import mainPage from "../support/pages/mainPage";
import financialPage from "../support/pages/financialPage";

describe("SAP tests - Financial page", () => {
  beforeEach(() => {
    mainPage.visitPage();
  });

  it("Verify if User is redirected to ESG KPI Engine page", () => {
    mainPage.goToFinancialESGKPIEnginePage();
    financialPage.verifyFinancialESGKPIEnginePage();
  });
});