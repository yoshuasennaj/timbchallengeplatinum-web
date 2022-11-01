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
    Then User input Harga Produk "50000"
    Then User select Kategori "Baju"
    Then User input Deskripsi "Baju bekas"
    Then User upload Foto Produk
    Then User click Terbitkan
    Then User failed to publish "Baju"
    
  @SELL003
  Scenario: SELL003 - Seller add new product without Harga Produk
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Nama Produk "TV SONY 65 inch"
    Then User select Kategori "Elektronik"
    Then User input Deskripsi "LED TV"
    Then User upload Foto Produk
    Then User click Terbitkan
    Then User failed to publish "TV SONY 65 inch"
    
  @SELL004
  Scenario: SELL004 - Seller add new product without Kategori
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Nama Produk "Sepatu Nike"
    Then User input Harga Produk "1200000"
    Then User input Deskripsi "Sepatu basket mantap"
    Then User upload Foto Produk
    Then User click Terbitkan
    Then User failed to publish "Sepatu Nike"
    
  @SELL005
  Scenario: SELL005 - Seller add new product without Foto Produk
    Then User click on button masuk
    Then User input email "asadulhaq.ali@hotmail.com"
    Then User input password "test12345"
    Then User click on login button
    Then User click +Jual button
    Then User input Nama Produk "Mobil Avanza"
    Then User input Harga Produk "200000000"
    Then User select Kategori "Kendaraan"
    Then User input Deskripsi "Avanza 2020"
    Then User click Terbitkan
    Then User failed to publish "Mobil Avanza"