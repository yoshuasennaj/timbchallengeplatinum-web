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


// Ageng
class Register {
	@Then("User click link masuk")
	public void user_click_link_masuk() {
		WebUI.callTestCase(findTestCase('Pages/UserRegister/Click Link Masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click link daftar disini")
	public void user_click_link_daftar_disini() {
		WebUI.callTestCase(findTestCase('Pages/UserRegister/Click Link Daftar di sini'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User input nama registered {string}")
	public void user_input_nama(String string) {
		WebUI.callTestCase(findTestCase('Pages/UserRegister/Input Nama'), [('nama') : 'ageng'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User input email registered {string}")
	public void user_input_email_registered(String string) {
		WebUI.callTestCase(findTestCase('Pages/UserRegister/Input Email'), [('email') : 'agengjobb@gmail.com'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User input password registered {string}")
	public void user_input_password_registered(String string) {
		WebUI.callTestCase(findTestCase('Pages/UserRegister/Input Password'), [('password') : 'Cobain23'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click button daftar")
	public void user_click_button_daftar() {
		WebUI.callTestCase(findTestCase('Pages/UserRegister/Click btn Daftar'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.delay(3)
		WebUI.openBrowser('');
		WebUI.maximizeWindow();
		WebUI.navigateToUrl('https://deployed-five.vercel.app/')
	}
}