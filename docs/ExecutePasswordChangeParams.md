# FinApiResTfulServices.ExecutePasswordChangeParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | User identifier | 
**password** | **String** | User's new password. Minimum length is 6, and maximum length is 128. | 
**passwordChangeToken** | **String** | Decrypted password change token (the token that you received from the /users/requestPasswordChange service, decrypted with your data decryption key) | 


