# FinApiResTfulServices.AccessToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tokenType** | **String** | Token type (it's always 'bearer') | 
**expiresIn** | **Number** | Expiration time in seconds. A value of 0 means that the token never expires (unless it is explicitly invalidated, e.g. by revocation, or when a user gets locked). | 
**scope** | **String** | Requested scopes (it's always 'all') | 
**refreshToken** | **String** | Refresh token. Only set in case of grant_type='password'. Token has a length of up to 128 characters. | [optional] 
**accessToken** | **String** | Access token. Token has a length of up to 128 characters. | 


