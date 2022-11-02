@Login @Smoke
Feature: Login
  As a user, I want to login in SECONDHAND web.

  @LOGIN001
  Scenario: LOGIN001 - User want to login with valid email and password
  	Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click profile menu
    And User click Logout

	@LOGIN002
  Scenario: LOGIN002 - User want to login with valid email and invalid password
    Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students123"
    Then User click on login button
    And Error message password will display
    Then User back to Homepage

	@LOGIN003
  Scenario: LOGIN003 - User want to login with invalid email and password
    Then User click on button masuk
    Then User input email "binarqe1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    And Error message email will display
    Then User back to Homepage

	@LOGIN004
  Scenario: LOGIN004 - User want to login with invalid email and invalid password
    Then User click on button masuk
    Then User input email "binarqe1@gmail.com"
    Then User input password "students123"
    Then User click on login button
    Then User back to Homepage

	@LOGIN005
  Scenario: LOGIN005 - User want to login without fill in email and password
    Then User click on button masuk
    Then User click on login button