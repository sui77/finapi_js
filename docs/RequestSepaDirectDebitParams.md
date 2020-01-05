# FinApiResTfulServices.RequestSepaDirectDebitParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **Number** | Identifier of the bank account to which you want to transfer the money. | 
**bankingPin** | **String** | Online banking PIN. Any symbols are allowed. Max length: 170. If a PIN is stored in the bank connection, then this field may remain unset. If finAPI's web form is not required and the field is set though then it will always be used (even if there is some other PIN stored in the bank connection). If you want the user to enter a PIN in finAPI's web form even when a PIN is stored, then just set the field to any value, so that the service recognizes that you wish to use the web form flow. | [optional] 
**storeSecrets** | **Boolean** | Whether to store the PIN. If the PIN is stored, it is not required to pass the PIN again when executing SEPA orders. Default value is 'false'. <br/><br/>NOTES:<br/> - before you set this field to true, please regard the 'pinsAreVolatile' flag of the bank connection that the account belongs to;<br/> - this field is ignored in case when the user will need to use finAPI's web form. The user will be able to decide whether to store the PIN or not in the web form, depending on the 'storeSecretsAvailableInWebForm' setting (see Client Configuration). | [optional] [default to false]
**twoStepProcedureId** | **String** | The bank-given ID of the two-step-procedure that should be used for the order. For a list of available two-step-procedures, see the corresponding bank connection (GET /bankConnections). If this field is not set, then the bank connection's default two-step-procedure will be used. Note that in this case, when the bank connection has no default two-step-procedure set, then the response of the service depends on whether you need to use finAPI's web form or not. If you need to use the web form, the user will be prompted to select the two-step-procedure within the web form. If you don't need to use the web form, then the service will return an error (passing a value for this field is required in this case). | [optional] 
**directDebitType** | **String** | Type of the direct debit; either <code>BASIC</code> or <code>B2B</code> (Business-To-Business). Please note that an account which supports the basic type must not necessarily support B2B (or vice versa). Check the source account's 'supportedOrders' field to find out which types of direct debit it supports.<br/><br/> | 
**sequenceType** | **String** | Sequence type of the direct debit. Possible values:<br/><br/>&bull; <code>OOFF</code> - means that this is a one-time direct debit order<br/>&bull; <code>FRST</code> - means that this is the first in a row of multiple direct debit orders<br/>&bull; <code>RCUR</code> - means that this is one (but not the first or final) within a row of multiple direct debit orders<br/>&bull; <code>FNAL</code> - means that this is the final in a row of multiple direct debit orders<br/><br/> | 
**executionDate** | **String** | Execution date for the direct debit(s), in the format 'YYYY-MM-DD'. | 
**singleBooking** | **Boolean** | This field is only regarded when you pass multiple orders. It determines whether the orders should be processed by the bank as one collective booking (in case of 'false'), or as single bookings (in case of 'true'). Default value is 'false'. | [optional] [default to false]
**directDebits** | [**[SingleDirectDebitData]**](SingleDirectDebitData.md) | List of the direct debits that you want to execute (may contain at most 15000 items). Please check the account's 'supportedOrders' field to find out whether you can pass multiple direct debits or just one. | 
**hideTransactionDetailsInWebForm** | **Boolean** | Whether the finAPI web form should hide transaction details when prompting the caller for the second factor. Default value is false. | [optional] [default to false]
**multiStepAuthentication** | [**MultiStepAuthenticationCallback**](MultiStepAuthenticationCallback.md) | Container for multi-step authentication data. Required when a previous service call initiated a multi-step authentication. | [optional] 
**storePin** | **Boolean** | Whether to store the PIN. If the PIN is stored, it is not required to pass the PIN again when executing SEPA orders. Default value is 'false'. <br/><br/>NOTES:<br/> - before you set this field to true, please regard the 'pinsAreVolatile' flag of the bank connection that the account belongs to;<br/> - this field is ignored in case when the user will need to use finAPI's web form. The user will be able to decide whether to store the PIN or not in the web form, depending on the 'storeSecretsAvailableInWebForm' setting (see Client Configuration).<br><br>NOTE: This field is deprecated and will be removed at some point. Use 'storeSecrets' instead. | [optional] [default to false]


<a name="DirectDebitTypeEnum"></a>
## Enum: DirectDebitTypeEnum


* `b2B` (value: `"B2B"`)

* `BASIC` (value: `"BASIC"`)




<a name="SequenceTypeEnum"></a>
## Enum: SequenceTypeEnum


* `OOFF` (value: `"OOFF"`)

* `FRST` (value: `"FRST"`)

* `RCUR` (value: `"RCUR"`)

* `FNAL` (value: `"FNAL"`)




