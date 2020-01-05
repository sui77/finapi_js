# FinApiResTfulServices.ErrorMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[ErrorDetails]**](ErrorDetails.md) | List of errors | 
**_date** | **String** | Server date of when the error(s) occurred, in the format YYYY-MM-DD HH:MM:SS.SSS | 
**requestId** | **String** | ID of the request that caused this error. This is either what you have passed for the header 'X-REQUEST-ID', or an auto-generated ID in case you didn't pass any value for that header. | [optional] 
**endpoint** | **String** | The service endpoint that was called | 
**authContext** | **String** | Information about the authorization context of the service call | 
**bank** | **String** | BLZ and name (in format \"<BLZ> - <name>\") of a bank that was used for the original request | [optional] 


