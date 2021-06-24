describe("app correctly works with dnd", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  it("should drag and drop Bun ingredient", function () {
    cy.get("section")
      .contains("Флюоресцентная булка R2-D3")
      .trigger("dragstart");
    cy.get("section").contains("Хочешь оформить заказ?").trigger("drop");
    cy.get("#dropTarget")
      .contains("Флюоресцентная булка R2-D3")
      .should("exist");
  });

  it("should drag and drop NoBun ingredient", function () {
    cy.get("section").contains("Соус Spicy-X").trigger("dragstart");
    cy.get("#dropTarget").trigger("drop");
    cy.get("#dropTarget").contains("Соус Spicy-X").should("exist");
  });
});
