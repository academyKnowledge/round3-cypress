describe('Selectors', () => {
    it('Selectors-examples', () => {
        cy.visit("https://www.telerik.com/support/demos");
        cy.get("h1").contains("Demos");
        //cy.contains("h1","Demos")
        cy.get(".NavAlt-anchor").eq(3)
        cy.get("#web")
        cy.get(".TK-Footer-List").eq(1).find(".TK-Footer-List-Item a").eq(4);
        cy.get("[href='/blogs']").last()
        cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").find("li");   
        cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").children()
    });
});