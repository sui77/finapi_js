# FinApiResTfulServices.EditBankConnectionParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | New name for the bank connection. Maximum length is 64. If you do not want to change the current name let this field remain unset. If you want to clear the current name, set the field's value to an empty string (\"\"). | [optional] 
**bankingUserId** | **String** | NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>New online banking user ID. If you do not want to change the current user ID let this field remain unset. In case you need to use finAPI's web form to let the user update the field, just set the field to any value, so that the service recognizes that you wish to use the web form flow. Note that you cannot clear the current user ID, i.e. a bank connection must always have a user ID (except for when it is a 'demo connection'). Max length: 170. | [optional] 
**bankingCustomerId** | **String** | NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>New online banking customer ID. If you do not want to change the current customer ID let this field remain unset. In case you need to use finAPI's web form to let the user update the field, just set the field to non-empty value, so that the service recognizes that you wish to use the web form flow. If you want to clear the current customer ID, set the field's value to an empty string (\"\"). Max length: 170. | [optional] 
**bankingPin** | **String** | NOTE: This field is deprecated and will be removed at some point. Use 'loginCredentials' + 'interface' instead. If any of those two fields is used, then the value of this field will be ignored.<br><br>New online banking PIN. If you do not want to change the current PIN let this field remain unset. In case you need to use finAPI's web form to let the user update the field, just set the field to non-empty value, so that the service recognizes that you wish to use the web form flow. If you want to clear the current PIN, set the field's value to an empty string (\"\").<br/><br/>Any symbols are allowed. Max length: 170. | [optional] 
**_interface** | **String** | The interface for which you want to edit data. Must be given when you pass 'loginCredentials' and/or a 'defaultTwoStepProcedureId'. | [optional] 
**loginCredentials** | [**[LoginCredential]**](LoginCredential.md) | Set of login credentials that you want to edit. Must be passed in combination with the 'interface' field. The labels that you pass must match with the login credential labels that the respective interface defines. If you want to clear the stored value for a credential, you can pass an empty string (\"\") as value.In case you need to use finAPI's web form to let the user update the login credentials, send all fields the user wishes to update with a non-empty value.In case all fields contain an empty string (\"\"), no webform will be generated. Note that any change in the credentials will automatically remove the saved consent data associated with those credentials.<br><br>NOTE: When you pass this field, then the fields 'bankingUserId','bankingCustomerId' and 'bankingPin' will be ignored. | [optional] 
**defaultTwoStepProcedureId** | **String** | NOTE: In the future, this field will work only in combination with the 'interface' field.<br><br>New default two-step-procedure. Must match the 'procedureId' of one of the procedures that are listed in the bank connection. If you do not want to change this field let it remain unset. If you want to clear the current default two-step-procedure, set the field's value to an empty string (\"\"). | [optional] 


<a name="InterfaceEnum"></a>
## Enum: InterfaceEnum


* `FINTS_SERVER` (value: `"FINTS_SERVER"`)

* `WEB_SCRAPER` (value: `"WEB_SCRAPER"`)

* `xS2A` (value: `"XS2A"`)




