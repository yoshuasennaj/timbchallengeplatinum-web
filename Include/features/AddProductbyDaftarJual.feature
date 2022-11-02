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
    Then User click on daftar jual icon
    Then User click card Tambahkan Produk
    Then User input Nama Produk "Mie Ayam Tumini"
    Then User input Harga Produk "300000"
    Then User select Kategori "Hoby"
    Then User input Deskripsi "Mie Ayam terenak se Indonesia raya"
    Then User upload Foto Produk
    And User click Terbitkan
    
  @ADD002
  Scenario: ADD002 - User add new product without Nama Produk
  Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click on daftar jual icon
    Then User click card Tambahkan Produk
    Then User input Harga Produk "300000"
    Then User select Kategori "Hoby"
    Then User input Deskripsi "Mie Ayam terenak se Indonesia raya"
    Then User upload Foto Produk
    And User click Terbitkan
    
  @ADD003
  Scenario: ADD003 - User add new product without Harga Produk
  Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click on daftar jual icon
    Then User click card Tambahkan Produk
    Then User input Nama Produk "Mie Ayam Tumini"
    Then User select Kategori "Hoby"
    Then User input Deskripsi "Mie Ayam terenak se Indonesia raya"
    Then User upload Foto Produk
    And User click Terbitkan
    
  @ADD004
  Scenario: ADD004 - User add new product without Kategori
  Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click on daftar jual icon
    Then User click card Tambahkan Produk
    Then User input Nama Produk "Mie Ayam Tumini"
    Then User input Harga Produk "300000"
    Then User input Deskripsi "Mie Ayam terenak se Indonesia raya"
    Then User upload Foto Produk
    And User click Terbitkan
    
  @ADD005
  Scenario: ADD005 - User add new product without Deskripsi
  Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click on daftar jual icon
    Then User click card Tambahkan Produk
    Then User input Nama Produk "Mie Ayam Tumini"
    Then User input Harga Produk "300000"
    Then User upload Foto Produk
    And User click Terbitkan
    
       
  @ADD006
  Scenario: ADD006 - User add new product without upload Foto Produk
  Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click on daftar jual icon
    Then User click card Tambahkan Produk
    Then User input Nama Produk "Mie Ayam Tumini"
    Then User input Harga Produk "300000"
    And User click Terbitkan