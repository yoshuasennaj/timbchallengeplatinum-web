@Preview @Smoke
Feature: Preview
  User wants to see preview before publishing new product

  @PREVIEW001
  Scenario: PREVIEW001 - Seller preview new product with complete information
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Nama Produk "Tamiya Lightning-Magnum"
    Then User input Harga Produk "300000"
    Then User select Kategori "Hoby"
    Then User input Deskripsi "Tamiya ori"
    Then User upload Foto Produk
    Then User click Preview
    Then User verify new product "Tamiya Lightning-Magnum"