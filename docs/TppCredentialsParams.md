# FinApiResTfulServices.TppCredentialsParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tppAuthenticationGroupId** | **Number** | The TPP Authentication Group Id for which the credentials can be used | 
**label** | **String** | Optional label to credentials | 
**tppClientId** | **String** | ID of the TPP accessing the ASPSP API, as provided by the ASPSP as the result of registration | [optional] 
**tppClientSecret** | **String** | Secret of the TPP accessing the ASPSP API, as provided by the ASPSP as the result of registration | [optional] 
**tppApiKey** | **String** | API Key provided by ASPSP  as the result of registration | [optional] 
**validFromDate** | **String** | Credentials \"valid from\" date in the format 'YYYY-MM-DD'. Default is today's date | [optional] 
**validUntilDate** | **String** | Credentials \"valid until\" date in the format 'YYYY-MM-DD'. Default is null which means \"indefinite\" (no limit) | [optional] 


