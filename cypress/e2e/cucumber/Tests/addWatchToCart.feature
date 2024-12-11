Feature:  Add watches with price > 55 to cart
    Scenario: Add watches with price > 55 to cart
        Given The user navigate to magento website
        When Click on Gear menu and choose watches option
        And Add all watches with price > 55 to cart
        Then The cart should contain the correct numbers of watches