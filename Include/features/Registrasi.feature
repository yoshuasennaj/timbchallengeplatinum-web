@Registrasi @Smoke
Feature: Registrasi
//muhamadAgeng
	@REGIS001
	Scenario: REGIS001 - User want to register with account registered
		Then User click link masuk
		Then User click link daftar disini
		Then User input nama "ageng"
		Then User input email "agengjobb@gmail.com"
		Then User input password "Cobain23"
		Then User click button daftar
		
		@REGIS002
	Scenario: REGIS002 - User want to register without nama
		Then User click link masuk
		Then User click link daftar disini
		Then User input email "agengjobb@gmail.com"
		Then User input password "Cobain23"
		Then User click button daftar
		
		@REGIS003
	Scenario: REGIS003 - User want to register without email address
		Then User click link masuk
		Then User click link daftar disini
		Then User input nama "ageng"
		Then User input password "Cobain23"
		Then User click button daftar
		
		@REGIS004
	Scenario: REGIS004 - User want to register without password
		Then User click link masuk
		Then User click link daftar disini
		Then User input nama "ageng"
		Then User input email "agengjobb@gmail.com"
		Then User click button daftar
		
		@REGIS005
	Scenario: REGIS005 - User want to register without email & password
		Then User click link masuk
		Then User click link daftar disini
		Then User input nama "ageng"
		Then User click button daftar
		