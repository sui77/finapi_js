# FinApiResTfulServices.CheckCategorizationTransactionData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Identifier of transaction. This can be any arbitrary string that will be passed back in the response so that you can map the results to the given transactions. Note that the identifier must be unique within the given list of transactions. | 
**accountTypeId** | **Number** | Identifier of account type.<br/><br/>1 = Checking,<br/>2 = Savings,<br/>3 = CreditCard,<br/>4 = Security,<br/>5 = Loan,<br/>6 = Pocket (DEPRECATED; will not be returned for any account unless this type has explicitly been set via PATCH),<br/>7 = Membership,<br/>8 = Bausparen<br/><br/> | 
**amount** | **Number** | Amount | 
**purpose** | **String** | Purpose. Any symbols are allowed. Maximum length is 2000. Default value: null. | [optional] 
**counterpart** | **String** | Counterpart. Any symbols are allowed. Maximum length is 80. Default value: null. | [optional] 
**counterpartIban** | **String** | Counterpart IBAN. Default value: null. | [optional] 
**counterpartAccountNumber** | **String** | Counterpart account number. Default value: null. | [optional] 
**counterpartBlz** | **String** | Counterpart BLZ. Default value: null. | [optional] 
**counterpartBic** | **String** | Counterpart BIC. Default value: null. | [optional] 
**mcCode** | **String** | Merchant category code (for credit card transactions only). May only contain up to 4 digits. Default value: null. | [optional] 
**typeCodeZka** | **String** | ZKA business transaction code which relates to the transaction's type (Number from 0 through 999). Default value: null. | [optional] 


