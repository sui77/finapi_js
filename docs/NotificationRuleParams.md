# FinApiResTfulServices.NotificationRuleParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerEvent** | **String** | Trigger event type | 
**params** | **{String: String}** | Additional parameters that are specific to the chosen trigger event type. Please refer to the documentation for details. | [optional] 
**callbackHandle** | **String** | An arbitrary string that finAPI will include into the notifications that it sends based on this rule and that you can use to identify the notification in your application. For instance, you could include the identifier of the user that you create this rule for. Maximum allowed length of the string is 512 characters.<br/><br/>Note that for this parameter, you can pass the symbols '/', '=', '%' and '\"' in addition to the symbols that are generally allowed in finAPI (see https://finapi.zendesk.com/hc/en-us/articles/222013148). This was done to enable you to set Base64 encoded strings and JSON structures for the callback handle. | [optional] 
**includeDetails** | **Boolean** | Whether the notification messages that will be sent based on this rule should contain encrypted detailed data or not | [optional] [default to false]


<a name="TriggerEventEnum"></a>
## Enum: TriggerEventEnum


* `NEW_ACCOUNT_BALANCE` (value: `"NEW_ACCOUNT_BALANCE"`)

* `NEW_TRANSACTIONS` (value: `"NEW_TRANSACTIONS"`)

* `BANK_LOGIN_ERROR` (value: `"BANK_LOGIN_ERROR"`)

* `FOREIGN_MONEY_TRANSFER` (value: `"FOREIGN_MONEY_TRANSFER"`)

* `LOW_ACCOUNT_BALANCE` (value: `"LOW_ACCOUNT_BALANCE"`)

* `HIGH_TRANSACTION_AMOUNT` (value: `"HIGH_TRANSACTION_AMOUNT"`)

* `CATEGORY_CASH_FLOW` (value: `"CATEGORY_CASH_FLOW"`)

* `NEW_TERMS_AND_CONDITIONS` (value: `"NEW_TERMS_AND_CONDITIONS"`)




