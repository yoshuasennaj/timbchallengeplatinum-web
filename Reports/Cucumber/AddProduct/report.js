$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/AddProductbyDaftarJual.feature");
formatter.feature({
  "name": "Add Product by Daftar Jual",
  "description": "  //Yoshua",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddProduct"
    }
  ]
});
formatter.scenario({
  "name": "ADD001 - User add new product with complete information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@ADD001"
    }
  ]
});
formatter.step({
  "name": "User click on button masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email \"binarqae1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify image on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card Tambahkan Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductbyDaftarJual.user_click_card_Tambahkan_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Mie Ayam Tumini\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"300000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Kategori \"Hoby\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_select_Kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Mie Ayam terenak se Indonesia raya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload Foto Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_upload_Foto_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Logout",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD002 - User add new product without Nama Produk",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@ADD002"
    }
  ]
});
formatter.step({
  "name": "User click on button masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email \"binarqae1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify image on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card Tambahkan Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductbyDaftarJual.user_click_card_Tambahkan_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"300000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Kategori \"Hoby\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_select_Kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Mie Ayam terenak se Indonesia raya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload Foto Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_upload_Foto_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Logout",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD003 - User add new product without Harga Produk",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@ADD003"
    }
  ]
});
formatter.step({
  "name": "User click on button masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email \"binarqae1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify image on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card Tambahkan Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductbyDaftarJual.user_click_card_Tambahkan_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Mie Ayam Tumini\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Kategori \"Hoby\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_select_Kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Mie Ayam terenak se Indonesia raya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload Foto Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_upload_Foto_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Logout",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD004 - User add new product without Kategori",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@ADD004"
    }
  ]
});
formatter.step({
  "name": "User click on button masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email \"binarqae1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify image on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card Tambahkan Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductbyDaftarJual.user_click_card_Tambahkan_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Mie Ayam Tumini\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"300000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Mie Ayam terenak se Indonesia raya\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload Foto Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_upload_Foto_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Logout",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD005 - User add new product without Deskripsi",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@ADD005"
    }
  ]
});
formatter.step({
  "name": "User click on button masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email \"binarqae1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify image on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card Tambahkan Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductbyDaftarJual.user_click_card_Tambahkan_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Mie Ayam Tumini\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"300000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload Foto Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_upload_Foto_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Logout",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD006 - User add new product without upload Foto Produk",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddProduct"
    },
    {
      "name": "@ADD006"
    }
  ]
});
formatter.step({
  "name": "User click on button masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email \"binarqae1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify image on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click card Tambahkan Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "AddProductbyDaftarJual.user_click_card_Tambahkan_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Mie Ayam Tumini\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"300000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
});