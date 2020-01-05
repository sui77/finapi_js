# FinApiResTfulServices.ConnectInterfaceParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankConnectionId** | **Number** | Bank connection identifier | 
**_interface** | **String** | The interface to use for connecting with the bank. | [optional] 
**loginCredentials** | [**[LoginCredential]**](LoginCredential.md) | Set of login credentials. Must be passed in combination with the 'interface' field. For mandators requiring a web form, no matter the passed login credentials, the web form will contain all login fields defined by the bank for the respective interface. | [optional] 
**storeSecrets** | **Boolean** | Whether to store the secret login fields. If the secret fields are stored, then updates can be triggered without the involvement of the users, as long as the credentials remain valid and the bank consent has not expired. Note that bank consent will be stored regardless of the field value. Default value is false.<br/><br/>NOTES:<br/> - this field is ignored in case when the user will need to use finAPI's web form. The user will be able to decide whether to store the secrets or not in the web form, depending on the 'storeSecretsAvailableInWebForm' setting (see Client Configuration). | [optional] [default to false]
**skipPositionsDownload** | **Boolean** | Whether to skip the download of transactions and securities or not. If set to true, then finAPI will download just the accounts list with the accounts' information (like account name, number, holder, etc), as well as the accounts' balances (if possible), but skip the download of transactions and securities. Default is false.<br/><br/>NOTES:<br/>&bull; If you skip the download of transactions and securities during an import or update, you can still download them on a later update (though you might not get all positions at a later point, because the date range in which the bank servers provide this data is usually limited). However, once finAPI has downloaded the transactions or securities for the first time, you will not be able to go back to skipping the download of transactions and securities! In other words: Once you make your first request with skipPositionsDownload=false for a certain bank connection, you will no longer be able to make a request with skipPositionsDownload=true for that same bank connection.<br/>&bull; If this bank connection is updated via finAPI's automatic batch update, then transactions and security positions <u>will</u> be downloaded in any case!<br/>&bull; For security accounts, skipping the downloading of the securities might result in the account's balance also not being downloaded.<br/>&bull; For Bausparen accounts, this field is ignored. finAPI will always download transactions for Bausparen accounts.<br/> | [optional] [default to false]
**loadOwnerData** | **Boolean** | Whether to load information about the bank connection owner(s) - see field 'owners'. Default value is 'false'.<br><br>NOTE: This feature is supported only by the WEB_SCRAPER interface. | [optional] [default to false]
**accountReferences** | [**[AccountReference]**](AccountReference.md) | List of accounts for which access is requested from the bank. It must only be passed if the bank interface has the DETAILED_CONSENT property set. | [optional] 
**multiStepAuthentication** | [**MultiStepAuthenticationCallback**](MultiStepAuthenticationCallback.md) | Container for multi-step authentication data | [optional] 
**redirectUrl** | **String** | Must only be passed when the used interface has the property REDIRECT_APPROACH and no web form flow is used. The user will be redirected to the given URL from the bank's website after having entered his credentials. Must use HTTPS protocol. | [optional] 


<a name="InterfaceEnum"></a>
## Enum: InterfaceEnum


* `FINTS_SERVER` (value: `"FINTS_SERVER"`)

* `WEB_SCRAPER` (value: `"WEB_SCRAPER"`)

* `xS2A` (value: `"XS2A"`)




