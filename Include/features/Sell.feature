@Sell @Smoke
Feature: Sell
  User wants to post and sell new product from homepage

  @SELL001
  Scenario: SELL001 - Seller add new product with complete information
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
    Then User click Terbitkan
    Then User verify new product "Tamiya Lightning-Magnum"
    
  @SELL002
  Scenario: SELL002 - Seller add new product without Nama Produk
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Harga Produk "300000"
    Then User select Kategori "Hoby"
    Then User input Deskripsi "Tamiya ori"
    Then User upload Foto Produk
    Then User click Terbitkan
    Then User failed to publish new product
    
  @SELL003
  Scenario: SELL003 - Seller add new product without Harga Produk
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Nama Produk "Tamiya Lightning-Magnum"
    Then User select Kategori "Hoby"
    Then User input Deskripsi "Tamiya ori"
    Then User upload Foto Produk
    Then User click Terbitkan
    Then User failed to publish new product
    
  @SELL004
  Scenario: SELL004 - Seller add new product without Kategori
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Nama Produk "Tamiya Lightning-Magnum"
    Then User input Harga Produk "300000"
    Then User input Deskripsi "Tamiya ori"
    Then User upload Foto Produk
    Then User click Terbitkan
    Then User failed to publish new product
    
  @SELL005
  Scenario: SELL005 - Seller add new product without Foto Produk
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Nama Produk "Tamiya Lightning-Magnum"
    Then User input Harga Produk "300000"
    Then User select Kategori "Hoby"
    Then User input Deskripsi "Tamiya ori"
    Then User click Terbitkan
    Then User failed to publish new product