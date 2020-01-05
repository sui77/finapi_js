# FinApiResTfulServices.AccountParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountName** | **String** | Account name. Maximum length is 512. | [optional] 
**accountTypeId** | **Number** | Identifier of account type.<br/><br/>1 = Checking,<br/>2 = Savings,<br/>3 = CreditCard,<br/>4 = Security,<br/>5 = Loan,<br/>6 = Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>7 = Membership,<br/>8 = Bausparen<br/><br/><br/> Note: this field is deprecated and will be removed at some point. Please refer to the accountType field instead. | [optional] 
**accountType** | **String** | An account type.<br/><br/>Checking,<br/>Savings,<br/>CreditCard,<br/>Security,<br/>Loan,<br/>Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>Membership,<br/>Bausparen<br/><br/> | [optional] 
**isNew** | **Boolean** | Whether this account should be flagged as 'new' or not. Any newly imported account will have this flag initially set to true, and remain so until you set it to false (see PATCH /accounts/<id>). How you use this field is up to your interpretation, however it is recommended to set the flag to false for all accounts right after the initial import of the bank connection. This way, you will be able recognize accounts that get newly imported during a later update of the bank connection, by checking for any accounts with the flag set to true after every update of the bank connection. | [optional] 


<a name="AccountTypeEnum"></a>
## Enum: AccountTypeEnum


* `checking` (value: `"Checking"`)

* `savings` (value: `"Savings"`)

* `creditCard` (value: `"CreditCard"`)

* `security` (value: `"Security"`)

* `loan` (value: `"Loan"`)

* `pocket` (value: `"Pocket"`)

* `membership` (value: `"Membership"`)

* `bausparen` (value: `"Bausparen"`)




