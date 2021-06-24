describe("app correctly works with delete button ", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  it("should delete ingredient", function () {
    cy.get("section")
      .contains("Мясо бессмертных моллюсков Protostomia")
      .trigger("dragstart");
    cy.get("section").contains("Хочешь оформить заказ?").trigger("drop");
    cy.get("section").contains("Соус Spicy-X").trigger("dragstart");
    cy.get("#dropTarget").trigger("drop");
    cy.get("section").contains("Мини-салат Экзо-Плантаго").trigger("dragstart");
    cy.get("#dropTarget").trigger("drop");
    cy.get("section")
      .contains("Сыр с астероидной плесенью")
      .trigger("dragstart");
    cy.get("#dropTarget").trigger("drop");
    cy.get("section")
      .contains("Хрустящие минеральные кольца")
      .trigger("dragstart");
    cy.get("#dropTarget").trigger("drop");
    cy.get("#delete-button").click();
    cy.get("#dropTarget")
      .contains("Мясо бессмертных моллюсков Protostomia")
      .should("not.exist");
  });
});
