@Login @Smoke
Feature: Login
  As a user, I want to login in SECONDHAND web.

  Scenario: LOGIN001 - User want to login with valid email and password
    Then User input valid email "binarqae1@gmail.com"
    Then User input valid password "students1234"
    Then User click on login button

  Scenario: LOGIN002 - User want to login with valid email and invalid password
    Then User input valid email "binarqae1@gmail.com"
    Then User input invalid password "students123"
    Then User click on login button

  Scenario: LOGIN003 - User want to login with invalid email and password
    Then User input invalid email "binarqe1@gmail.com"
    Then User input valid password "students1234"
    Then User click on login button

  Scenario: LOGIN004 - User want to login with invalid email and invalid password
    Then User input valid email "binarqe1@gmail.com"
    Then User input invalid password "students123"
    Then User click on login button

  Scenario: LOGIN005 - User want to login without fill in email and password
    Then User click on login button