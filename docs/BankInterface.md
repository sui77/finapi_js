# FinApiResTfulServices.BankInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_interface** | **String** | Bank interface. Possible values:<br><br>&bull; <code>FINTS_SERVER</code> - means that finAPI will download data via the bank's FinTS server.<br>&bull; <code>WEB_SCRAPER</code> - means that finAPI will parse data from the bank's online banking website.<br>&bull; <code>XS2A</code> - means that finAPI will download data via the bank's XS2A interface.<br> | 
**tppAuthenticationGroup** | [**TppAuthenticationGroup**](TppAuthenticationGroup.md) | TPP Authentication Group which the bank interface is connected to | [optional] 
**loginCredentials** | [**[BankInterfaceLoginField]**](BankInterfaceLoginField.md) | Login credentials fields which should be shown to the user. | 
**properties** | **[String]** | Set of interface properties/specifics. Possible values:<br><br>&bull; <code>REDIRECT_APPROACH</code> - means that the interface uses a redirect approach when authorizing the user. It requires you to pass the 'redirectUrl' field in all services which define the field. If the user already has imported a bank connection of the same bank that he is about to import, we recommend to confront the user with the question: <blockquote>For the selected bank you have already imported successfully the following accounts: &lt;account list&gt;. Are you sure that you want to import another bank connection from &lt;bank name&gt;? </blockquote>&bull; <code>DECOUPLED_APPROACH</code> - means that the interface uses a decoupled approach when authorizing the user.<br/><br/>&bull; <code>DETAILED_CONSENT</code> - means that the interface requires a list of account references when authorizing the user. It requires you to pass the 'accountReferences' field in all services which define the field.<br/><br/>Note that this set can be empty, if the interface does not have any specific properties. | [optional] 
**loginHint** | **String** | Login hint. Contains a German message for the user that explains what kind of credentials are expected.<br/><br/>Please note that it is essential to always show the login hint to the user if there is one, as the credentials that finAPI requires for the bank might be different to the credentials that the user knows from his online banking.<br/><br/>Also note that the contents of this field should always be interpreted as HTML, as the text might contain HTML tags for highlighted words, paragraphs, etc. | [optional] 
**health** | **Number** | The health status of this interface. This is a value between 0 and 100, depicting the percentage of successful communication attempts with the bank via this interface during the latest couple of bank connection imports or updates (across the entire finAPI system). Note that 'successful' means that there was no technical error trying to establish a communication with the bank. Non-technical errors (like incorrect credentials) are regarded successful communication attempts. | 
**lastCommunicationAttempt** | **String** | Time of the last communication attempt with this interface during an import, update or connect interface (across the entire finAPI system). The value is returned in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | [optional] 
**lastSuccessfulCommunication** | **String** | Time of the last successful communication with this interface during an import, update or connect interface (across the entire finAPI system). The value is returned in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | [optional] 


<a name="InterfaceEnum"></a>
## Enum: InterfaceEnum


* `WEB_SCRAPER` (value: `"WEB_SCRAPER"`)

* `FINTS_SERVER` (value: `"FINTS_SERVER"`)

* `xS2A` (value: `"XS2A"`)




<a name="[PropertiesEnum]"></a>
## Enum: [PropertiesEnum]


* `REDIRECT_APPROACH` (value: `"REDIRECT_APPROACH"`)

* `DECOUPLED_APPROACH` (value: `"DECOUPLED_APPROACH"`)

* `DETAILED_CONSENT` (value: `"DETAILED_CONSENT"`)




