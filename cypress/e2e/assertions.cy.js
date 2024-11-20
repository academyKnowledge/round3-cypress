
describe('Assertions', () => {
    it('be-visible,hidden', () => {
        cy.visit("/")
        cy.get(".logo").should("be.visible")
        cy.get("#search").should("be.visible")
        cy.get(".counter").first().should("not.be.visible")
        cy.get(".counter").first().should("be.hidden")
    });

    it('attr', () => {
        cy.visit("/")
        cy.get(".showcart").should("have.attr","href")
        cy.get(".copyright").should("have.css","display","block")
        .and("have.css","color","rgb(255, 255, 255)")
        .and("have.css","text-align","center")
        cy.contains("span","Shop New Yoga").should("have.class","more")
    });

    it.only('chainers', () => {
        cy.visit("/");
        cy.get(".page-main").should("have.id","maincontent")
        cy.get(".bg-white .info").first().should("have.text","New Luma Yoga Collection")
        cy.get(".bg-white .info").first().should("contain","New Luma Yoga")
        cy.get("[title=Search]").should("be.disabled")
        cy.get(".counter").first().should("exist")
        cy.get("[title=Search]").should("have.prop","disabled")
    });

    it('search button', () => {
        cy.visit("/")
        cy.get("#search").type("bag")
        cy.get("[title=Search]").should("be.enabled")
    });

    it('', () => {
        cy.visit("/hero-hoodie.html")
        cy.get("#qty").should("be.empty")
        cy.get("#qty").should("have.value","1")
    });

    it('', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        // cy.get("[placeholder='Type your name']").invoke("val").should("not.be.empty")
        cy.get("[placeholder='Type your name']").invoke("val").should("be.empty")
        cy.get("[placeholder='Type your name']").should("have.value","")
    });




});