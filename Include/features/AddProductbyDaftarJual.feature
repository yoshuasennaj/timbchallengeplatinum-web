@AddProduct
Feature: Add Product by Daftar Jual
  //Yoshua

  @ADD001
  Scenario: ADD001 - User add new product with complete information
  Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click icon DaftarJual