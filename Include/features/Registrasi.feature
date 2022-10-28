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

//ageng

class Register {
	//Reg001 - User want to register using correct credential
	@Then("click button masuk")
	public void click_button_masuk() {
		WebUI.callTestCase(findTestCase('Page/User Register/Click Masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("click button daftar disini")
	public void click_button_daftar_disini() {
		WebUI.callTestCase(findTestCase('Page/User Register/Click Daftar Disini'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("input nama1")
	public void input_nama1() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Nama'), [('nama') : 'Dadang'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("input email1")
	public void input_email1() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Email'), [('email') : 'tima10@yopmail.com'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("input password1")
	public void input_password1() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Password'), [('password') : 'student1234'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("click daftar")
	public void click_daftar() {
		WebUI.callTestCase(findTestCase('Page/User Register/Click Daftar'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("verify email")
	public void verify_email() {
		WebUI.callTestCase(findTestCase('Page/User Register/Verify email'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.delay(5)
		WebUI.openBrowser('');
		WebUI.maximizeWindow();
		WebUI.navigateToUrl('https://deployed-five.vercel.app/')
	}

	//Reg002 - User want to register using incorrect credential
	@Then("input nama2")
	public void input_nama2() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Nama'), [('nama') : 'John'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("input incorrect email2")
	public void input_incorrect_email2() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Email'), [('email') : 'testcase'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("input password2")
	public void input_password2() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Password'), [('password') : '1234'], FailureHandling.STOP_ON_FAILURE)
		WebUI.delay(5)
		WebUI.openBrowser('');
		WebUI.maximizeWindow();
		WebUI.navigateToUrl('https://deployed-five.vercel.app/')
	}

	//Reg003 - User want to register using email already exists
	@Then("input nama3")
	public void input_nama3() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Nama'), [('nama') : 'Bagas'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("input email3")
	public void input_email3() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Email'), [('email') : 'timaweb01@yopmail.com'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("input password3")
	public void input_password3() {
		WebUI.callTestCase(findTestCase('Page/User Register/Input Password'), [('password') : 'student1234'], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("verify email already exists")
	public void verify_email_already_exists() {
		WebUI.callTestCase(findTestCase('Page/User Register/verify email already exists'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.delay(5)
	}
}