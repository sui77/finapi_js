# FinApiResTfulServices.UpdateResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | **String** | Note that 'OK' just means that finAPI could successfully connect and log in to the bank server. However, it does not necessarily mean that all accounts could be updated successfully. For the latter, please refer to the 'status' field of the Account resource. | 
**errorMessage** | **String** | In case the update result is not <code>OK</code>, this field may contain an error message with details about why the update failed (it is not guaranteed that a message is available though). In case the update result is <code>OK</code>, the field will always be null. | [optional] 
**errorType** | **String** | In case the update result is not <code>OK</code>, this field contains the type of the error that occurred. BUSINESS means that the bank server responded with a non-technical error message for the user. TECHNICAL means that some internal error has occurred in finAPI or at the bank server. | [optional] 
**timestamp** | **String** | Time of the update. The value is returned in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | 


<a name="ResultEnum"></a>
## Enum: ResultEnum


* `OK` (value: `"OK"`)

* `BANK_SERVER_REJECTION` (value: `"BANK_SERVER_REJECTION"`)

* `INTERNAL_SERVER_ERROR` (value: `"INTERNAL_SERVER_ERROR"`)




<a name="ErrorTypeEnum"></a>
## Enum: ErrorTypeEnum


* `BUSINESS` (value: `"BUSINESS"`)

* `TECHNICAL` (value: `"TECHNICAL"`)




