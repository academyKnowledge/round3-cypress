@smoke-test @team @TC-123 @area1
Feature: test some cucumber concepts

    @TC-1 @myTest
    Scenario: Print the name of the products in hot seller section
        Given The user navigate to magento website
        Then The products in hot seller section are available

    @TC-2 @myTest
    Scenario: Validate that the user can login successfully
        Given The user navigate to sign in page in magento website
        When The user types email in email input field
        And The user types password in password input field
        And The user clicks on sign in button
        Then The user will redirected to My Account page

    @TC-3 @myTest
    Scenario: Add watches with price > 55 to cart
        Given The user navigate to magento website
        When Click on Gear menu and choose watches option
        And Add all watches with price > 55 to cart
        Then The cart should contain the correct numbers of watches

    @focus
    Scenario Outline: Add "<v2>" to compare
        Given The user navigate to magento website
        When User Types "<v1>" in search bar
        And User Clicks on the "<v2>"
        And User Clicks on Add to compare button
        Then A message You added product "<v2>" to the comparison list should shown

        Examples:
            | v1    | v2                      |
            | shirt | Circe Hooded Ice Fleece |
            | bag   | Push It Messenger Bag   |
            | watch | Circe Hooded Ice Fleece |


# Scenario Outline: Add "<product name>" to compare
#     Given The user navigate to magento website
#     When User Types "<product name>" in search bar
#     And User Clicks on the "<product name>"
#     And User Clicks on Add to compare button
#     Then A message You added product "<product name>" to the comparison list should shown

#     Examples:
#         | product name            |
#         | Circe Hooded Ice Fleece |
#         | Push It Messenger Bag   |
#         | Circe Hooded Ice Fleece |