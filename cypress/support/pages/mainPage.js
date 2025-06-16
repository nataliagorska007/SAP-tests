const selectors = {
  menu_item: 'a[href="#"]',
  menu_sub_item: "a span",
  get_in_touch_button: ".header-button",
  key_facts_section: ".col-inner",
  key_facts_number_headers: "h3",
  key_facts_description: "h4",
};

const keyFacts = [
  {
    number: "1,200+",
    text: "financial institutions run SAP Fioneer software globally"
  },
  {
    number: ">5,500",
    text: "transactions per second processed through our systems"
  },
  {
    number: "5 out of 10",
    text: "of the world’s most profitable banks use our technology"
  },
  {
    number: "50%",
    text: "of the world’s largest insurers use SAP Fioneer software"
  }
];

class mainPage {
  visitPage() {
    cy.visit("/");
    cy.clearAllCookies();
  }

  clickOnGetInTouchButton() {
    cy.get(selectors.get_in_touch_button).contains("Get in touch").click();
  }

  goToFinancialESGKPIEnginePage() {
    cy.get(selectors.menu_item).contains("Finance & ESG").invoke("show");
    cy.get(selectors.menu_sub_item)
      .contains("ESG KPI Engine")
      .click({ force: true });
  }

  verifyKeyFactsSectionVisibility() {
    cy.get(selectors.key_facts_section)
      .contains("Key Facts")
      .scrollIntoView()
      .should("be.visible");

    keyFacts.forEach(({ number, text }) => {
      cy.get(selectors.key_facts_number_headers).contains(number).should("be.visible");
      cy.get(selectors.key_facts_description).contains(text).should("be.visible");
    });
  }
}

export default new mainPage();