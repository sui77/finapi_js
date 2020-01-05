# FinApiResTfulServices.BankConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Status of the consent. If <code>PRESENT</code>, it means that finAPI has a consent stored and can use it to connect to the bank. If <code>NOT_PRESENT</code>, finAPI will need to acquire a consent when connecting to the bank, which may require login credentials (either passed by the client, or stored in finAPI), and/or user involvement. Note that even when a consent is <code>PRESENT</code>, it may no longer be valid and finAPI will still have to acquire a new consent. | 
**expiresAt** | **String** | Expiration time of the consent in the format 'YYYY-MM-DD HH:MM:SS.SSS' (german time). | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PRESENT` (value: `"PRESENT"`)

* `NOT_PRESENT` (value: `"NOT_PRESENT"`)




