Feature: Performing to create new vehicle type

    Scenario: User can create new vehicle type
        Given I'm on the login page
        When I log in with email sadmin@vms.com password 1234qwer
        Then I should be on the dashboard page
    
    Scenario: Add new vehicle type
        Given I'm on the vehicle page
        When I add new vehicle type
        Then I should have new vehicle type