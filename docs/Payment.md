# FinApiResTfulServices.Payment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Payment identifier | 
**accountId** | **Number** | Identifier of the account to which this payment relates | 
**type** | **String** | Payment type | 
**amount** | **Number** | Total money amount of the payment order(s), as absolute value | 
**orderCount** | **Number** | Total count of orders included in this payment | 
**status** | **String** | Current payment status:<br/> &bull; OPEN: means that this payment has been created in finAPI, but not yet submitted to the bank.<br/> &bull; PENDING: means that this payment has been requested at the bank, but not yet executed.<br/> &bull; SUCCESSFUL: means that this payment has been successfully executed.<br/> &bull; NOT_SUCCESSFUL: means that this payment could not be executed successfully.<br/> &bull; DISCARDED: means that this payment was discarded, either because another payment was requested for the same account before this payment was executed and the bank does not support this, or because the bank has rejected the payment even before the execution. | 
**bankMessage** | **String** | Contains the bank's response to the execution of this payment. This field is not set until the payment gets executed. Note that even after the execution of the payment, the field might still not be set, if the bank did not send any response message. | [optional] 
**requestDate** | **String** | Time of when this payment was requested, in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time) | [optional] 
**executionDate** | **String** | Time of when this payment was executed, in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time) | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `MONEY_TRANSFER` (value: `"MONEY_TRANSFER"`)

* `DIRECT_DEBIT` (value: `"DIRECT_DEBIT"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `OPEN` (value: `"OPEN"`)

* `PENDING` (value: `"PENDING"`)

* `SUCCESSFUL` (value: `"SUCCESSFUL"`)

* `NOT_SUCCESSFUL` (value: `"NOT_SUCCESSFUL"`)

* `DISCARDED` (value: `"DISCARDED"`)




