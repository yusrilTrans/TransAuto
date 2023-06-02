Feature: Performing the logins

    Background:
        Given I'm on the login page

    Scenario: Login with admin user
        When I log in with email testadmin@vms.com password password
        Then I should be on the dashboard page