const selectors = {
  financial_esg_kpi_engine_page_item: "h1",
};

class financialPage {
  verifyFinancialESGKPIEnginePage() {
    cy.get(selectors.financial_esg_kpi_engine_page_item)
      .contains("Master ESG KPI management")
      .should("be.visible");
  }
}

export default new financialPage();