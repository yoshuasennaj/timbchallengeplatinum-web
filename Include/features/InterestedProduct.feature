#riswanda al farisi
@InterestedProduct @Smoke
Feature: InterestedProduct
  As a seller, I want to see what product that interest consumer.

  @INTERESTEDPRODUCT001
  Scenario: LOGIN001 - User want to login with valid email and password
  	Then User click on button masuk
    Then User input valid email "binarqae1@gmail.com"
    Then User input valid password "students1234"
    Then User click on login button