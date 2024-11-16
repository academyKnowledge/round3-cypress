/// <reference types ="cypress" />

describe('Actions Lesson', () => {
    it('Click command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#btn1").click() // by default center 
        cy.get("#btn1").click("left")
        cy.get("#btn0").click({force: true})
        cy.get(".btn").click({ multiple: true })
        cy.get(".btn").click("top",{ multiple: true })
    });

    it('Type Command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("[placeholder='Type your name']").clear().type("Razan")
        // cy.get("[placeholder='Type your name']").clear().type("Razan",{delay:1000})
        cy.get("[name=input_0]").clear({force:true}).type("Razan",{force:true})
    });

    it('type-seq', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("#search").clear().type("bag"+"{enter}")
        cy.get("#search").clear().type("shirt {enter}")
        cy.get("#search").clear().type("shirt{leftArrow}{leftArrow}")
        cy.get("#search").clear().type("shirt{home}{del}",{delay:1000})
    });

    it('Select Command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#country").select("Jordan")  // by text 
        cy.get("#country").select("egypt_country")  // by value
        cy.get("#country").select(0)  // by index
    });

    it('check-uncheck commands', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        // cy.get("#Banana").check()
        // cy.get("#orange").check();
        // cy.get("[type=checkbox]").not("#checkMe").check() // without using {multiple:true} option 
        // cy.get("[type=checkbox]").not("#checkMe").check(['or','Nuts','Fries']).uncheck()
        // cy.get("[type=checkbox]").not("#checkMe").check().uncheck() // without using {multiple:true} option 
        cy.get("[type=checkbox]").not("#checkMe").check().uncheck(['or','Nuts','Fries']) // without using {multiple:true} option 

        // radio buttons 
        cy.get("#developer").check()   
        cy.get("#tester").check()   
       // cy.reload() 
    });

    it('db-click', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#dbClick").dblclick()
    });

    it('focus-blur', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#myTextField").focus().type("razan")
        cy.get("#myTextField").focus().blur()
    });

    it.only('trigger', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#trigger_btn").trigger("mouseover")
        cy.get("#trigger_btn").trigger("mouseleave")

        cy.get("#btn1").trigger("mousedown")
    });

});