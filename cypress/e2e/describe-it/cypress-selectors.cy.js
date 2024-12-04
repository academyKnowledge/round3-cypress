describe('Cypress Selectors', () => {
    it('Contains command', () => {
        cy.visit("/");
        cy.contains("As low") // full text  , partial text 
        cy.get(".price-label")
        cy.contains("Notes")  // case sensitive 
        cy.contains("What's New") // a 
        cy.contains("span","What's New") // span 
        cy.contains("span","Yoga Collection")
    });

    it('position in list', () => {
        cy.visit("/")
        cy.get("li.level0").last()
       cy.get("li.level0").first()
       cy.get("li.level0").eq(2) // li "Men"
       cy.get("li.level0").eq(2).next() // Gear
    });

    it('next-prev', () => {
        cy.visit("/")
        cy.contains("span","Yoga Collection").next()
        cy.contains("span","Yoga Collection").next().next()
        cy.get(".action.more.button").prev() 
        cy.get(".action.more.button").prev().next()
    });

    it('filter-not', () => {
        cy.visit("/")
        cy.get("li").filter(".authorization-link")
        cy.get("li.authorization-link")
        cy.get("a").filter(".block-promo")
        cy.get("a").not(".block-promo")
    });

    it('find-parent', () => {
        cy.visit("/")
        cy.get(".field.search").find("input")
        cy.get(".page-footer").find("li").contains("Notes") 
        cy.get(".page-footer").find("li").first()
        cy.get("h2.title").parent()
        cy.get("h2.title").parents()

    });
});