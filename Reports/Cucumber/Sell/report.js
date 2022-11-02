$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Sell.feature");
formatter.feature({
  "name": "Sell",
  "description": "  User wants to post and sell new product from homepage",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sell"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "SELL001 - Seller add new product with complete information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sell"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@SELL001"
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
  "name": "User input email \"asadulhaq.ali@hotmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"test12345\"",
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
  "name": "User click +Jual button",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Tamiya Lightning-Magnum\"",
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
  "name": "User input Deskripsi \"Tamiya ori\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify new product \"Tamiya Lightning-Magnum\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_verify_new_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SELL002 - Seller add new product without Nama Produk",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sell"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@SELL002"
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
  "name": "User input email \"asadulhaq.ali@hotmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"test12345\"",
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
  "name": "User click +Jual button",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"50000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Kategori \"Baju\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_select_Kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Baju bekas\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed to publish \"Baju\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_failed_to_publish(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SELL003 - Seller add new product without Harga Produk",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sell"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@SELL003"
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
  "name": "User input email \"asadulhaq.ali@hotmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"test12345\"",
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
  "name": "User click +Jual button",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"TV SONY 65 inch\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Kategori \"Elektronik\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_select_Kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"LED TV\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed to publish \"TV SONY 65 inch\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_failed_to_publish(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SELL004 - Seller add new product without Kategori",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sell"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@SELL004"
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
  "name": "User input email \"asadulhaq.ali@hotmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"test12345\"",
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
  "name": "User click +Jual button",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Sepatu Nike\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"1200000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Sepatu basket mantap\"",
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
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed to publish \"Sepatu Nike\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_failed_to_publish(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SELL005 - Seller add new product without Foto Produk",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sell"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@SELL005"
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
  "name": "User input email \"asadulhaq.ali@hotmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"test12345\"",
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
  "name": "User click +Jual button",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Mobil Avanza\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"200000000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Kategori \"Kendaraan\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_select_Kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Avanza 2020\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terbitkan",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User failed to publish \"Mobil Avanza\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_failed_to_publish(String)"
});
formatter.result({
  "status": "passed"
});
});