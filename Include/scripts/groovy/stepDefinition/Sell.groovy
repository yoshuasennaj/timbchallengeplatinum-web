package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

//Asad
@Then("User click +Jual button")
public void user_click_Jual_button() {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Click Sell New Product'), [:], FailureHandling.STOP_ON_FAILURE);
}

@Then("User input Nama Produk {string}")
public void user_input_Nama_Produk(String NamaProduk) {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Input Nama Produk'), [('NamaProduk') : NamaProduk], FailureHandling.STOP_ON_FAILURE);
}

@Then("User input Harga Produk {string}")
public void user_input_Harga_Produk(String HargaProduk) {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Input Harga Produk'), [('HargaProduk') : HargaProduk], FailureHandling.STOP_ON_FAILURE);
}

@Then("User select Kategori {string}")
public void user_select_Kategori(String Kategori) {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Select Kategori'), [('Kategori') : Kategori], FailureHandling.STOP_ON_FAILURE);
}

@Then("User input Deskripsi {string}")
public void user_input_Deskripsi(String Deskripsi) {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Input Deskripsi'), [('Deskripsi') : Deskripsi], FailureHandling.STOP_ON_FAILURE);
}

@Then("User upload Foto Produk")
public void user_upload_Foto_Produk() {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Upload Foto Produk'), [:], FailureHandling.STOP_ON_FAILURE);
}

@Then("User click Terbitkan")
public void user_click_Terbitkan() {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Click Terbitkan'), [:], FailureHandling.STOP_ON_FAILURE);
	WebUI.delay(5);
}

@Then("User click Preview")
public void user_click_Preview() {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Click Preview'), [:], FailureHandling.STOP_ON_FAILURE)
	WebUI.delay(5);
}

@Then("User verify new product {string}")
public void user_verify_new_product(String NewProduct) {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Verify New Product'), [('NewProduct') : NewProduct], FailureHandling.STOP_ON_FAILURE);
	WebUI.closeBrowser();
	WebUI.openBrowser('');
	WebUI.maximizeWindow();
	WebUI.navigateToUrl('https://deployed-five.vercel.app/');
}

@Then("User failed to publish new product")
public void user_failed_to_publish_new_product() {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Verify Failed to Publish'), [:], FailureHandling.STOP_ON_FAILURE);
	WebUI.closeBrowser();
	WebUI.openBrowser('');
	WebUI.maximizeWindow();
	WebUI.navigateToUrl('https://deployed-five.vercel.app/');
}

@Then("User see Preview page")
public void user_see_Preview_page() {
	WebUI.callTestCase(findTestCase('Pages/SellHomepage/Verify Preview'), [:], FailureHandling.STOP_ON_FAILURE);
	WebUI.closeBrowser();
	WebUI.openBrowser('');
	WebUI.maximizeWindow();
	WebUI.navigateToUrl('https://deployed-five.vercel.app/');
}