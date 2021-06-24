describe("app correctly works with routes ", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  it("should open main page by default", function () {
    cy.contains("Соберите бургер");
  });

  it("should open feed page by click on menu button", function () {
    cy.get("a").contains("Лента заказов").click();
    cy.contains("Лента заказов");
  });

  it("should open login page by click on user button", function () {
    cy.get("a").contains("Личный кабинет").click();
    cy.contains("Вход");
    cy.get("a").contains("Конструктор").click();
  });
});
