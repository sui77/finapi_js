# FinApiResTfulServices.NotificationRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Notification rule identifier | 
**triggerEvent** | **String** | Trigger event type | 
**params** | **{String: String}** | Additional parameters that are specific to the trigger event type. Please refer to the documentation for details. | [optional] 
**callbackHandle** | **String** | The string that finAPI includes into the notifications that it sends based on this rule. | [optional] 
**includeDetails** | **Boolean** | Whether the notification messages that will be sent based on this rule contain encrypted detailed data or not | 


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




