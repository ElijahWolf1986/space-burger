describe("app correctly works with modal ", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  it("should open IngredientDetails page by click on the ingredient", function () {
    cy.get("section").contains("Флюоресцентная булка R2-D3").click();
    cy.contains("Детали Ингредиента").should("exist");
    cy.get("#modal").contains("Флюоресцентная булка R2-D3").should("exist");
  });
});
