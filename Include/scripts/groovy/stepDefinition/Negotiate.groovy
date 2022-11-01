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



class Negotiate {
	//@Given("User on home page")
	//public void user_on_home_page()	{
	//WebUI.navigateToUrl('https://deployed-five.vercel.app/login')
	//WebUI.callTestCase(findTestCase('Pages/UserLogin/Input Email'), [('email') : 'binarqae1@gmail.com'], FailureHandling.STOP_ON_FAILURE)
	//WebUI.callTestCase(findTestCase('Pages/UserLogin/Input Password'), [('password') : 'students1234'], FailureHandling.STOP_ON_FAILURE)
	//WebUI.callTestCase(findTestCase('Pages/UserLogin/Click login button'), [:], FailureHandling.STOP_ON_FAILURE)
	//}

	@Then("User click home page")
	public void user_click_home_page() {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Click Home'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click product raket badminton")
	public void user_click_product_raket_badminton() {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Click Product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click saya_tertarik_dan_ingin_nego button")
	public void user_click_saya_tertarik_dan_ingin_nego_button() {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Click Negotiate'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User input correct price {int}")
	public void user_input_correct_price(Integer string) {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Input Harga'), [('harga') : '30000'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User input incorrect price above {int}")
	public void user_input_incorrect_price_above(Integer string) {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Input Harga'), [('harga') : '50000'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User input incorrect price below {int}")
	public void user_input_incorrect_price_below(Integer string) {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Input Harga'), [('harga') : '999'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click kirim button")
	public void user_click_kirim_button() {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Click Kirim'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.delay(5)
	}

	@Then("User click x button")
	public void user_click_x_button() {
		WebUI.callTestCase(findTestCase('Pages/Negotiate/Click x Button'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}