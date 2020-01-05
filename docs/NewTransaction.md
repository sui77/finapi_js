# FinApiResTfulServices.NewTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount. Required. | 
**purpose** | **String** | Purpose. Any symbols are allowed. Maximum length is 2000. Optional. Default value: null. | [optional] 
**counterpart** | **String** | Counterpart. Any symbols are allowed. Maximum length is 80. Optional. Default value: null. | [optional] 
**counterpartIban** | **String** | Counterpart IBAN. Optional. Default value: null. | [optional] 
**counterpartBlz** | **String** | Counterpart BLZ. Optional. Default value: null. | [optional] 
**counterpartBic** | **String** | Counterpart BIC. Optional. Default value: null. | [optional] 
**counterpartAccountNumber** | **String** | Counterpart account number. Maximum length is 34. Optional. Default value: null. | [optional] 
**bookingDate** | **String** | Booking date in the format 'YYYY-MM-DD'.<br/><br/>If the date lies back more than 10 days from the booking date of the latest transaction that currently exists in the account, then this transaction will be ignored and not imported. If the date depicts a date in the future, then finAPI will deal with it the same way as it does with real transactions during a real update (see fields 'bankBookingDate' and 'finapiBookingDate' in the Transaction Resource for explanation).<br/><br/>This field is optional, default value is the current date. | [optional] 
**valueDate** | **String** | Value date in the format 'YYYY-MM-DD'. Optional. Default value: Same as the booking date. | [optional] 


